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

// Initialize State
let currentLevel = 'all'; // 'all', '초급', '중급'
let currentCategory = 'all';
let currentView = 'grid'; // 'grid' or 'table'
let searchQuery = '';

let chartCategoryInstance = null;
let chartInstructorInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  setupEventListeners();
  renderData();
});

// Initialize KPIs and Charts
function initDashboard() {
  updateKPIs();
  renderCharts();
  populateCategoryFilter();
}

function updateKPIs() {
  const totalCount = curriculumData.length;
  const beginnerCount = curriculumData.filter(d => d.level === '초급').length;
  const intermediateCount = curriculumData.filter(d => d.level === '중급').length;

  document.getElementById('kpi-total-courses').textContent = `${totalCount}개`;
  document.getElementById('kpi-beginner-courses').textContent = `${beginnerCount}개`;
  document.getElementById('kpi-intermediate-courses').textContent = `${intermediateCount}개`;
}

function renderCharts() {
  const isLight = document.body.classList.contains('theme-pantone');
  const textColor = isLight ? '#0f172a' : '#ffffff';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)';

  // Chart 1: Category Distribution
  const categoryCounts = {};
  curriculumData.forEach(d => {
    categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1;
  });

  const ctxCategory = document.getElementById('chart-category').getContext('2d');
  if (chartCategoryInstance) chartCategoryInstance.destroy();

  chartCategoryInstance = new Chart(ctxCategory, {
    type: 'doughnut',
    data: {
      labels: Object.keys(categoryCounts),
      datasets: [{
        data: Object.values(categoryCounts),
        backgroundColor: ['#e11d48', '#38bdf8', '#10b981', '#f59e0b', '#c084fc'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          borderColor: '#009ade',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return ` ${label}: ${value}개 과목 (${percentage}%)`;
            }
          }
        }
      }
    }
  });

  // Chart 2: Top Main Instructors
  const instructorCounts = {};
  curriculumData.forEach(d => {
    if (d.mainInstructor) {
      instructorCounts[d.mainInstructor] = (instructorCounts[d.mainInstructor] || 0) + 1;
    }
  });

  const sortedInstructors = Object.entries(instructorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);

  const ctxInstructor = document.getElementById('chart-instructor').getContext('2d');
  if (chartInstructorInstance) chartInstructorInstance.destroy();

  chartInstructorInstance = new Chart(ctxInstructor, {
    type: 'bar',
    data: {
      labels: sortedInstructors.map(item => item[0]),
      datasets: [{
        label: '주강사 담당 과목 수',
        data: sortedInstructors.map(item => item[1]),
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
          borderWidth: 1
        }
      },
      scales: {
        x: { ticks: { color: textColor, font: { weight: '600' } }, grid: { display: false } },
        y: { ticks: { color: textColor, stepSize: 1, font: { weight: '600' } }, grid: { color: gridColor }, beginAtZero: true }
      }
    }
  });
}

function populateCategoryFilter() {
  const categorySelect = document.getElementById('filter-category');
  const categories = [...new Set(curriculumData.map(d => d.category))];
  
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = `대분류: ${cat}`;
    categorySelect.appendChild(opt);
  });
}

function setupEventListeners() {
  // Search
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderData();
  });

  // Category Filter
  document.getElementById('filter-category').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    renderData();
  });

  // Level Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      currentLevel = targetBtn.dataset.level;
      renderData();
    });
  });

  // View Switcher (Grid / Table)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      currentView = targetBtn.dataset.view;
      renderData();
    });
  });
}

function getFilteredData() {
  return curriculumData.filter(item => {
    const matchesLevel = currentLevel === 'all' || item.level === currentLevel;
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;

    // Check if any matched trainee (name, dept, position, empId) matches search query
    let matchesTrainee = false;
    if (searchQuery && typeof courseTraineeMap !== 'undefined') {
      const trainees = courseTraineeMap[item.id] || [];
      matchesTrainee = trainees.some(t => 
        t.name.toLowerCase().includes(searchQuery) ||
        t.dept.toLowerCase().includes(searchQuery) ||
        t.position.toLowerCase().includes(searchQuery) ||
        t.empId.toLowerCase().includes(searchQuery)
      );
    }

    const matchesSearch = 
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.subCategory.toLowerCase().includes(searchQuery) ||
      item.mainInstructor.toLowerCase().includes(searchQuery) ||
      item.subInstructor.toLowerCase().includes(searchQuery) ||
      matchesTrainee;

    return matchesLevel && matchesCategory && matchesSearch;
  });
}

function renderData() {
  const filtered = getFilteredData();
  const countEl = document.getElementById('results-count');
  const container = document.getElementById('content-container');

  countEl.textContent = `총 ${filtered.length}개 과목 검색됨`;
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 16px; color: var(--ci-brand-hex);"></i>
        <h3 style="font-size: 1.2rem; margin-bottom: 8px;">조건에 일치하는 교육과정이 없습니다.</h3>
        <p style="font-size: 0.9rem;">검색어나 필터 조건을 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  if (currentView === 'grid') {
    renderGridView(filtered, container);
  } else {
    renderTableView(filtered, container);
  }
}

function renderGridView(data, container) {
  const grid = document.createElement('div');
  grid.className = 'cards-grid';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'curriculum-card';
    card.onclick = () => openCourseModal(item.id);

    const noteHtml = item.note ? `<span class="badge badge-rose" style="font-size: 0.75rem; margin-left: 6px;">${item.note}</span>` : '';
    const dateList = courseScheduleMap[item.title] || [];
    const dateSummary = dateList.length > 0 ? dateList.map((d, i) => `${i + 1}차(${d.substring(5)})`).join(', ') : '일정미정';

    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-level-${item.level}">${item.level}</span>
          <span class="badge" style="font-size: 0.75rem;">${item.category} &gt; ${item.subCategory}</span>
        </div>
        <div class="card-title">${item.title} ${noteHtml}</div>
      </div>
      <div>
        <div style="margin-top: 12px; font-size: 0.85rem;">
          <div class="instructor-tag">
            <i class="fa-solid fa-user-tie" style="color: var(--ci-brand-light);"></i> 주강사: <strong>${item.mainInstructor || '미정'}</strong>
          </div>
          ${item.subInstructor ? `
          <div class="instructor-tag">
            <i class="fa-solid fa-user-group" style="color: var(--accent-blue);"></i> 후보강사: ${item.subInstructor}
          </div>` : ''}
          <div class="instructor-tag" style="color: var(--ci-brand-light); margin-top: 4px;">
            <i class="fa-solid fa-calendar-day"></i> 교육일자: <strong>${dateSummary}</strong>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

function renderTableView(data, container) {
  const tableBox = document.createElement('div');
  tableBox.className = 'table-container';

  let rowsHtml = data.map(item => {
    const dateList = courseScheduleMap[item.title] || [];
    const dateSummary = dateList.length > 0 ? dateList.map((d, i) => `${i + 1}차(${d.substring(5)})`).join(', ') : '-';
    return `
      <tr onclick="openCourseModal('${item.id}')">
        <td><span class="badge badge-level-${item.level}">${item.level}</span></td>
        <td><strong>${item.category}</strong></td>
        <td>${item.subCategory}</td>
        <td style="font-weight: 600; color: var(--text-main);">${item.title}</td>
        <td><i class="fa-solid fa-user-tie" style="color: var(--ci-brand-light); margin-right: 4px;"></i> ${item.mainInstructor || '-'}</td>
        <td>${item.subInstructor || '-'}</td>
        <td style="color: var(--ci-brand-light); font-weight: 600;"><i class="fa-solid fa-calendar-day" style="margin-right: 4px;"></i> ${dateSummary}</td>
      </tr>
    `;
  }).join('');

  tableBox.innerHTML = `
    <table class="curriculum-table">
      <thead>
        <tr>
          <th>레벨</th>
          <th>대분류</th>
          <th>세부분야</th>
          <th>과목명</th>
          <th>주강사</th>
          <th>후보강사</th>
          <th>교육일자</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;

  container.appendChild(tableBox);
}

// Course Modal
function openCourseModal(id) {
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const modalBody = document.getElementById('modal-body');
  const modalTitle = document.getElementById('modal-company');

  modalTitle.textContent = `${item.level} 교육과정 상세정보`;

  const dateList = courseScheduleMap[item.title] || [];
  let datesHtml = '';
  if (dateList.length >= 2) {
    datesHtml = `
      <span class="badge badge-purple" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fa-solid fa-calendar-day"></i> 1차 일정: <strong>${dateList[0]}</strong></span>
      <span class="badge badge-purple" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fa-solid fa-calendar-day"></i> 2차 일정: <strong>${dateList[1]}</strong></span>
    `;
  } else if (dateList.length === 1) {
    datesHtml = `
      <span class="badge badge-purple" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fa-solid fa-calendar-day"></i> 1차 일정: <strong>${dateList[0]}</strong></span>
    `;
  } else {
    datesHtml = `<span style="color: var(--text-muted); font-size: 0.9rem;">등록된 교육일정 정보가 없습니다.</span>`;
  }

  modalBody.innerHTML = `
    <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 16px; flex-wrap: wrap;">
      <span class="badge badge-level-${item.level}" style="font-size: 0.9rem; padding: 6px 12px;">${item.level} 과정</span>
      <span class="badge badge-purple">${item.category}</span>
      <span class="badge">${item.subCategory}</span>
      ${item.note ? `<span class="badge badge-rose">${item.note}</span>` : ''}
    </div>

    <h2 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 20px; color: var(--text-main); line-height: 1.4;">
      ${item.title}
    </h2>

    <!-- Education Schedule Dates Section -->
    <div class="detail-section" style="margin-bottom: 16px; border-color: rgba(0, 154, 222, 0.4);">
      <div class="detail-section-title" style="color: var(--ci-brand-light);">
        <i class="fa-solid fa-calendar-days"></i> 교육일자 (개설 일정)
      </div>
      <div class="detail-text" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px;">
        ${datesHtml}
      </div>
    </div>

    <div class="detail-section" style="margin-bottom: 16px;">
      <div class="detail-section-title">
        <i class="fa-solid fa-user-tie"></i> 주강사 정보
      </div>
      <div class="detail-text" style="font-size: 1.05rem; font-weight: 600; color: var(--ci-brand-light);">
        ${item.mainInstructor || '주강사 미정'}
      </div>
    </div>

    <div class="detail-section" style="margin-bottom: 16px;">
      <div class="detail-section-title">
        <i class="fa-solid fa-user-group"></i> 후보 강사 정보
      </div>
      <div class="detail-text" style="font-size: 0.95rem;">
        ${item.subInstructor || '후보 강사 없음'}
      </div>
    </div>

    <!-- Matched Trainees Section -->
    <div class="detail-section" style="border-color: rgba(16, 185, 129, 0.4);">
      <div class="detail-section-title" style="color: #10b981;">
        <i class="fa-solid fa-users"></i> 해당 과목 수강 신청 대상자 명단 (${(courseTraineeMap[item.id] || []).length}명)
      </div>
      <div class="detail-text" style="font-size: 0.9rem; max-height: 160px; overflow-y: auto;">
        ${(courseTraineeMap[item.id] && courseTraineeMap[item.id].length > 0)
          ? `<div style="display: flex; flex-wrap: wrap; gap: 8px;">` +
            courseTraineeMap[item.id].map(t => `<span class="badge badge-emerald" style="font-size: 0.8rem;"><i class="fa-solid fa-user" style="margin-right: 4px;"></i>${t.name} (${t.dept} / ${t.position})</span>`).join('') +
            `</div>`
          : '<span style="color: var(--text-muted);">신청 대상자가 없습니다.</span>'
        }
      </div>
    </div>

    <!-- Action Buttons: Print Attendance Sheet (출석양식.html) & Bulk Email Notice -->
    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed var(--border-color); display: flex; justify-content: flex-end; gap: 10px; flex-wrap: wrap;">
      <button onclick="handlePrintAttendancePrompt('${item.id}')" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; padding: 12px 20px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.92rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(16,185,129,0.35); transition: all 0.2s;">
        <i class="fa-solid fa-print"></i> 출석양식 자동 출력
      </button>
      <button onclick="openBulkEmailModal('${item.id}')" style="background: linear-gradient(135deg, #009ade 0%, #0077b6 100%); color: white; border: none; padding: 12px 20px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.92rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(0,154,222,0.35); transition: all 0.2s;">
        <i class="fa-solid fa-paper-plane"></i> 수강 대상자 단체 안내 메일 발송
      </button>
    </div>
  `;

  const modal = document.getElementById('modal-overlay');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Helper to read round 1 completed trainees from Admin portal localStorage
function getRound1CompletedEmpIds(courseId) {
  try {
    const saved = localStorage.getItem('sampyo_admin_course_status_v3');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[courseId] && Array.isArray(parsed[courseId].round1Trainees)) {
        return new Set(parsed[courseId].round1Trainees);
      }
    }
  } catch (e) {}
  return new Set();
}

function handlePrintAttendancePrompt(id) {
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const dates = courseScheduleMap[item.title] || [];
  if (dates.length <= 1) {
    window.open(`출석양식.html?courseId=${id}&round=1&autoprint=1`, '_blank');
    return;
  }

  const date1 = dates[0] || '1차 일정';
  const date2 = dates[1] || '2차 일정';

  const userChoice = prompt(
    `[출석양식 인쇄 교육일정 선택]\n\n출력하고자 하는 교육일정 차수를 선택해 주세요:\n\n1: 1차 교육일자 (${date1})\n2: 2차 교육일자 (${date2}) - [1차 이수완료자 자동 제외]\n\n번호(1 또는 2)를 입력하세요:`,
    "1"
  );

  if (userChoice === "2") {
    window.open(`출석양식.html?courseId=${id}&round=2&autoprint=1`, '_blank');
  } else if (userChoice === "1") {
    window.open(`출석양식.html?courseId=${id}&round=1&autoprint=1`, '_blank');
  }
}

// Bulk Email Notification System
let activeEmailCourseId = null;
let activeEmailRecipients = []; // Array of recipient objects

function openBulkEmailModal(id) {
  activeEmailCourseId = id;
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const trainees = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[id]) ? courseTraineeMap[id] : [];
  activeEmailRecipients = trainees.map(t => ({ ...t }));

  // Automatically include Administrator 주용현
  const adminJu = {
    name: "주용현",
    dept: "인사팀",
    position: "교육담당자",
    job: "교육운영",
    empId: "ADMIN_JU",
    email: "younghyun.ju@sampyo.co.kr",
    phone: "010-8527-8084"
  };
  if (!activeEmailRecipients.some(r => r.empId === adminJu.empId || r.email === adminJu.email)) {
    activeEmailRecipients.push(adminJu);
  }

  const dateList = courseScheduleMap[item.title] || [];
  const dateText = dateList.length > 0 ? dateList.map((d, i) => `${i + 1}차: ${d}`).join(' / ') : '개설 일정 협의 중';

  const defaultSubject = `[사무기술직 엔지니어 교육] ${item.title} 교육과정 (${item.level})`;

  const traineeListText = activeEmailRecipients.length > 0
    ? activeEmailRecipients.map(t => `- ${t.name} (${t.dept} / ${t.position})`).join('\n')
    : '(등록된 수강 대상자가 없습니다)';

  const defaultBody = `안녕하십니까, 수강 대상 임직원 여러분.

'26년 사무기술직 엔지니어 집체교육 수강 안내드립니다.
아래 세부 교육 정보를 확인하시어 차수별 일정에 맞추어 참가해 주시기 바랍니다.

--------------------------------------------------
■ 과 목 명 : ${item.title} (${item.level} 과정)
■ 대 분 류 : ${item.category} > ${item.subCategory}
■ 담당강사 : ${item.mainInstructor || '미정'} (주강사) ${item.subInstructor ? '/ ' + item.subInstructor + ' (후보강사)' : ''}
■ 교육일자 : ${dateText}
--------------------------------------------------

■ 수강 대상자 명단 (${activeEmailRecipients.length}명):
${traineeListText}

■ 안내 및 유의사항:
1. 사전에 교육 일정을 확인하시고 업무 일정을 조정하여 주시기 바랍니다.
2. 출석 상태는 교육 운영 관리자 포털에서 기록됩니다.

삼표시멘트 인사팀(교육담당자)`;

  const round1Completed = getRound1CompletedEmpIds(id);
  const round1CompletedCount = round1Completed.size;

  const modalBody = document.getElementById('email-modal-body');
  modalBody.innerHTML = `
    <!-- Round Selector -->
    <div style="margin-bottom: 14px; background: rgba(0, 154, 222, 0.08); border: 1px solid rgba(0, 154, 222, 0.3); border-radius: var(--radius-md); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <label style="font-size: 0.82rem; font-weight: 700; color: var(--ci-brand-light); display: inline-flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-filter"></i> 안내 대상 차수 선택
      </label>
      <select id="email-round-select" class="filter-select" style="font-size: 0.8rem; padding: 4px 10px; font-weight: 600;" onchange="updateEmailRoundRecipients('${item.id}', this.value)">
        <option value="1">1차 교육 안내 (전체 대상자)</option>
        <option value="2">2차 교육 안내 (1차 이수완료자 ${round1CompletedCount}명 자동 제외)</option>
        <option value="all">전체 수강 대상자 (1차 + 2차)</option>
      </select>
    </div>

    <div style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
        <label id="recipient-count-label" style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
          <i class="fa-solid fa-users"></i> 수신 대상자 (${activeEmailRecipients.length}명)
        </label>

        <!-- Dynamic Add Recipient Control -->
        <div style="display: flex; gap: 6px; align-items: center;">
          <select id="add-recipient-select" class="filter-select" style="font-size: 0.78rem; padding: 4px 8px; max-width: 220px;">
          </select>
          <button onclick="addRecipientFromSelect()" style="background: var(--ci-brand-hex); color: white; border: none; padding: 4px 10px; border-radius: var(--radius-sm); font-size: 0.78rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
            <i class="fa-solid fa-user-plus"></i> 추가
          </button>
        </div>
      </div>

      <div id="email-recipient-preview" style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 10px; max-height: 110px; overflow-y: auto; display: flex; flex-wrap: wrap; gap: 6px;">
      </div>
      <div id="email-csv-notice" style="font-size: 0.78rem; color: #10b981; margin-top: 6px; font-weight: 600; display: none;"></div>
    </div>

    <div style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
          <i class="fa-solid fa-heading"></i> 메일 제목 <span style="font-size:0.75rem; font-weight:normal; color:var(--ci-brand-light); margin-left:4px;">(✏️ 자유롭게 수정 가능)</span>
        </label>
        <button onclick="resetEmailTemplate('${item.id}')" style="background: transparent; border: none; color: var(--ci-brand-light); font-size: 0.78rem; cursor: pointer; font-weight: 600; padding: 0;">
          <i class="fa-solid fa-rotate-left"></i> 기본 템플릿 초기화
        </button>
      </div>
      <input type="text" id="bulk-email-subject" class="filter-select" style="width: 100%; font-weight: 600; border-color: rgba(0,154,222,0.4);" value="${defaultSubject}">
    </div>

    <div style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
          <i class="fa-solid fa-align-left"></i> 메일 본문 내용 <span style="font-size:0.75rem; font-weight:normal; color:var(--ci-brand-light); margin-left:4px;">(✏️ 자유롭게 수정 가능)</span>
        </label>
      </div>
      <textarea id="bulk-email-body" class="filter-select" style="width: 100%; height: 190px; font-size: 0.85rem; line-height: 1.55; resize: vertical; border-color: rgba(0,154,222,0.4); font-family: inherit;">${defaultBody}</textarea>
    </div>

    <div style="display: flex; gap: 10px; justify-content: flex-end; align-items: center;">
      <button onclick="simulateSendBulkSms()" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; border: none; padding: 10px 18px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(14,165,233,0.3);">
        <i class="fa-solid fa-comment-sms"></i> 문자메시지 알림 발송 (SMS)
      </button>
      <button onclick="simulateSendBulkEmail()" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.9rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
        <i class="fa-solid fa-paper-plane"></i> 단체 메일 즉시 발송
      </button>
    </div>
  `;

  renderRecipientSection();

  document.getElementById('email-modal-overlay').classList.add('active');
}

function renderRecipientSection() {
  const container = document.getElementById('email-recipient-preview');
  const countLabel = document.getElementById('recipient-count-label');
  const selectEl = document.getElementById('add-recipient-select');
  if (!container) return;

  if (countLabel) {
    countLabel.innerHTML = `<i class="fa-solid fa-users"></i> 수신 대상자 (${activeEmailRecipients.length}명)`;
  }

  container.innerHTML = '';
  if (activeEmailRecipients.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem;">수신 대상자가 없습니다. 오른쪽 위에서 대상자를 추가할 수 있습니다.</span>';
  } else {
    activeEmailRecipients.forEach(t => {
      const email = t.email || `${t.empId.toLowerCase()}@sampyo.co.kr`;
      const phone = t.phone || '010-0000-0000';
      const tag = document.createElement('span');
      tag.className = 'badge badge-purple';
      tag.style.cssText = 'font-size: 0.78rem; display: inline-flex; align-items: center; gap: 5px; padding: 4px 8px;';
      tag.innerHTML = `
        <i class="fa-solid fa-user"></i> ${t.name} (${t.dept}) &lt;${email}&gt; 📱${phone}
        <i class="fa-solid fa-xmark" onclick="removeRecipientFromEmailList('${t.empId}')" style="cursor: pointer; color: #f87171; margin-left: 4px; font-size: 0.85rem;" title="${t.name}님 수신 대상에서 제외"></i>
      `;
      container.appendChild(tag);
    });
  }

  if (selectEl && typeof traineeData !== 'undefined') {
    selectEl.innerHTML = '<option value="">-- 수신 대상자 추가 --</option>';
    const existingEmpIds = new Set(activeEmailRecipients.map(r => r.empId));

    traineeData.forEach(t => {
      if (!existingEmpIds.has(t.empId)) {
        const opt = document.createElement('option');
        opt.value = t.empId;
        opt.textContent = `+ ${t.name} (${t.dept} / ${t.position})`;
        selectEl.appendChild(opt);
      }
    });
  }
}

function addRecipientFromSelect() {
  const selectEl = document.getElementById('add-recipient-select');
  if (!selectEl || !selectEl.value) return;

  const empId = selectEl.value;
  const candidate = (typeof traineeData !== 'undefined') ? traineeData.find(t => t.empId === empId) : null;
  if (candidate) {
    activeEmailRecipients.push({ ...candidate });
    renderRecipientSection();
  }
}

function updateEmailRoundRecipients(id, roundVal) {
  const item = curriculumData.find(d => d.id === id);
  if (!item) return;

  const trainees = (typeof courseTraineeMap !== 'undefined' && courseTraineeMap[id]) ? courseTraineeMap[id] : [];
  const round1Completed = getRound1CompletedEmpIds(id);

  let filtered = trainees.map(t => ({ ...t }));
  if (roundVal === '2') {
    filtered = filtered.filter(t => !round1Completed.has(t.empId));
  }

  const adminJu = {
    name: "주용현",
    dept: "인사팀",
    position: "교육담당자",
    job: "교육운영",
    empId: "ADMIN_JU",
    email: "younghyun.ju@sampyo.co.kr",
    phone: "010-8527-8084"
  };
  if (!filtered.some(r => r.empId === adminJu.empId || r.email === adminJu.email)) {
    filtered.push(adminJu);
  }

  activeEmailRecipients = filtered;

  const dateList = courseScheduleMap[item.title] || [];
  let dateText = dateList.length > 0 ? dateList.map((d, i) => `${i + 1}차: ${d}`).join(' / ') : '개설 일정 협의 중';
  if (roundVal === '1' && dateList[0]) dateText = `1차: ${dateList[0]}`;
  if (roundVal === '2' && (dateList[1] || dateList[0])) dateText = `2차: ${dateList[1] || dateList[0]}`;

  const traineeListText = activeEmailRecipients.length > 0
    ? activeEmailRecipients.map(t => `- ${t.name} (${t.dept} / ${t.position})`).join('\n')
    : '(등록된 수강 대상자가 없습니다)';

  const updatedBody = `안녕하십니까, 수강 대상 임직원 여러분.

'26년 사무기술직 엔지니어 집체교육 수강 안내드립니다.
아래 세부 교육 정보를 확인하시어 차수별 일정에 맞추어 참가해 주시기 바랍니다.

--------------------------------------------------
■ 과 목 명 : ${item.title} (${item.level} 과정${roundVal !== 'all' ? ' - ' + roundVal + '차' : ''})
■ 대 분 류 : ${item.category} > ${item.subCategory}
■ 담당강사 : ${item.mainInstructor || '미정'} (주강사) ${item.subInstructor ? '/ ' + item.subInstructor + ' (후보강사)' : ''}
■ 교육일자 : ${dateText}
--------------------------------------------------

■ 수강 대상자 명단 (${activeEmailRecipients.length}명)${roundVal === '2' ? ' [1차 이수자 제외 반영]' : ''}:
${traineeListText}

■ 안내 및 유의사항:
1. 사전에 교육 일정을 확인하시고 업무 일정을 조정하여 주시기 바랍니다.
2. 출석 상태는 교육 운영 관리자 포털에서 기록됩니다.

삼표시멘트 인사팀(교육담당자)`;

  const bodyEl = document.getElementById('bulk-email-body');
  if (bodyEl) bodyEl.value = updatedBody;

  renderRecipientSection();
}

function removeRecipientFromEmailList(empId) {
  activeEmailRecipients = activeEmailRecipients.filter(t => t.empId !== empId);
  renderRecipientSection();
}

function closeEmailModal() {
  document.getElementById('email-modal-overlay').classList.remove('active');
}

function handleEmailCsvUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split('\n').filter(l => l.trim());
    let mappedCount = 0;

    lines.forEach(line => {
      const parts = line.split(',').map(p => p.trim().replace(/^"|"$/g, ''));
      if (parts.length >= 2) {
        const key = parts[0];
        const email = parts[1];
        if (email && email.includes('@')) {
          customTraineeEmailMap[key] = email;
          mappedCount++;
        }
      }
    });

    if (activeEmailCourseId) {
      openBulkEmailModal(activeEmailCourseId);
      const updatedNotice = document.getElementById('email-csv-notice');
      if (updatedNotice) {
        updatedNotice.style.display = 'block';
        updatedNotice.innerHTML = `<i class="fa-solid fa-circle-check"></i> CSV 업로드 완료: 총 ${mappedCount}개의 이메일 주소가 수강 대상자 목록에 성공적으로 적용되었습니다.`;
      }
    }
  };
  reader.readAsText(file);
}

function resetEmailTemplate(id) {
  openBulkEmailModal(id);
}

function simulateSendBulkSms() {
  if (!activeEmailCourseId) return;

  const item = curriculumData.find(d => d.id === activeEmailCourseId);
  
  const validPhoneList = activeEmailRecipients.map(t => {
    const phone = t.phone || '010-0000-0000';
    return `${t.name}(${phone})`;
  });

  const subject = document.getElementById('bulk-email-subject').value;
  const body = document.getElementById('bulk-email-body').value;
  const smsPreview = body.length > 80 ? body.substring(0, 80) + '...' : body;

  alert(`[문자메시지(SMS) 단체 발송 완료]\n\n■ 제목: "${subject}"\n■ 수신 대상: 총 ${activeEmailRecipients.length}명\n${validPhoneList.slice(0, 5).join(', ')}${validPhoneList.length > 5 ? ' 외 ' + (validPhoneList.length - 5) + '명' : ''}\n\n■ 수정된 SMS 발송 내용:\n${smsPreview}\n\n교육대상자의 휴대폰 연락처로 SMS 안내문자가 성공적으로 전송되었습니다.`);
  closeEmailModal();
}

function simulateSendBulkEmail() {
  if (!activeEmailCourseId) return;

  const subject = document.getElementById('bulk-email-subject').value;
  const body = document.getElementById('bulk-email-body').value;

  const bodyPreview = body.length > 100 ? body.substring(0, 100) + '...' : body;
  const recipientNames = activeEmailRecipients.map(t => t.name).join(', ');

  alert(`[단체 메일 발송 완료]\n\n■ 메일 제목: "${subject}"\n■ 수신자 (${activeEmailRecipients.length}명): ${recipientNames}\n\n■ 발송 본문 미리보기:\n${bodyPreview}\n\n수신자 목록 및 본문 내용으로 단체 메일이 성공적으로 전송되었습니다.`);
  closeEmailModal();
}

// Toggle Pantone / Dark theme
function toggleTheme() {
  document.body.classList.toggle('theme-pantone');
  renderCharts();
}
