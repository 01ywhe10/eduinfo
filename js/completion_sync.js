(function () {
  'use strict';

  const STORAGE_KEY = 'sampyo_admin_course_status_v3';
  const config = window.EDUINFO_SUPABASE_CONFIG || {};
  const configured = /^https:\/\/.+\.supabase\.co$/.test(config.url || '') && Boolean(config.publishableKey);
  const client = configured && window.supabase ? window.supabase.createClient(config.url, config.publishableKey) : null;
  let channel = null;

  function rowsToStatus(rows, base) {
    const result = { ...(base || {}) };
    (rows || []).forEach(row => {
      const previous = result[row.course_id] || {};
      result[row.course_id] = {
        ...previous,
        status: row.status,
        progress: row.progress,
        targetCount: row.target_count,
        completedCount: row.completed_count,
        extraCount: row.extra_count,
        eduDate: row.edu_date || '',
        checkedTrainees: row.checked_trainees || previous.checkedTrainees || [],
        round1Trainees: row.round1_trainees || previous.round1Trainees || [],
        round2Trainees: row.round2_trainees || previous.round2Trainees || []
      };
    });
    return result;
  }

  function readLocal() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (error) { console.error('이수현황 로컬 데이터 읽기 실패:', error); return {}; }
  }

  function cacheAndRefresh(next) {
    const current = readLocal();
    if (JSON.stringify(current) === JSON.stringify(next)) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('completion-status-synced', { detail: next }));
    setTimeout(() => window.location.reload(), 50);
    return true;
  }

  async function pullPublic() {
    if (!client) return readLocal();
    const { data, error } = await client.from('course_status_public').select('*').order('course_id');
    if (error) { console.error('공개 이수현황 동기화 실패:', error.message); return readLocal(); }
    const merged = rowsToStatus(data, readLocal());
    cacheAndRefresh(merged);
    return merged;
  }

  async function pullPrivate() {
    if (!client) return readLocal();
    const { data, error } = await client.from('course_status_private').select('*').order('course_id');
    if (error) throw error;
    if (!data.length) return null;
    const next = rowsToStatus(data, {});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  async function push(data) {
    if (!client) return { skipped: true };
    const { data: authData } = await client.auth.getUser();
    const user = authData && authData.user;
    if (!user) return { skipped: true };
    const entries = Object.entries(data || {});
    const privateRows = entries.map(([courseId, item]) => ({
      course_id: courseId, status: item.status || '미진행', progress: Number(item.progress) || 0,
      target_count: Number(item.targetCount) || 0, completed_count: Number(item.completedCount) || 0,
      extra_count: Number(item.extraCount) || 0, edu_date: item.eduDate || '',
      checked_trainees: item.checkedTrainees || [], round1_trainees: item.round1Trainees || [],
      round2_trainees: item.round2Trainees || [], updated_at: new Date().toISOString(), updated_by: user.id
    }));
    const publicRows = privateRows.map(({ course_id, status, progress, target_count, completed_count, extra_count, edu_date, updated_at }) =>
      ({ course_id, status, progress, target_count, completed_count, extra_count, edu_date, updated_at }));
    const privateResult = await client.from('course_status_private').upsert(privateRows, { onConflict: 'course_id' });
    if (privateResult.error) throw privateResult.error;
    const publicResult = await client.from('course_status_public').upsert(publicRows, { onConflict: 'course_id' });
    if (publicResult.error) throw publicResult.error;
    return { skipped: false };
  }

  async function signIn(email, password) {
    if (!client) throw new Error('Supabase 설정값이 입력되지 않았습니다.');
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const remote = await pullPrivate();
    if (!remote) await push(readLocal());
    return data;
  }

  async function hasSession() {
    if (!client) return false;
    const { data } = await client.auth.getSession();
    return Boolean(data && data.session);
  }

  function subscribe() {
    if (!client || channel) return;
    channel = client.channel('course-status-public-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'course_status_public' }, pullPublic)
      .subscribe();
  }

  window.completionSync = { configured, client, pullPublic, pullPrivate, push, signIn, hasSession, subscribe };
  if (configured) {
    pullPublic().finally(subscribe);
  }
})();