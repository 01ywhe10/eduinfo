(function () {
  'use strict';

  function getClient() {
    return (window.completionSync && window.completionSync.client) || null;
  }

  async function getAdminUser() {
    const c = getClient();
    if (!c) return null;
    try {
      const { data, error } = await c.auth.getUser();
      if (error || !data || !data.user) return null;
      return data.user;
    } catch (e) {
      return null;
    }
  }

  async function pull() {
    const c = getClient();
    if (!c) return null;
    try {
      const user = await getAdminUser();
      if (!user) return null;

      const { data, error } = await c.from('trainees').select('*').order('created_at');
      if (error) {
        console.warn('Supabase 교육대상자 목록 조회 건너뜀:', error.message);
        return null;
      }
      if (!data || data.length === 0) return null;

      return data.map((r, i) => ({
        seq: String(i + 1),
        dept: r.dept,
        position: r.position || '책임',
        job: r.job || '생산관리',
        empId: r.emp_id,
        name: r.name,
        processLvl: r.process_lvl || '(선택)',
        maintLvl: r.maint_lvl || '(선택)',
        qualityLvl: r.quality_lvl || '(선택)',
        email: r.email || `${r.emp_id}@sampyo.co.kr`,
        phone: r.phone || '010-0000-0000'
      }));
    } catch (error) {
      console.warn('Supabase pull 오류:', error);
      return null;
    }
  }

  async function upsert(t) {
    const c = getClient();
    if (!c) throw new Error('Supabase 설정이 없습니다.');
    const user = await getAdminUser();
    if (!user) throw new Error('관리자 인증 세션이 필요합니다. Admin.html에서 로그인해 주세요.');

    const payload = {
      emp_id: String(t.empId),
      name: t.name,
      dept: t.dept,
      position: t.position || '책임',
      job: t.job || '생산관리',
      process_lvl: t.processLvl || '(선택)',
      maint_lvl: t.maintLvl || '(선택)',
      quality_lvl: t.qualityLvl || '(선택)',
      email: t.email || `${t.empId}@sampyo.co.kr`,
      phone: t.phone || '010-0000-0000',
      updated_at: new Date().toISOString(),
      updated_by: user.id
    };

    const { error } = await c.from('trainees').upsert(payload, { onConflict: 'emp_id' });
    if (error) throw error;
    return { success: true };
  }

  async function insert(t) {
    return upsert(t);
  }

  async function remove(empId) {
    const c = getClient();
    if (!c) throw new Error('Supabase 설정이 없습니다.');
    const user = await getAdminUser();
    if (!user) throw new Error('관리자 인증 세션이 필요합니다.');

    const { error } = await c.from('trainees').delete().eq('emp_id', String(empId));
    if (error) throw error;
    return { success: true };
  }

  async function saveAll(list) {
    const c = getClient();
    if (!c) throw new Error('Supabase 설정이 없습니다.');
    if (!Array.isArray(list) || list.length === 0) return { count: 0 };
    
    const user = await getAdminUser();
    if (!user) throw new Error('관리자 인증 세션이 필요합니다. Admin.html에서 먼저 관리자 로그인을 진행해 주세요.');

    const payload = list.map(t => ({
      emp_id: String(t.empId),
      name: t.name,
      dept: t.dept,
      position: t.position || '책임',
      job: t.job || '생산관리',
      process_lvl: t.processLvl || '(선택)',
      maint_lvl: t.maintLvl || '(선택)',
      quality_lvl: t.qualityLvl || '(선택)',
      email: t.email || `${t.empId}@sampyo.co.kr`,
      phone: t.phone || '010-0000-0000',
      updated_at: new Date().toISOString(),
      updated_by: user.id
    }));

    const { error } = await c.from('trainees').upsert(payload, { onConflict: 'emp_id' });
    if (error) throw error;
    return { success: true, count: payload.length };
  }

  window.traineeSync = {
    pull,
    insert,
    upsert,
    remove,
    saveAll
  };
})();
