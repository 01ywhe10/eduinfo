// Default Admin Management Data Initialization
const defaultDepartmentData = [
  { name: '소성팀', target: 35, completed: 31 },
  { name: '공정기술팀', target: 28, completed: 25 },
  { name: '설비보전팀', target: 45, completed: 38 },
  { name: '품질관리팀', target: 30, completed: 27 },
  { name: '환경안전팀', target: 20, completed: 19 },
  { name: '전기계장팀', target: 25, completed: 21 }
];

let adminCourseStatus = {};
let adminDepartmentData = [];

// Load data from LocalStorage or initialize defaults
function loadAdminData() {
  const savedStatus = localStorage.getItem('sampyo_admin_course_status_v3');
  if (savedStatus) {
    adminCourseStatus = JSON.parse(savedStatus);
  } else {
    // Reset all progress, completed, and extra counts to 0 initially
    curriculumData.forEach((item) => {
      const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[item.id]) ? courseTraineeMap[item.id] : [];
      const realTarget = matchedList.length;

      adminCourseStatus[item.id] = {
        status: '미진행',
        progress: 0,
        targetCount: realTarget,
        completedCount: 0,
        extraCount: 0
      };
    });
    saveAdminData();
  }

  const savedDepts = localStorage.getItem('sampyo_admin_dept_data_v3');
  if (savedDepts) {
    adminDepartmentData = JSON.parse(savedDepts);
  } else {
    // Reset all department completed counts to 0
    adminDepartmentData = defaultDepartmentData.map(d => ({
      name: d.name,
      target: d.target,
      completed: 0
    }));
    localStorage.setItem('sampyo_admin_dept_data_v3', JSON.stringify(adminDepartmentData));
  }
}

function saveAdminData() {
  localStorage.setItem('sampyo_admin_course_status_v3', JSON.stringify(adminCourseStatus));
}

let chartDeptInstance = null;
let chartStatusInstance = null;

function getAdminPassword() {
  return localStorage.getItem('sampyo_admin_password') || 'sampyo1234';
}

document.addEventListener('DOMContentLoaded', () => {
  const isAuth = sessionStorage.getItem('sampyo_admin_authenticated');
  if (isAuth === 'true') {
    unlockAdminPortal();
  } else {
    document.getElementById('admin-auth-overlay').style.display = 'flex';
    document.getElementById('admin-main-container').style.display = 'none';
  }
});

function handleAdminLogin(event) {
  if (event) {
    event.preventDefault();
  }
  const inputEl = document.getElementById('admin-password-input');
  if (!inputEl) return;
  const inputPw = inputEl.value.trim();
  const errorMsg = document.getElementById('password-error-msg');

  if (inputPw === getAdminPassword()) {
    if (errorMsg) errorMsg.style.display = 'none';
    sessionStorage.setItem('sampyo_admin_authenticated', 'true');
    unlockAdminPortal();
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
    inputEl.value = '';
    inputEl.focus();
  }
}

function unlockAdminPortal() {
  document.getElementById('admin-auth-overlay').style.display = 'none';
  document.getElementById('admin-main-container').style.display = 'block';

  loadAdminData();
  initAdminDashboard();
  renderAdminTable();
  setupAdminEvents();
}

function initAdminDashboard() {
  updateAdminKPIs();
  renderAdminCharts();
}

function updateAdminKPIs() {
  const totalCourses = curriculumData.length;
  let totalProgressSum = 0;
  let completedCourses = 0;
  let inProgressCourses = 0;
  let totalTarget = 0;
  let totalCompleted = 0;

  curriculumData.forEach(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0 };
    totalProgressSum += st.progress;
    totalTarget += st.targetCount;
    totalCompleted += st.completedCount;

    if (st.status === '완료') completedCourses++;
    else if (st.status === '진행중') inProgressCourses++;
  });

  const avgProgress = (totalProgressSum / totalCourses).toFixed(1);
  const participationRate = ((totalCompleted / totalTarget) * 100).toFixed(1);

  document.getElementById('kpi-avg-progress').textContent = `${avgProgress}%`;
  document.getElementById('kpi-participation-rate').textContent = `${participationRate}%`;
  document.getElementById('kpi-completed-courses').textContent = `${completedCourses}개 과목`;
  document.getElementById('kpi-inprogress-courses').textContent = `${inProgressCourses}개 과목`;
}

function renderAdminCharts() {
  const isLight = document.body.classList.contains('theme-pantone');
  const textColor = isLight ? '#0f172a' : '#ffffff';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)';

  // Chart 1: Real Department Participation Bar Chart from traineeData
  const ctxDept = document.getElementById('chart-dept').getContext('2d');
  if (chartDeptInstance) chartDeptInstance.destroy();

  // Aggregate department statistics from traineeData & adminCourseStatus
  const deptMap = {};
  if (typeof traineeData !== 'undefined') {
    traineeData.forEach(t => {
      const d = t.dept;
      if (!deptMap[d]) {
        deptMap[d] = { name: d, totalTrainees: 0, completedCount: 0 };
      }
      deptMap[d].totalTrainees += 1;
    });
  }

  // Calculate actual attendance counts from adminCourseStatus
  let globalTotalCompleted = 0;
  curriculumData.forEach(c => {
    const st = adminCourseStatus[c.id] || { completedCount: 0, extraCount: 0 };
    globalTotalCompleted += (st.completedCount + (st.extraCount || 0));
  });

  const deptNames = Object.keys(deptMap);
  const deptDetails = deptNames.map(d => {
    const target = deptMap[d].totalTrainees;
    // Calculate realistic completed attendance proportion per department
    const completed = Math.min(target, Math.round(globalTotalCompleted * (target / 46)));
    const rate = target > 0 ? ((completed / target) * 100).toFixed(1) : '0.0';
    return {
      name: d,
      target: target,
      completed: completed,
      rate: parseFloat(rate)
    };
  });

  const labels = deptDetails.map(d => d.name);
  const dataRates = deptDetails.map(d => d.rate);

  chartDeptInstance = new Chart(ctxDept, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '부서별 참여율 (%)',
        data: dataRates,
        backgroundColor: '#009ade',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderColor: '#009ade',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: (items) => `🏢 ${items[0].label}`,
            label: (ctx) => {
              const idx = ctx.dataIndex;
              const info = deptDetails[idx];
              return [
                ` • 참여대상자 (참석횟수): ${info.completed}명 / ${info.target}명`,
                ` • 부서 참여율: ${info.rate}%`
              ];
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: textColor, font: { weight: '600', size: 11 } }, grid: { display: false } },
        y: { ticks: { color: textColor, max: 100, font: { weight: '600' } }, grid: { color: gridColor }, beginAtZero: true }
      }
    }
  });

  // Chart 2: Course Status Doughnut Chart
  let completed = 0, inProgress = 0, notStarted = 0;
  curriculumData.forEach(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행' };
    if (st.status === '완료') completed++;
    else if (st.status === '진행중') inProgress++;
    else notStarted++;
  });

  const ctxStatus = document.getElementById('chart-status').getContext('2d');
  if (chartStatusInstance) chartStatusInstance.destroy();

  chartStatusInstance = new Chart(ctxStatus, {
    type: 'doughnut',
    data: {
      labels: ['완료', '진행중', '미진행'],
      datasets: [{
        data: [completed, inProgress, notStarted],
        backgroundColor: ['#10b981', '#f59e0b', '#64748b'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: textColor, font: { family: 'Pretendard', size: 12, weight: '700' } }
        },
        tooltip: {
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderColor: '#009ade',
          borderWidth: 1
        }
      }
    }
  });
}

function populateDepartmentFilter() {
  const select = document.getElementById('admin-filter-dept');
  if (!select || typeof traineeData === 'undefined') return;

  const depts = [...new Set(traineeData.map(d => d.dept))].sort();
  select.innerHTML = '<option value="all">전체 소속 부서 (16개 부서)</option>';
  depts.forEach(dept => {
    const count = traineeData.filter(t => t.dept === dept).length;
    const opt = document.createElement('option');
    opt.value = dept;
    opt.textContent = `소속: ${dept} (${count}명)`;
    select.appendChild(opt);
  });
}

function renderAdminTable(filterQuery = '', filterLevel = 'all', filterStatus = 'all', filterDept = 'all') {
  const tbody = document.getElementById('admin-table-body');
  tbody.innerHTML = '';

  const filtered = curriculumData.filter(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행' };
    const matchesLevel = filterLevel === 'all' || item.level === filterLevel;
    const matchesStatus = filterStatus === 'all' || st.status === filterStatus;
    
    // Department filtering matching courseTraineeMap
    let matchesDept = true;
    if (filterDept !== 'all' && typeof courseTraineeMap !== 'undefined') {
      const list = courseTraineeMap[item.id] || [];
      matchesDept = list.some(t => t.dept === filterDept);
    }

    const matchesQuery = 
      item.title.toLowerCase().includes(filterQuery) ||
      item.mainInstructor.toLowerCase().includes(filterQuery) ||
      item.category.toLowerCase().includes(filterQuery);

    return matchesLevel && matchesStatus && matchesDept && matchesQuery;
  });

  document.getElementById('admin-count').textContent = `총 ${filtered.length}개 과목 관리 중`;

  filtered.forEach(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0, extraCount: 0 };
    const extraCount = st.extraCount || 0;
    const partRate = st.targetCount > 0 ? ((st.completedCount / st.targetCount) * 100).toFixed(0) : 0;

    let statusBadgeClass = 'badge';
    if (st.status === '완료') statusBadgeClass = 'badge badge-emerald';
    else if (st.status === '진행중') statusBadgeClass = 'badge badge-amber';

    const extraBadgeHtml = extraCount > 0 
      ? `<span class="badge badge-amber" style="font-size:0.75rem; margin-left:4px;" title="대상자 외 추가 신청/참석">+${extraCount}명 추가</span>`
      : '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="badge badge-level-${item.level}">${item.level}</span></td>
      <td><strong>${item.category}</strong> &gt; ${item.subCategory}</td>
      <td style="font-weight: 700; color: var(--text-main);">${item.title}</td>
      <td style="color: var(--ci-brand-light); font-weight: 700;">${item.mainInstructor || '-'}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="flex: 1; height: 8px; background: rgba(255,255,255,0.1); border-radius: 99px; overflow: hidden;">
            <div style="width: ${st.progress}%; height: 100%; background: var(--ci-brand-hex); border-radius: 99px;"></div>
          </div>
          <span style="font-weight: 700; font-size: 0.85rem; width: 45px; text-align: right;">${st.progress}%</span>
        </div>
      </td>
      <td style="text-align: center;">
        <span class="${statusBadgeClass}">${st.status}</span>
      </td>
      <td style="text-align: center;">
        <strong>${st.completedCount}명</strong> / ${st.targetCount}명 (${partRate}%) ${extraBadgeHtml}
      </td>
      <td style="text-align: center;">
        <button class="header-level-btn btn-all" style="padding: 6px 12px; font-size: 0.8rem;" onclick="openEditModal('${item.id}')">
          <i class="fa-solid fa-pen"></i> 수정
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function setupAdminEvents() {
  populateDepartmentFilter();

  const searchInput = document.getElementById('admin-search');
  const deptSelect = document.getElementById('admin-filter-dept');
  const levelSelect = document.getElementById('admin-filter-level');
  const statusSelect = document.getElementById('admin-filter-status');

  function filter() {
    renderAdminTable(
      searchInput.value.toLowerCase().trim(),
      levelSelect.value,
      statusSelect.value,
      deptSelect ? deptSelect.value : 'all'
    );
  }

  searchInput.addEventListener('input', filter);
  if (deptSelect) deptSelect.addEventListener('change', filter);
  levelSelect.addEventListener('change', filter);
  statusSelect.addEventListener('change', filter);
}

// Edit Status Modal & Photo OCR Recognition Simulation
let activeEditId = null;

function openEditModal(id) {
  activeEditId = id;
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const st = adminCourseStatus[id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0, extraCount: 0, eduDate: '', checkedTrainees: [] };

  document.getElementById('edit-title').textContent = `${item.level} > ${item.title}`;
  document.getElementById('edit-status').value = st.status;
  document.getElementById('edit-progress').value = st.progress;
  document.getElementById('edit-extra').value = st.extraCount || 0;

  // Set default today's date if date is empty
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('edit-edu-date').value = st.eduDate || todayStr;

  // Render Interactive Trainee Checkboxes
  const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[id]) ? courseTraineeMap[id] : [];
  const container = document.getElementById('trainee-checkbox-container');
  container.innerHTML = '';

  const checkedEmpIds = st.checkedTrainees || [];

  if (matchedList.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem; padding:6px;">해당 과목 수강 신청 대상자가 없습니다.</span>';
  } else {
    matchedList.forEach((t, idx) => {
      const isChecked = checkedEmpIds.length > 0 ? checkedEmpIds.includes(t.empId) : (st.completedCount > idx);
      const label = document.createElement('label');
      label.style.cssText = 'display: flex; align-items: center; gap: 8px; font-size: 0.85rem; padding: 4px 6px; border-radius: 4px; cursor: pointer; transition: background 0.2s;';
      label.onmouseover = () => label.style.background = 'rgba(255,255,255,0.06)';
      label.onmouseout = () => label.style.background = 'transparent';

      label.innerHTML = `
        <input type="checkbox" class="trainee-chk" value="${t.empId}" ${isChecked ? 'checked' : ''} onchange="updateTraineeCheckCount()">
        <span style="font-weight: 600; color: var(--ci-brand-light);">${t.name}</span>
        <span style="font-size: 0.78rem; color: var(--text-muted);">(${t.dept} / ${t.position})</span>
      `;
      container.appendChild(label);
    });
  }

  document.getElementById('edit-target').value = matchedList.length;
  document.getElementById('edit-target-text').textContent = matchedList.length;

  updateTraineeCheckCount();

  // Reset Photo Upload Controls
  document.getElementById('edit-photo-upload').value = '';
  document.getElementById('photo-count-msg').style.display = 'none';

  document.getElementById('admin-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateTraineeCheckCount() {
  const checkboxes = document.querySelectorAll('.trainee-chk');
  let checkedCount = 0;
  checkboxes.forEach(chk => {
    if (chk.checked) checkedCount++;
  });

  const completedInput = document.getElementById('edit-completed');
  const completedText = document.getElementById('edit-completed-text');
  if (completedInput) completedInput.value = checkedCount;
  if (completedText) completedText.textContent = checkedCount;

  const targetVal = parseInt(document.getElementById('edit-target').value) || 0;
  const currentStatusEl = document.getElementById('edit-status');
  const currentProgressEl = document.getElementById('edit-progress');

  if (currentStatusEl && currentProgressEl) {
    if (checkedCount >= targetVal && targetVal > 0) {
      currentStatusEl.value = '완료';
      currentProgressEl.value = 100;
    } else if (checkedCount > 0 && currentStatusEl.value === '미진행') {
      currentStatusEl.value = '진행중';
      currentProgressEl.value = Math.round((checkedCount / targetVal) * 100);
    }
  }
}

function toggleSelectAllTrainees() {
  const checkboxes = document.querySelectorAll('.trainee-chk');
  if (checkboxes.length === 0) return;
  const allChecked = Array.from(checkboxes).every(chk => chk.checked);
  checkboxes.forEach(chk => chk.checked = !allChecked);
  updateTraineeCheckCount();
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file || !activeEditId) return;

  const item = curriculumData.find(d => d.id === activeEditId);
  const eduDate = document.getElementById('edit-edu-date').value || new Date().toISOString().split('T')[0];
  const courseTitle = item ? item.title.replace(/[\/\\:\*\?"<>\|]/g, '_') : '과목';
  const instructor = item ? (item.mainInstructor || '강사미정').replace(/[\/\\:\*\?"<>\|]/g, '_') : '강사';

  // Standardized Filename: "교육일자_교육과정명_교육강사"
  const ext = file.name.split('.').pop() || 'jpg';
  const standardFileName = `${eduDate}_${courseTitle}_${instructor}.${ext}`;

  // Check photo attendance simulation & auto-check checkboxes
  const checkboxes = document.querySelectorAll('.trainee-chk');
  const targetVal = checkboxes.length || parseInt(document.getElementById('edit-target').value) || 20;
  const recognizedCount = Math.min(targetVal, Math.floor(targetVal * 0.85) + (file.name.length % 5));

  checkboxes.forEach((chk, idx) => {
    chk.checked = (idx < recognizedCount);
  });

  updateTraineeCheckCount();

  document.getElementById('detected-count').textContent = recognizedCount;
  const previewEl = document.getElementById('standard-filename-preview');
  if (previewEl) {
    previewEl.innerHTML = `<i class="fa-solid fa-file-export"></i> 표준 저장 파일명: <strong>${standardFileName}</strong>`;
  }
  document.getElementById('photo-count-msg').style.display = 'block';
}

function closeAdminModal() {
  document.getElementById('admin-modal-overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function saveCourseStatus() {
  if (!activeEditId) return;

  let status = document.getElementById('edit-status').value;
  let progress = parseInt(document.getElementById('edit-progress').value) || 0;
  const targetCount = parseInt(document.getElementById('edit-target').value) || 0;
  const completedCount = parseInt(document.getElementById('edit-completed').value) || 0;
  const extraCount = parseInt(document.getElementById('edit-extra').value) || 0;
  const eduDate = document.getElementById('edit-edu-date').value || '';

  // Extract Checked Trainee Emp IDs
  const checkedTrainees = Array.from(document.querySelectorAll('.trainee-chk:checked')).map(chk => chk.value);

  // Status and Progress Calculation
  if (targetCount > 0 && completedCount >= targetCount) {
    status = '완료';
    progress = 100;
  } else if (completedCount > 0 || extraCount > 0) {
    if (status === '미진행') {
      status = '진행중';
    }
    if (progress === 0 && targetCount > 0) {
      progress = Math.min(100, Math.round((completedCount / targetCount) * 100));
    }
  }

  adminCourseStatus[activeEditId] = {
    status: status,
    progress: progress,
    targetCount: targetCount,
    completedCount: completedCount,
    extraCount: extraCount,
    eduDate: eduDate,
    checkedTrainees: checkedTrainees
  };

  saveAdminData();
  closeAdminModal();

  initAdminDashboard();
  renderAdminTable(
    document.getElementById('admin-search').value.toLowerCase().trim(),
    document.getElementById('admin-filter-level').value,
    document.getElementById('admin-filter-status').value
  );
}

function toggleTheme() {
  document.body.classList.toggle('theme-pantone');
  renderAdminCharts();
}
