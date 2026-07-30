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
  const savedStatus = localStorage.getItem('sampyo_admin_course_status_v2');
  if (savedStatus) {
    adminCourseStatus = JSON.parse(savedStatus);
  } else {
    // Initialize status using REAL matched trainee counts from courseTraineeMap
    curriculumData.forEach((item, idx) => {
      const matchedList = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[item.id]) ? courseTraineeMap[item.id] : [];
      const realTarget = matchedList.length > 0 ? matchedList.length : 20;

      let status = '미진행';
      let progress = 0;
      let completedCount = 0;

      if (idx < 25) {
        status = '완료';
        progress = 100;
        completedCount = realTarget;
      } else if (idx < 42) {
        status = '진행중';
        progress = 40 + ((idx * 7) % 50);
        completedCount = Math.floor(realTarget * (progress / 100));
      }

      adminCourseStatus[item.id] = {
        status: status,
        progress: progress,
        targetCount: realTarget,
        completedCount: completedCount
      };
    });
    saveAdminData();
  }

  const savedDepts = localStorage.getItem('sampyo_admin_dept_data');
  if (savedDepts) {
    adminDepartmentData = JSON.parse(savedDepts);
  } else {
    adminDepartmentData = [...defaultDepartmentData];
    localStorage.setItem('sampyo_admin_dept_data', JSON.stringify(adminDepartmentData));
  }
}

function saveAdminData() {
  localStorage.setItem('sampyo_admin_course_status_v2', JSON.stringify(adminCourseStatus));
}

let chartDeptInstance = null;
let chartStatusInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  loadAdminData();
  initAdminDashboard();
  renderAdminTable();
  setupAdminEvents();
});

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

  // Chart 1: Department Participation Bar Chart
  const ctxDept = document.getElementById('chart-dept').getContext('2d');
  if (chartDeptInstance) chartDeptInstance.destroy();

  const deptNames = adminDepartmentData.map(d => d.name);
  const deptRates = adminDepartmentData.map(d => ((d.completed / d.target) * 100).toFixed(1));

  chartDeptInstance = new Chart(ctxDept, {
    type: 'bar',
    data: {
      labels: deptNames,
      datasets: [{
        label: '부서별 참여율 (%)',
        data: deptRates,
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
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.raw}% 참여율`
          }
        }
      },
      scales: {
        x: { ticks: { color: textColor, font: { weight: '600' } }, grid: { display: false } },
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

function renderAdminTable(filterQuery = '', filterLevel = 'all', filterStatus = 'all') {
  const tbody = document.getElementById('admin-table-body');
  tbody.innerHTML = '';

  const filtered = curriculumData.filter(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행' };
    const matchesLevel = filterLevel === 'all' || item.level === filterLevel;
    const matchesStatus = filterStatus === 'all' || st.status === filterStatus;
    const matchesQuery = 
      item.title.toLowerCase().includes(filterQuery) ||
      item.mainInstructor.toLowerCase().includes(filterQuery) ||
      item.category.toLowerCase().includes(filterQuery);

    return matchesLevel && matchesStatus && matchesQuery;
  });

  document.getElementById('admin-count').textContent = `총 ${filtered.length}개 과목 관리 중`;

  filtered.forEach(item => {
    const st = adminCourseStatus[item.id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0, extraCount: 0 };
    const extraCount = st.extraCount || 0;
    const partRate = ((st.completedCount / st.targetCount) * 100).toFixed(0);

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
  const searchInput = document.getElementById('admin-search');
  const levelSelect = document.getElementById('admin-filter-level');
  const statusSelect = document.getElementById('admin-filter-status');

  function filter() {
    renderAdminTable(
      searchInput.value.toLowerCase().trim(),
      levelSelect.value,
      statusSelect.value
    );
  }

  searchInput.addEventListener('input', filter);
  levelSelect.addEventListener('change', filter);
  statusSelect.addEventListener('change', filter);
}

// Edit Status Modal & Photo OCR Recognition Simulation
let activeEditId = null;

function openEditModal(id) {
  activeEditId = id;
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const st = adminCourseStatus[id] || { status: '미진행', progress: 0, targetCount: 30, completedCount: 0, extraCount: 0 };

  document.getElementById('edit-title').textContent = `${item.level} > ${item.title}`;
  document.getElementById('edit-status').value = st.status;
  document.getElementById('edit-progress').value = st.progress;
  document.getElementById('edit-target').value = st.targetCount;
  document.getElementById('edit-completed').value = st.completedCount;
  document.getElementById('edit-extra').value = st.extraCount || 0;

  // Reset Photo Upload Controls
  document.getElementById('edit-photo-upload').value = '';
  document.getElementById('photo-count-msg').style.display = 'none';

  document.getElementById('admin-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Intelligent Simulation: Recognize attendance count from photo file
  const targetVal = parseInt(document.getElementById('edit-target').value) || 20;
  // Simulated recognized count based on target
  const recognizedCount = Math.min(targetVal, Math.floor(targetVal * 0.85) + (file.name.length % 5));

  document.getElementById('detected-count').textContent = recognizedCount;
  document.getElementById('photo-count-msg').style.display = 'block';

  // Automatically update the completed count field
  document.getElementById('edit-completed').value = recognizedCount;
  if (recognizedCount >= targetVal) {
    document.getElementById('edit-status').value = '완료';
    document.getElementById('edit-progress').value = 100;
  } else if (recognizedCount > 0) {
    document.getElementById('edit-status').value = '진행중';
    document.getElementById('edit-progress').value = Math.round((recognizedCount / targetVal) * 100);
  }
}

function closeAdminModal() {
  document.getElementById('admin-modal-overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function saveCourseStatus() {
  if (!activeEditId) return;

  const status = document.getElementById('edit-status').value;
  const progress = parseInt(document.getElementById('edit-progress').value) || 0;
  const targetCount = parseInt(document.getElementById('edit-target').value) || 1;
  const completedCount = parseInt(document.getElementById('edit-completed').value) || 0;
  const extraCount = parseInt(document.getElementById('edit-extra').value) || 0;

  adminCourseStatus[activeEditId] = {
    status: status,
    progress: Math.min(100, Math.max(0, progress)),
    targetCount: Math.max(1, targetCount),
    completedCount: Math.min(targetCount, Math.max(0, completedCount)),
    extraCount: Math.max(0, extraCount)
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
