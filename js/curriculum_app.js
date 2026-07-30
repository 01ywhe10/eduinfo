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
  const newCount = curriculumData.filter(d => d.note.includes('신규')).length;

  document.getElementById('kpi-total-courses').textContent = `${totalCount}개`;
  document.getElementById('kpi-beginner-courses').textContent = `${beginnerCount}개`;
  document.getElementById('kpi-intermediate-courses').textContent = `${intermediateCount}개`;
  document.getElementById('kpi-new-courses').textContent = `${newCount}개`;
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
          position: 'bottom',
          labels: {
            color: textColor,
            font: { family: 'Pretendard', size: 12, weight: '700' },
            padding: 14,
            usePointStyle: true,
            pointStyle: 'circle',
            generateLabels: function(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                return data.labels.map((label, i) => {
                  const val = data.datasets[0].data[i];
                  const pct = ((val / total) * 100).toFixed(1);
                  return {
                    text: `${label}: ${val}개 (${pct}%)`,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    fontColor: textColor,
                    hidden: isNaN(data.datasets[0].data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                    index: i
                  };
                });
              }
              return [];
            }
          }
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
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery) ||
      item.subCategory.toLowerCase().includes(searchQuery) ||
      item.mainInstructor.toLowerCase().includes(searchQuery) ||
      item.subInstructor.toLowerCase().includes(searchQuery) ||
      item.note.toLowerCase().includes(searchQuery);

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

  let rowsHtml = data.map(item => `
    <tr onclick="openCourseModal('${item.id}')">
      <td><span class="badge badge-level-${item.level}">${item.level}</span></td>
      <td><strong>${item.category}</strong></td>
      <td>${item.subCategory}</td>
      <td style="font-weight: 600; color: var(--text-main);">${item.title}</td>
      <td><i class="fa-solid fa-user-tie" style="color: var(--ci-brand-light); margin-right: 4px;"></i> ${item.mainInstructor || '-'}</td>
      <td>${item.subInstructor || '-'}</td>
      <td>${item.note ? `<span class="badge badge-rose" style="font-size: 0.75rem;">${item.note}</span>` : '-'}</td>
    </tr>
  `).join('');

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
          <th>비고</th>
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

    ${item.note ? `
    <div class="detail-section" style="border-color: rgba(244, 63, 94, 0.4);">
      <div class="detail-section-title" style="color: var(--accent-rose);">
        <i class="fa-solid fa-note-sticky"></i> 특이사항 / 비고
      </div>
      <div class="detail-text">${item.note}</div>
    </div>` : ''}
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

// Toggle Pantone / Dark theme
function toggleTheme() {
  document.body.classList.toggle('theme-pantone');
  renderCharts();
}
