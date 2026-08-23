// Default Admin Management Data Initialization
const defaultDepartmentData = [
  { name: '소성팀', target: 35, completed: 31 },
  { name: '공정기술팀', target: 28, completed: 25 },
  { name: '설비보전팀', target: 45, completed: 38 },
  { name: '품질관리팀', target: 30, completed: 27 },
  { name: '환경안전팀', target: 20, completed: 19 },
  { name: '전기계장팀', target: 25, completed: 21 }
];

// Course Schedule Date Map for (1차) and (2차) options
const courseScheduleMap = {
  "1. Clinker 제조공정의 이해": ["2026-03-24", "2026-03-26"],
  "2. Equipment basis & trouble (1)": ["2026-03-31", "2026-04-02"],
  "1. RAW MIX CHEMISTRY 1 (기초)": ["2026-04-07", "2026-04-09"],
  "1. Flow Measurement Basic": ["2026-04-08"],
  "1. 설비유지보수 업무의 이해": ["2026-04-14", "2026-04-16"],
  "1. RAW MIX CHEMISTRY 1 (심화)": ["2026-04-15"],
  "2. Kiln System의 이해": ["2026-04-21", "2026-04-23"],
  "1. Oil 오염원 및 오염도 관리": ["2026-04-22"],
  "2. RAW MIX CHEMISTRY 2 (기초)": ["2026-04-28", "2026-04-30"],
  "2. Compressor 설비 교육 및 적용": ["2026-04-29"],
  "2. RAW MIX CHEMISTRY 2 (심화)": ["2026-05-06"],
  "3. 휘발 물질의 제어": ["2026-05-07", "2026-05-12"],
  "2. Thermodynamics & Heat Capacities": ["2026-05-13"],
  "3. RAW MIX CHEMISTRY 3 (기초)": ["2026-05-14", "2026-05-19"],
  "4. 연료의 종류 및 특성의 이해": ["2026-05-21", "2026-05-26"],
  "4. 시멘트 제조 설비의 이해": ["2026-06-02", "2026-06-04"],
  "3. Equipment basis & trouble (2)": ["2026-06-09", "2026-06-11"],
  "3. Kiln maintenance & 윤활 유지 보수": ["2026-06-10"],
  "4. RAW MIX CHEMISTRY 4 (기초)": ["2026-06-18"],
  "5. 채광공정 & 원부원료 와 시멘트 품질(기초)": ["2026-06-23", "2026-06-25"],
  "3. Fan System": ["2026-06-24"],
  "6. 원료분쇄공정과 시멘트 품질(기초)": ["2026-06-30", "2026-07-02"],
  "3. RAW MIX CHEMISTRY 3 (심화)": ["2026-07-08"],
  "5. Kiln 유지보수의 이해": ["2026-07-07", "2026-07-09"],
  "4. 휘발물질의 순환 및 CBS System 설계": ["2026-07-29"],
  "5. Gas Fundamentals & Basics": ["2026-07-14", "2026-07-16"],
  "4. 회전체 동력전달 장치 종류 및 특성": ["2026-07-22"],
  "6. NOx 생성 및 제어의 이해": ["2026-07-21", "2026-07-23"],
  "4. RAW MIX CHEMISTRY 4 (심화)": ["2026-07-15"],
  "6. Utility의 이해": ["2026-07-28", "2026-07-30"],
  "5. 채광공정 & 원부원료 와 시멘트 품질(심화)": ["2026-08-05"],
  "7. 내화물의 이해": ["2026-08-04", "2026-08-06"],
  "5. 유공압의 이해": ["2026-08-12"],
  "7. 소성공정과 시멘트 품질(기초)": ["2026-08-11", "2026-08-13"],
  "5. Heat & Gas Balance": ["2026-08-19"],
  "7. 윤활 유지보수 관리의 이해": ["2026-08-18", "2026-08-20"],
  "6. 원료분쇄공정과 시멘트 품질(심화)": ["2026-08-26"],
  "8. 분쇄 이론의 이해": ["2026-08-25", "2026-08-27"],
  "6. 열처리기술": ["2026-09-02"],
  "8. 시멘트 분쇄공정과 시멘트 품질(기초)": ["2026-09-01", "2026-09-03"],
  "6. Kiln Operation 및 Shooting Trouble": ["2026-09-09"],
  "8. 진동 관리의 이해": ["2026-09-08", "2026-09-10"],
  "7. 소성공정과 시멘트 품질(심화)": ["2026-09-16"],
  "9. 시멘트 품질과 콘크리트 품질 상관관계 (기초)": ["2026-09-15", "2026-09-17"],
  "7. Cooler 4th upgrade 설비 이해 및 유지 보수": ["2026-09-30"],
  "9. Weigh feeder 설비의 이해": ["2026-09-22", "2026-09-24"],
  "10. 고객요구품질과 대응방안 (기초)": ["2026-09-29", "2026-10-01"],
  "7. Mill Operation": ["2026-10-07"],
  "1. 환경법규와 공장환경목표(기초)": ["2026-10-06", "2026-10-08"],
  "8. 시멘트 분쇄공정과 시멘트 품질(심화)": ["2026-10-14"],
  "10. 집진 설비의 이해1": ["2026-10-13", "2026-10-15"],
  "9. 시멘트 품질과 콘크리트 품질 상관관계 (심화)": ["2026-10-21"],
  "12. 전기기초일반": ["2026-10-20", "2026-10-22"],
  "10. 고객요구품질과 대응방안 (심화)": ["2026-10-28"],
  "2. 대기환경의 이해(기초)": ["2026-10-27", "2026-10-29"],
  "3. 수질환경의 이해(기초)": ["2026-11-03", "2026-11-05"],
  "11. 집진 설비의 이해2": ["2026-11-10", "2026-11-12"],
  "13. DCS 이해 및 운영": ["2026-11-17", "2026-11-19"],
  "14. 전기기기의 종류 및 이해": ["2026-11-24", "2026-11-26"]
};

let adminCourseStatus = {};
let adminDepartmentData = [];

// Load data from LocalStorage or initialize defaults
function loadAdminData() {
  if (typeof getStoredCourseStatusData === 'function') {
    adminCourseStatus = getStoredCourseStatusData();
  } else {
    const savedStatus = localStorage.getItem('sampyo_admin_course_status_v3');
    if (savedStatus) {
      adminCourseStatus = JSON.parse(savedStatus);
    }
  }

  // Ensure all curriculum items have default status structure if missing
  curriculumData.forEach((item) => {
    if (!adminCourseStatus[item.id]) {
      const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[item.id]) ? courseTraineeMap[item.id] : [];
      adminCourseStatus[item.id] = {
        status: '미진행',
        progress: 0,
        targetCount: matchedList.length,
        completedCount: 0,
        extraCount: 0,
        round1Trainees: [],
        round2Trainees: []
      };
    }
  });

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
  if (typeof saveStoredCourseStatusData === 'function') {
    saveStoredCourseStatusData(adminCourseStatus);
  } else {
    localStorage.setItem('sampyo_admin_course_status_v3', JSON.stringify(adminCourseStatus));
  }
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
  let completedCoursesTargetSum = 0; // Total target trainees ONLY for completed courses
  let completedCoursesCompletedSum = 0; // Total completed trainees ONLY for completed courses

  curriculumData.forEach(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0 };
    totalProgressSum += st.progress;

    if (st.status === '완료') {
      completedCourses++;
      completedCoursesTargetSum += st.targetCount;
      completedCoursesCompletedSum += st.completedCount;
    } else if (st.status === '진행중') {
      inProgressCourses++;
    }
  });

  const avgProgress = (totalProgressSum / totalCourses).toFixed(1);
  // Calculate participation rate ONLY for completed courses
  const participationRate = completedCoursesTargetSum > 0 
    ? ((completedCoursesCompletedSum / completedCoursesTargetSum) * 100).toFixed(1) 
    : '0.0';

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

  // Calculate total assigned course enrollments vs actual completions ONLY for COMPLETED courses (status === '완료'), excluding '인사팀'
  const deptDetails = Object.keys(deptMap).filter(d => d !== '인사팀').map(deptName => {
    let totalAssignedEnrollments = 0; // Total course enrollments in completed courses for this dept
    let totalCompletedEnrollments = 0; // Total completed trainees in completed courses for this dept

    curriculumData.forEach(course => {
      const st = adminCourseStatus[course.id];
      // Only count for courses marked as Completed ('완료')
      if (st && st.status === '완료') {
        const courseTrainees = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[course.id]) ? courseTraineeMap[course.id] : [];
        const deptTraineesInCourse = courseTrainees.filter(t => t.dept === deptName);

        if (deptTraineesInCourse.length > 0) {
          totalAssignedEnrollments += deptTraineesInCourse.length;

          const completedSet = new Set([
            ...(st.round1Trainees || []),
            ...(st.round2Trainees || []),
            ...(st.checkedTrainees || [])
          ]);
          const completedInDept = deptTraineesInCourse.filter(t => completedSet.has(String(t.empId))).length;
          totalCompletedEnrollments += completedInDept;
        }
      }
    });

    const rate = totalAssignedEnrollments > 0 
      ? ((totalCompletedEnrollments / totalAssignedEnrollments) * 100).toFixed(1) 
      : '0.0';

    return {
      name: deptName,
      target: totalAssignedEnrollments, // 교육 완료 건의 총 대상 수강 건수
      completed: totalCompletedEnrollments, // 교육 완료 건의 실제 참석 수강 건수
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
                ` • 이수 건수 / 총 배정 건수: ${info.completed}건 / ${info.target}건`,
                ` • 부서별 수료/참여율: ${info.rate}%`
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
    tr.style.cursor = 'pointer';
    tr.title = '클릭하여 교육 참여율 상태 수정';
    tr.onclick = () => openEditModal(item.id);
    tr.innerHTML = `
      <td style="white-space: nowrap;"><span class="badge badge-level-${item.level}">${item.level}</span></td>
      <td style="white-space: nowrap;"><strong>${item.category}</strong> &gt; ${item.subCategory}</td>
      <td style="font-weight: 700; color: var(--text-main); white-space: nowrap;">${item.title}</td>
      <td style="color: var(--ci-brand-light); font-weight: 700; white-space: nowrap;">${item.mainInstructor || '-'}</td>
      <td style="white-space: nowrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="flex: 1; height: 8px; background: rgba(255,255,255,0.1); border-radius: 99px; overflow: hidden; min-width: 70px;">
            <div style="width: ${st.progress}%; height: 100%; background: var(--ci-brand-hex); border-radius: 99px;"></div>
          </div>
          <span style="font-weight: 700; font-size: 0.85rem; width: 45px; text-align: right;">${st.progress}%</span>
        </div>
      </td>
      <td style="text-align: center; white-space: nowrap;">
        <span class="${statusBadgeClass}">${st.status}</span>
      </td>
      <td style="text-align: center; white-space: nowrap;">
        <strong>${st.completedCount}명</strong> / ${st.targetCount}명 (${partRate}%) ${extraBadgeHtml}
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
let activeModalState = null;

function openEditModal(id) {
  activeEditId = id;
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const st = adminCourseStatus[id] || { 
    status: '미진행', 
    progress: 0, 
    targetCount: 30, 
    completedCount: 0, 
    extraCount: 0, 
    eduDate: '', 
    checkedTrainees: [],
    round1Trainees: [],
    round2Trainees: []
  };

  const r1List = st.round1Trainees || (st.checkedTrainees ? [...st.checkedTrainees] : []);
  const r2List = st.round2Trainees || [];

  activeModalState = {
    id: id,
    r1List: Array.from(new Set(r1List)),
    r2List: Array.from(new Set(r2List))
  };

  document.getElementById('edit-title').textContent = `${item.level} > ${item.title}`;
  document.getElementById('edit-status').value = st.status;
  document.getElementById('edit-progress').value = st.progress;
  document.getElementById('edit-extra').value = st.extraCount || 0;

  // Populate Edu Date Select with (1차) and (2차) Options
  const eduDateSelect = document.getElementById('edit-edu-date');
  const scheduleInfoEl = document.getElementById('edit-schedule-info');
  eduDateSelect.innerHTML = '';
  if (scheduleInfoEl) scheduleInfoEl.textContent = '';

  const dateList = courseScheduleMap[item.title] || [];
  
  if (dateList.length >= 2) {
    dateList.forEach((d, idx) => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = `${d} (${idx + 1}차)`;
      if (st.eduDate === d || (!st.eduDate && idx === 0)) {
        opt.selected = true;
      }
      eduDateSelect.appendChild(opt);
    });
    if (scheduleInfoEl) {
      scheduleInfoEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> 교육일정: 1차 (${dateList[0]}) / 2차 (${dateList[1]})`;
    }
  } else if (dateList.length === 1) {
    const d1 = dateList[0];
    const opt1 = document.createElement('option');
    opt1.value = d1;
    opt1.textContent = `${d1} (1차)`;

    const opt2 = document.createElement('option');
    opt2.value = `${d1} (2차)`;
    opt2.textContent = `${d1} (2차)`;

    if (st.eduDate === `${d1} (2차)`) {
      opt2.selected = true;
    } else {
      opt1.selected = true;
    }

    eduDateSelect.appendChild(opt1);
    eduDateSelect.appendChild(opt2);

    if (scheduleInfoEl) {
      scheduleInfoEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> 교육일정: 1차 (${d1}) / 2차 차수 선택 가능`;
    }
  } else {
    const todayStr = new Date().toISOString().split('T')[0];
    const opt1 = document.createElement('option');
    opt1.value = todayStr;
    opt1.textContent = `${todayStr} (1차)`;

    const opt2 = document.createElement('option');
    opt2.value = `${todayStr} (2차)`;
    opt2.textContent = `${todayStr} (2차)`;

    if (st.eduDate && st.eduDate.includes('2차')) opt2.selected = true;
    else opt1.selected = true;

    eduDateSelect.appendChild(opt1);
    eduDateSelect.appendChild(opt2);
  }

  // Bind date select change to re-render checklist for selected session
  eduDateSelect.onchange = () => renderTraineeChecklistBySelectedRound();

  const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[id]) ? courseTraineeMap[id] : [];
  document.getElementById('edit-target').value = matchedList.length;
  document.getElementById('edit-target-text').textContent = matchedList.length;

  renderTraineeChecklistBySelectedRound();

  // Reset Photo Upload Controls
  document.getElementById('edit-photo-upload').value = '';
  document.getElementById('photo-count-msg').style.display = 'none';

  document.getElementById('admin-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderTraineeChecklistBySelectedRound() {
  if (!activeEditId || !activeModalState) return;

  const id = activeEditId;
  const eduDateSelect = document.getElementById('edit-edu-date');
  const selectedIdx = eduDateSelect ? eduDateSelect.selectedIndex : 0;
  const isRound2 = selectedIdx === 1 || (eduDateSelect && eduDateSelect.value && eduDateSelect.value.includes('2차'));

  const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[id]) ? courseTraineeMap[id] : [];
  const container = document.getElementById('trainee-checkbox-container');
  container.innerHTML = '';

  const r1Set = new Set(activeModalState.r1List);
  const r2Set = new Set(activeModalState.r2List);

  if (matchedList.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem; padding:6px;">해당 과목 수강 신청 대상자가 없습니다.</span>';
    updateTraineeCheckCount();
    return;
  }

  // Header info in checklist container
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'font-size: 0.82rem; font-weight: 700; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px dashed var(--border-color);';

  let listToDisplay = [];

  if (!isRound2) {
    // 1차 차수: 전체 정규 수강 대상자 노출
    headerDiv.style.color = 'var(--ci-brand-light)';
    headerDiv.innerHTML = `<i class="fa-solid fa-list-check"></i> [1차 차수] 정규 수강 대상자 출석 체크 (전체 ${matchedList.length}명)`;
    listToDisplay = matchedList;
  } else {
    // 2차 차수: 1차 수료자 완전 제외 (중복 방지)
    const remainingList = matchedList.filter(t => !r1Set.has(t.empId));
    headerDiv.style.color = '#10b981';
    headerDiv.innerHTML = `<i class="fa-solid fa-user-shield"></i> [2차 차수] 1차 수료 완료 ${r1Set.size}명 자동 제외 (중복 방지) | 2차 잔여 대상자 (${remainingList.length}명)`;
    listToDisplay = remainingList;
  }

  container.appendChild(headerDiv);

  if (listToDisplay.length === 0 && isRound2) {
    const emptyNotice = document.createElement('div');
    emptyNotice.style.cssText = 'color: #10b981; font-size: 0.85rem; padding: 12px; text-align: center; font-weight: 600;';
    emptyNotice.innerHTML = '<i class="fa-solid fa-circle-check"></i> 1차 차수에서 전원 수료를 완료하였습니다. 2차 추가 대상자가 없습니다.';
    container.appendChild(emptyNotice);
  } else {
    listToDisplay.forEach(t => {
      const isChecked = !isRound2 ? r1Set.has(t.empId) : r2Set.has(t.empId);
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

  updateTraineeCheckCount();
}

function updateTraineeCheckCount() {
  if (!activeModalState) return;

  const eduDateSelect = document.getElementById('edit-edu-date');
  const selectedIdx = eduDateSelect ? eduDateSelect.selectedIndex : 0;
  const isRound2 = selectedIdx === 1 || (eduDateSelect && eduDateSelect.value && eduDateSelect.value.includes('2차'));

  // Save current checked state to current round
  const currentChecked = Array.from(document.querySelectorAll('.trainee-chk:checked')).map(chk => chk.value);
  if (!isRound2) {
    activeModalState.r1List = currentChecked;
  } else {
    activeModalState.r2List = currentChecked;
  }

  // Combine unique completed trainees from 1차 + 2차
  const allUnique = Array.from(new Set([...activeModalState.r1List, ...activeModalState.r2List]));
  const uniqueCount = allUnique.length;

  const completedInput = document.getElementById('edit-completed');
  const completedText = document.getElementById('edit-completed-text');
  if (completedInput) completedInput.value = uniqueCount;
  if (completedText) {
    completedText.innerHTML = `<strong>${uniqueCount}명</strong> <span style="font-size:0.75rem; font-weight:normal; color:var(--text-muted);">(1차: ${activeModalState.r1List.length}명 + 2차: ${activeModalState.r2List.length}명 합산)</span>`;
  }

  const extraVal = parseInt(document.getElementById('edit-extra').value) || 0;
  const totalAttended = uniqueCount + extraVal;
  const targetVal = parseInt(document.getElementById('edit-target').value) || 0;
  const currentStatusEl = document.getElementById('edit-status');
  const currentProgressEl = document.getElementById('edit-progress');

  if (currentStatusEl && currentProgressEl) {
    if (totalAttended >= 1) {
      currentStatusEl.value = '완료';
    } else {
      currentStatusEl.value = '미진행';
    }
    if (targetVal > 0) {
      currentProgressEl.value = Math.min(100, Math.round((uniqueCount / targetVal) * 100));
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

  // Check photo attendance simulation & auto-check checkboxes in current list
  const checkboxes = document.querySelectorAll('.trainee-chk');
  const targetVal = checkboxes.length;
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
  if (!activeEditId || !activeModalState) return;

  updateTraineeCheckCount();

  const allUnique = Array.from(new Set([...activeModalState.r1List, ...activeModalState.r2List]));
  const completedCount = allUnique.length;

  let status = document.getElementById('edit-status').value;
  let progress = parseInt(document.getElementById('edit-progress').value) || 0;
  const targetCount = parseInt(document.getElementById('edit-target').value) || 0;
  const extraCount = parseInt(document.getElementById('edit-extra').value) || 0;
  const eduDate = document.getElementById('edit-edu-date').value || '';

  // Status and Progress Calculation (1명 이상 출석/수료 시 '완료' 자동 반영)
  const totalAttended = completedCount + extraCount;
  if (totalAttended >= 1) {
    status = '완료';
  } else {
    status = '미진행';
  }

  if (targetCount > 0) {
    progress = Math.min(100, Math.round((completedCount / targetCount) * 100));
  }

  adminCourseStatus[activeEditId] = {
    status: status,
    progress: progress,
    targetCount: targetCount,
    completedCount: completedCount,
    extraCount: extraCount,
    eduDate: eduDate,
    checkedTrainees: allUnique,
    round1Trainees: [...activeModalState.r1List],
    round2Trainees: [...activeModalState.r2List]
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
