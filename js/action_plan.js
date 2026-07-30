// HR AX Education Action Plan Dataset & Dashboard Logic
const actionPlanData = [
  {
    id: 1,
    company: "(주)와이비엠넷",
    department: "인사총무",
    name: "이우진",
    position: "과장",
    experience: "6년 7개월",
    email: "dlm_305@ybm.co.kr",
    aiLevel: "개인활용",
    industry: "교육서비스·에듀테크",
    targetGoal: "사업부문별 AX 활용 시나리오 작성 및 사내 AX 교육 로드맵 수립",
    category: "AX교육",
    obstacle: "AI 기초활용 역량 부족",
    steps: [
      { step: 1, title: "1~2주차: 프롬프트 라이브러리 구축", desc: "평가·채용·교육 등 HR 전반에 즉시 적용 가능한 프롬프트 30선 제작 및 배포", status: "completed" },
      { step: 2, title: "3~4주차: 사업부문별 AX 사례 벤치마킹", desc: "온라인 외국어/자격증/스마트러닝 등 사업별 성공적인 AX 유즈케이스 수집 및 분석", status: "in-progress" },
      { step: 3, title: "5~8주차: 사내 AX 역량강화 로드맵 런칭", desc: "전사 임직원 대상 3단계(기초-응용-심화) 맞춤형 AI 역량강화 교육 체계 수립", status: "pending" }
    ],
    kpi: "프롬프트 라이브러리 활용률 85% 달성 & 부서별 AX 과제 1건 이상 발굴",
    riskMitigation: "기초역량 부족 해소를 위한 1:1 프롬프트 튜토링 및 가이드북 지원",
    budgetEstimate: "300만원",
    owner: "이우진 과장 (인사총무팀)",
    completedCount: 1
  },
  {
    id: 2,
    company: "동원산업",
    department: "HRG팀",
    name: "유소영",
    position: "사원",
    experience: "1년 10개월",
    email: "soyoung7278@dongwon.com",
    aiLevel: "조직도입",
    industry: "수산업·지주사업",
    targetGoal: "HRD 업무에 특화된 Custom AI 에이전트 설계·제작 및 사내 도입",
    category: "AI에이전트",
    obstacle: "AI 교육기법/도입방법 정보 부족",
    steps: [
      { step: 1, title: "1~2주차: AI 에이전트 빌드 환경 구축", desc: "노코드/로우코드(Custom GPTs, Dify 등) 에이전트 개발 기초 역량 확보 및 툴 선정", status: "completed" },
      { step: 2, title: "3~4주차: HRD 에이전트 프로토타입 2종 개발", desc: "교육 기획서 자동 생성기 및 사내 교육 FAQ 자동 응답 챗봇 프로토타입 제작", status: "in-progress" },
      { step: 3, title: "5~8주차: 에이전트 사내 테스트 및 운영기준 정립", desc: "HRG팀 내부 파일럿 검증 후 실무 적용 및 에이전트 품질·보안 가이드라인 배포", status: "pending" }
    ],
    kpi: "교육기획 작성 시간 50% 단축 & HRD FAQ 자동처리율 70% 달성",
    riskMitigation: "노코드 프레임워크 템플릿을 사전 제공하여 개발 부담 최소화",
    budgetEstimate: "500만원",
    owner: "유소영 사원 (HRG팀)",
    completedCount: 1
  },
  {
    id: 3,
    company: "(주)도루코",
    department: "HR팀",
    name: "전재욱",
    position: "매니저",
    experience: "3년 7개월",
    email: "jujeon@dorco.co.kr",
    aiLevel: "조직도입",
    industry: "생활용품 제조업",
    targetGoal: "보안·저작권 리스크 통제형 제조기업 HRD 성공사례(BP) 확보 및 적용",
    category: "보안규정",
    obstacle: "사내 보안 및 정보유출 우려; 저작권·할루시네이션",
    steps: [
      { step: 1, title: "1~2주차: 사내 AI 보안/저작권 가이드라인 제정", desc: "정보등급별 사용 가능 범위 및 입력 금지 데이터 체크리스트 작성", status: "completed" },
      { step: 2, title: "3~4주차: 제조업 HRD 우수사례(BP) 벤치마킹", desc: "글로벌 제조업체의 AI 활용 가이드 및 할루시네이션 방지 팩트체크 프로세스 도입", status: "completed" },
      { step: 3, title: "5~8주차: 경영진 승인용 도입 보고서 제출 및 런칭", desc: "안전성이 검증된 AI 도구 수용 기준을 바탕으로 전사 HRD 워크숍 진행", status: "in-progress" }
    ],
    kpi: "보안 사고 0건 달성 & 안전한 HRD 우수사례 3건 이상 실무 도입",
    riskMitigation: "정보 비식별화 도구 선제 도입 및 할루시네이션 크로스체크 시스템 가동",
    budgetEstimate: "400만원",
    owner: "전재욱 매니저 (HR팀)",
    completedCount: 2
  },
  {
    id: 4,
    company: "대동",
    department: "인재혁신팀",
    name: "김민우",
    position: "대리",
    experience: "8개월",
    email: "mwkim@daedong.co.kr",
    aiLevel: "개인활용",
    industry: "농기계·스마트농업·AI 로보틱스",
    targetGoal: "생성형 AI 기반 교수설계 표준 프로세스 수립 및 ROI 성과 입증",
    category: "ROI측정",
    obstacle: "교육기법/도입방법 부족; ROI 증명 어려움",
    steps: [
      { step: 1, title: "1~2주차: AI 교수설계(ADDIE+AI) 템플릿 제작", desc: "커리큘럼 기획, 교안 작성, 실습 과제 생성을 위한 AI 템플릿 모듈 개발", status: "completed" },
      { step: 2, title: "3~4주차: 소규모 파일럿 교육과정 실행", desc: "스마트농업/모빌리티 신입사원 대상 AI 기반 교육과정 시범 운영", status: "in-progress" },
      { step: 3, title: "5~8주차: 시간·비용 절감 ROI 분석보고서 작성", desc: "기존 대비 교육 개발 시간 40% 단축 정량 데이터 분석 및 경영진 보고", status: "pending" }
    ],
    kpi: "교육 콘텐츠 개발 시간 40% 절감 & 교육생 만족도 90점 이상",
    riskMitigation: "정량 지표(개발시간, 비용절감, 평가점수) 사전 설계로 ROI 정밀 측정",
    budgetEstimate: "350만원",
    owner: "김민우 대리 (인재혁신팀)",
    completedCount: 1
  },
  {
    id: 5,
    company: "DB생명보험",
    department: "인사팀",
    name: "강태우",
    position: "수석",
    experience: "7년 6개월",
    email: "twkang@idblife.com",
    aiLevel: "개인활용",
    industry: "생명보험업",
    targetGoal: "금융 규제 준수형 End-to-End 교육기획·운영·평가 표준화",
    category: "AX교육",
    obstacle: "교육기법/도입방법 정보 부족",
    steps: [
      { step: 1, title: "1~2주차: 금융권 보안 요구사항 점검", desc: "생명보험업계 개인정보 보호 가이드라인 준수 여부 및 비식별 데이터 처리", status: "completed" },
      { step: 2, title: "3~4주차: 통합 교육기획-운영 실무 템플릿 적용", desc: "교육 참가자 반응 분석, 퀴즈 자동 생성, 평가 결과 보고서 자동 작성 프로세스 구축", status: "in-progress" },
      { step: 3, title: "5~8주차: 사내 맞춤형 교육 프로세스 매뉴얼 완성", desc: "전 인사팀 대상 업무 절차 공유 및 재사용 가능한 교육 운영 가이드 확정", status: "pending" }
    ],
    kpi: "교육 운영 행정 공수 35% 감소 & 금융 감독 규정 100% 준수",
    riskMitigation: "금융당국 보안 규정 체크리스트를 준수하는 전용 템플릿 배포",
    budgetEstimate: "450만원",
    owner: "강태우 수석 (인사팀)",
    completedCount: 1
  },
  {
    id: 6,
    company: "부천도시공사",
    department: "경영지원부",
    name: "김효민",
    position: "주임",
    experience: "2년 4개월",
    email: "hmiinn@naver.com",
    aiLevel: "개인활용",
    industry: "지방공기업·도시개발",
    targetGoal: "학습자 AI 거부감 완화 및 수준별(초/중급) 차등 모듈 교육 운영",
    category: "변화관리",
    obstacle: "학습자의 AI 거부감 및 기초역량 부족",
    steps: [
      { step: 1, title: "1~2주차: 임직원 AI 디지털 준비도 사전 진단", desc: "공공시설/경영지원 전 직원 대상 AI 거부감 및 활용 수준 사전 설문 실시", status: "completed" },
      { step: 2, title: "3~4주차: 2 트랙(초급/중급) 맞춤 커리큘럼 편성", desc: "초급: 거부감 완화 및 프롬프트 기초 / 중급: 공공행정 문서 자동화 실습", status: "in-progress" },
      { step: 3, title: "5~8주차: 1:1 보충 코칭 및 변화관리 만족도 평가", desc: "실습 부진 학습자 대상 맞춤 튜토링 제공 및 수용성 향상 성과 측정", status: "pending" }
    ],
    kpi: "교육 만족도 95% 이상 달성 & 학습자 AI 거부감 지수 50% 감소",
    riskMitigation: "친근한 공공행정 활용 예시 위주 구성 및 1:1 코칭 지원",
    budgetEstimate: "300만원",
    owner: "김효민 주임 (경영지원부)",
    completedCount: 1
  },
  {
    id: 7,
    company: "삼표시멘트",
    department: "인사팀",
    name: "주용현",
    position: "책임",
    experience: "1년",
    email: "younghyun.ju@sampyo.co.kr",
    aiLevel: "개인활용",
    industry: "시멘트 제조업",
    targetGoal: "사내 보안 준수형 대체 AI 활용 및 교육 안내·평가 자동화",
    category: "보안규정",
    obstacle: "사내 보안 규정 및 생성형AI 사용 제한",
    steps: [
      { step: 1, title: "1~2주차: 대체 가능한 기업용/보안형 AI 비교", desc: "ChatGPT 사용 제한 대응 Azure OpenAI / 사내 폐쇄형 LLM 대안 평가", status: "completed" },
      { step: 2, title: "3~4주차: 교육 안내·평가 자동화 워크플로우 적용", desc: "보안 가이드라인 내에서 비식별 데이터 기반 교육 안내 메일 및 평가 자동화", status: "completed" },
      { step: 3, title: "5~8주차: 사내 보안 승인 및 현장 적용 확대", desc: "보안팀 최종 승인 검토 후 시멘트/레미콘 사업 부문 교육 업무 적용", status: "in-progress" }
    ],
    kpi: "보안 승인 통과 & 교육 안내/평가 처리 속도 60% 향상",
    riskMitigation: "민감정보 사전 마스킹(비식별화) 자동화 모듈 적용",
    budgetEstimate: "500만원",
    owner: "주용현 책임 (인사팀)",
    completedCount: 2
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderActionKpis();
  renderActionCards(actionPlanData);
  populateActionFilters();
  setupActionEvents();
});

// Render Overview KPI Summaries
function renderActionKpis() {
  const totalCount = actionPlanData.length;
  document.getElementById('total-plans-count').textContent = `${totalCount}개사`;

  let totalSteps = 0;
  let doneSteps = 0;
  actionPlanData.forEach(item => {
    totalSteps += item.steps.length;
    doneSteps += item.completedCount;
  });

  const overallProgress = Math.round((doneSteps / totalSteps) * 100);
  document.getElementById('overall-progress-rate').textContent = `${overallProgress}%`;
  document.getElementById('overall-progress-subtext').textContent = `총 ${totalSteps}개 실행 과제 중 ${doneSteps}개 완료`;

  // Top Category
  document.getElementById('top-action-category').textContent = "AX교육 & 보안규정";
}

// Populate Filters
function populateActionFilters() {
  const levelSelect = document.getElementById('filter-action-level');
  const categorySelect = document.getElementById('filter-action-category');

  if (levelSelect) {
    const levels = [...new Set(actionPlanData.map(d => d.aiLevel))];
    levels.forEach(lvl => {
      const opt = document.createElement('option');
      opt.value = lvl;
      opt.textContent = `활용단계: ${lvl}`;
      levelSelect.appendChild(opt);
    });
  }

  if (categorySelect) {
    const cats = [...new Set(actionPlanData.map(d => d.category))];
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = `추진영역: ${c}`;
      categorySelect.appendChild(opt);
    });
  }
}

// Render Interactive Action Plan Cards
function renderActionCards(data) {
  const grid = document.getElementById('action-cards-grid');
  const countEl = document.getElementById('action-results-count');
  if (!grid) return;

  grid.innerHTML = '';
  if (countEl) countEl.textContent = `총 ${data.length}개 기업 액션플랜 검색됨`;

  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; display: block; color: var(--ci-brand-hex);"></i>
        검색 조건에 해당되는 교육 액션플랜이 없습니다.
      </div>
    `;
    return;
  }

  data.forEach(item => {
    const totalSteps = item.steps.length;
    const progressPct = Math.round((item.completedCount / totalSteps) * 100);
    const isOrg = item.aiLevel === '조직도입';
    const badgeClass = isOrg ? 'badge-purple' : '';

    const stepsHtml = item.steps.map((st, idx) => {
      const isDone = st.status === 'completed';
      const isInProgress = st.status === 'in-progress';
      const checkIcon = isDone ? 'fa-square-check' : 'fa-square';
      const statusBadge = isDone 
        ? '<span class="step-status status-done"><i class="fa-solid fa-check"></i> 완료</span>' 
        : isInProgress 
          ? '<span class="step-status status-progress"><i class="fa-solid fa-spinner fa-spin"></i> 진행중</span>'
          : '<span class="step-status status-pending">대기</span>';

      return `
        <div class="step-item ${isDone ? 'done' : ''}" onclick="toggleStepStatus(${item.id}, ${idx})">
          <div class="step-header-row">
            <div class="step-title-text">
              <i class="fa-regular ${checkIcon} check-checkbox"></i>
              <strong>${st.title}</strong>
            </div>
            ${statusBadge}
          </div>
          <div class="step-desc-text">${st.desc}</div>
        </div>
      `;
    }).join('');

    const card = document.createElement('div');
    card.className = 'action-plan-card';
    card.innerHTML = `
      <div class="action-card-header">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="badge ${badgeClass}">${item.aiLevel}</span>
            <span class="badge badge-rose">${item.category}</span>
          </div>
          <h3 class="action-card-title">${item.company}</h3>
          <div class="action-card-owner">
            <i class="fa-regular fa-user"></i> ${item.owner} | ${item.industry}
          </div>
        </div>
        <div class="progress-circle-box" title="진행률 ${progressPct}%">
          <span class="progress-pct">${progressPct}%</span>
          <span class="progress-label">달성률</span>
        </div>
      </div>

      <div class="action-card-body">
        <div class="goal-box">
          <div class="goal-title"><i class="fa-solid fa-bullseye"></i> 액션플랜 핵심 목표</div>
          <div class="goal-desc">${item.targetGoal}</div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
        </div>

        <div class="steps-container">
          <div class="steps-heading"><i class="fa-solid fa-list-check"></i> 3단계 실행 상세 로드맵 (클릭하여 완료 상태 변경)</div>
          ${stepsHtml}
        </div>

        <div class="kpi-risk-grid">
          <div class="kpi-box">
            <div class="box-title"><i class="fa-solid fa-chart-line"></i> 핵심 성과 지표 (KPI)</div>
            <div class="box-content">${item.kpi}</div>
          </div>
          <div class="risk-box">
            <div class="box-title"><i class="fa-solid fa-shield-halved"></i> 리스크 대응 방안</div>
            <div class="box-content">${item.riskMitigation}</div>
          </div>
        </div>
      </div>

      <div class="action-card-footer">
        <button class="btn-email-primary" onclick="sendActionEmail(${item.id})">
          <i class="fa-solid fa-paper-plane"></i> 액션플랜 이메일 전송
        </button>
        <button class="btn-detail" onclick="openActionModal(${item.id})">
          <i class="fa-solid fa-file-pdf"></i> 심층 실행 계획서 보기
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Interactive Checklist Toggle Logic
function toggleStepStatus(companyId, stepIdx) {
  const item = actionPlanData.find(d => d.id === companyId);
  if (!item) return;

  const currentStatus = item.steps[stepIdx].status;
  if (currentStatus === 'completed') {
    item.steps[stepIdx].status = 'pending';
  } else if (currentStatus === 'pending') {
    item.steps[stepIdx].status = 'in-progress';
  } else {
    item.steps[stepIdx].status = 'completed';
  }

  // Recalculate completed count
  item.completedCount = item.steps.filter(s => s.status === 'completed').length;

  renderActionKpis();
  filterActionData();
}

// Search and Filter Setup
function setupActionEvents() {
  const searchInput = document.getElementById('search-action-input');
  const levelSelect = document.getElementById('filter-action-level');
  const categorySelect = document.getElementById('filter-action-category');

  if (searchInput) searchInput.addEventListener('input', filterActionData);
  if (levelSelect) levelSelect.addEventListener('change', filterActionData);
  if (categorySelect) categorySelect.addEventListener('change', filterActionData);
}

function filterActionData() {
  const searchInput = document.getElementById('search-action-input');
  const levelSelect = document.getElementById('filter-action-level');
  const categorySelect = document.getElementById('filter-action-category');

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const level = levelSelect ? levelSelect.value : 'all';
  const category = categorySelect ? categorySelect.value : 'all';

  const filtered = actionPlanData.filter(item => {
    const matchesSearch = 
      item.company.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.targetGoal.toLowerCase().includes(query) ||
      item.obstacle.toLowerCase().includes(query) ||
      item.industry.toLowerCase().includes(query);

    const matchesLevel = level === 'all' || item.aiLevel === level;
    const matchesCategory = category === 'all' || item.category === category;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  renderActionCards(filtered);
}

// Theme Switcher Shared Function
function toggleTheme() {
  document.body.classList.toggle('theme-pantone');
  const btn = document.getElementById('theme-toggle-btn');
  const isPantone = document.body.classList.contains('theme-pantone');

  if (btn) {
    if (isPantone) {
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> 다크 크림슨 테마 전환';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-palette"></i> Pantone 파스텔 테마 전환';
    }
  }
}

// Email Action Plan
function sendActionEmail(id) {
  const item = actionPlanData.find(d => d.id === id);
  if (!item) return;

  const subject = encodeURIComponent(`[HR AX 액션플랜] ${item.company} ${item.name} 담당자님 실행 계획서`);
  const stepsText = item.steps.map(s => `- ${s.title}: ${s.desc} [상태: ${s.status}]`).join('\n');

  const bodyText = `안녕하세요, ${item.company} ${item.name} 담당자님.

제출해주신 니즈 데이터를 기반으로 작성된 8주 차 단계별 교육 액션플랜(Action Plan)입니다.

■ 액션플랜 핵심 목표:
${item.targetGoal}

■ 3단계 실행 로드맵:
${stepsText}

■ 핵심 성과 지표(KPI):
${item.kpi}

■ 리스크 대응 방안:
${item.riskMitigation}

본 실행 계획서 관련 추가 질문이나 변경 요청은 답신 부탁드립니다.

감사합니다.
HR AI 교육 운영팀 드림`;

  window.location.href = `mailto:${item.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

// Open Action Plan Detail Modal
function openActionModal(id) {
  const item = actionPlanData.find(d => d.id === id);
  if (!item) return;

  const modalBody = document.getElementById('modal-body');
  const modalCompany = document.getElementById('modal-company');

  modalCompany.textContent = `${item.company} - HR AX 8주 실행 액션플랜 보고서`;

  const stepsHtml = item.steps.map(st => `
    <div style="background: rgba(0,0,0,0.04); padding: 14px 18px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid var(--ci-brand-hex);">
      <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${st.title}</div>
      <div style="font-size: 0.875rem; color: var(--text-muted); margin-top: 4px;">${st.desc}</div>
      <div style="margin-top: 6px; font-size: 0.8rem; font-weight: 600; color: ${st.status === 'completed' ? '#10b981' : st.status === 'in-progress' ? '#38bdf8' : '#f59e0b'};">
        상태: ${st.status === 'completed' ? '완료' : st.status === 'in-progress' ? '진행 중' : '대기 중'}
      </div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px;">
      <span class="badge">${item.industry}</span>
      <span class="badge badge-purple">담당: ${item.owner}</span>
      <span class="badge badge-emerald">예산: ${item.budgetEstimate}</span>
    </div>

    <div class="detail-section">
      <div class="detail-section-title"><i class="fa-solid fa-bullseye"></i> 추진 목표</div>
      <div class="detail-text" style="font-weight: 600;">${item.targetGoal}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title"><i class="fa-solid fa-triangle-exclamation"></i> 기존 주요 장애물</div>
      <div class="detail-text" style="color: #e11d48; font-weight: 600;">${item.obstacle}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title"><i class="fa-solid fa-road"></i> 3단계 세부 로드맵</div>
      ${stepsHtml}
    </div>

    <div class="detail-section">
      <div class="detail-section-title"><i class="fa-solid fa-chart-line"></i> 핵심 성과 지표 (KPI)</div>
      <div class="detail-text">${item.kpi}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title"><i class="fa-solid fa-shield-halved"></i> 리스크 관리 전략</div>
      <div class="detail-text">${item.riskMitigation}</div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
      <button class="btn-email-primary" style="width: auto; padding: 10px 20px;" onclick="window.print()">
        <i class="fa-solid fa-print"></i> 보고서 인쇄 / PDF 저장
      </button>
      <button class="btn-email-primary" style="width: auto; padding: 10px 20px;" onclick="sendActionEmail(${item.id})">
        <i class="fa-solid fa-paper-plane"></i> 담당자 메일 보도
      </button>
    </div>
  `;

  const modal = document.getElementById('modal-overlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

window.onclick = function(event) {
  const modal = document.getElementById('modal-overlay');
  if (event.target === modal) {
    closeModal();
  }
};
