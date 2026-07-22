// HR AI Education Participant Needs Analysis Data
const rawData = [
  {
    id: 1,
    company: "(주)와이비엠넷",
    department: "인사총무",
    name: "이우진",
    position: "과장",
    experience: "6년7개월",
    task: "평가·채용·교육",
    aiLevel: "개인활용",
    obstacle: "AI 기초활용 역량 부족",
    wishTopic: "각 사업별 AX 교육 사례 및 업무상 활용 방법",
    question: "",
    email: "dlm_305@ybm.co.kr",
    interest: "모두",
    industry: "교육서비스·에듀테크",
    business: "온라인 외국어교육, 기업교육, 자격·시험 서비스, 온·오프라인 블렌디드 및 스마트러닝",
    companyUrl: "https://company.ybmnet.co.kr/",
    coreNeed: "개인 단위의 단편적 AI 활용을 넘어 사업별·HR 기능별 활용 시나리오와 AX 교육 체계를 확보하려는 니즈",
    psychology: "AI 활용 의지는 높지만 기초역량 부족으로 실행 자신감이 낮고, 적용 범위가 넓어 무엇부터 시작할지 불확실한 상태로 추론됨",
    expectedGain: "사업별 AI 활용사례 벤치마크, HR 업무별 적용 우선순위, 바로 사용할 수 있는 프롬프트·도구, 사내 AX 교육 로드맵",
    basis: "개인활용 단계이며 장애물로 기초역량 부족을 명시했고, 사업별 사례와 업무 활용법을 희망함",
    confidence: "높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. HR 업무 자동화를 위한 필수 프롬프트 라이브러리\n2. 사업부문별 AX(AI Transformation) 사례 벤치마킹\n3. 사내 AI 역량강화 교육 로드맵 수립 실습"
  },
  {
    id: 2,
    company: "동원산업",
    department: "HRG팀",
    name: "유소영",
    position: "사원",
    experience: "1년10개월",
    task: "교육기획·운영·사내강사",
    aiLevel: "조직도입",
    obstacle: "AI 교육기법/도입방법 정보 부족",
    wishTopic: "실제 HRD에서 활용 가능한 AI 에이전트와 AI 에이전트 제작 방법",
    question: "",
    email: "soyoung7278@dongwon.com",
    interest: "교육",
    industry: "수산업·지주사업",
    business: "원양어업·수산사업을 기반으로 한 사업 운영과 지주회사로서 계열사 지원, 전략적 투자 및 미래 성장동력 발굴",
    companyUrl: "https://www.dongwon.com/kr/business/dongwon-industries",
    coreNeed: "일반적인 생성형 AI 활용을 넘어 HRD 업무에 특화된 AI 에이전트를 직접 설계·제작하고 조직에 적용하려는 니즈",
    psychology: "실험과 도입 의지가 강하고 구체적 산출물을 원하는 적극적 상태이며, 개론 중심 교육에는 답답함을 느낄 가능성이 있음",
    expectedGain: "교육기획·운영용 에이전트 프로토타입, 노코드·로우코드 제작법, 업무흐름 연계 방법, 조직 도입 시 운영·보안 기준",
    basis: "조직도입 단계이고 학습희망주제가 AI 에이전트의 실제 활용과 제작 방법으로 매우 구체적임",
    confidence: "높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 노코드 기반 Custom GPTs 및 HRD 전용 AI 에이전트 빌드\n2. 교육 기획/운영 자동화 워크플로우 설계\n3. 사내 에이전트 도입 시 운영 및 평가 가이드라인"
  },
  {
    id: 3,
    company: "(주)도루코",
    department: "HR팀",
    name: "전재욱",
    position: "매니저",
    experience: "3년7개월",
    task: "교육·채용·조직문화",
    aiLevel: "조직도입",
    obstacle: "사내 보안 및 정보유출 우려; 저작권·할루시네이션",
    wishTopic: "HRD 부문 AI 활용 사례(BP)",
    question: "",
    email: "jujeon@dorco.co.kr",
    interest: "전체",
    industry: "생활용품 제조업",
    business: "면도기·면도날을 중심으로 한 퍼스널케어 제품과 주방·생활용품의 개발, 제조 및 글로벌 판매",
    companyUrl: "https://www.dorco.co.kr/kor/main/",
    coreNeed: "보안·저작권·정확성 리스크를 통제하면서 제조기업 HRD에 적용할 수 있는 검증된 우수사례와 운영 기준을 확보하려는 니즈",
    psychology: "도입 필요성은 인정하지만 사고 발생 책임과 내부 통제 실패를 경계하는 신중하고 위험민감한 상태로 추론됨",
    expectedGain: "안전한 HRD 활용사례, 정보등급별 사용 기준, 할루시네이션 검증 절차, 저작권 체크리스트, 내부 설득용 도입 근거",
    basis: "조직도입 단계이나 장애물로 보안·정보유출·저작권·할루시네이션을 복수로 제시하고 BP를 요구함",
    confidence: "높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 제조업 HRD 성공 가이드: 검증된 AI 활용 Best Practice\n2. AI 보안/저작권 risk 대응 및 내부 정보보호 가이드라인\n3. 할루시네이션 최소화를 위한 데이터 검증 프로세스"
  },
  {
    id: 4,
    company: "대동",
    department: "인재혁신팀",
    name: "김민우",
    position: "대리",
    experience: "8개월",
    task: "HRD",
    aiLevel: "개인활용",
    obstacle: "교육기법/도입방법 부족; ROI 증명 어려움",
    wishTopic: "생성형 AI를 활용한 교육개발 기법",
    question: "",
    email: "mwkim@daedong.co.kr",
    interest: "인사,교육",
    industry: "농기계·스마트농업·AI 로보틱스",
    business: "트랙터 등 농기계 제조를 기반으로 스마트 농기계, 정밀농업 솔루션, 스마트팜, 모빌리티와 로보틱스 사업 전개",
    companyUrl: "https://ko.daedong.co.kr/",
    coreNeed: "생성형 AI를 교육개발 프로세스에 적용하는 표준 방법과 성과를 수치로 증명할 수 있는 소규모 실증 모델이 필요한 상태",
    psychology: "HRD 경력이 짧아 빠르게 전문성을 확보하고 성과를 입증해야 한다는 부담과 실행 불확실성이 함께 있는 것으로 추론됨",
    expectedGain: "AI 기반 교수설계 템플릿, 콘텐츠 개발 실습, 시간·비용 절감 측정법, 교육효과 지표, 파일럿 과제 설계안",
    basis: "HRD 경력 8개월이며 교육기법 부족과 ROI 증명의 어려움을 동시에 장애물로 제시함",
    confidence: "중간~높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 생성형 AI 기반 맞춤형 HRD 교수설계 & 커리큘럼 템플릿\n2. 교육개발 시간 및 비용 절감을 입증하는 ROI 측정 프레임워크\n3. 파일럿 AI 교육 프로젝트 기획 및 성과 분석"
  },
  {
    id: 5,
    company: "DB생명보험",
    department: "인사팀",
    name: "강태우",
    position: "수석",
    experience: "7년6개월",
    task: "평가·교육",
    aiLevel: "개인활용",
    obstacle: "교육기법/도입방법 정보 부족",
    wishTopic: "실제 교육기획 및 운영 사례",
    question: "",
    email: "twkang@idblife.com",
    interest: "전체",
    industry: "생명보험업",
    business: "보장성보험을 중심으로 한 생명보험 상품 개발·판매, 방카슈랑스 등 판매채널 운영 및 안정적 자산운용",
    companyUrl: "https://www.idblife.com/company/info/bz_realm",
    coreNeed: "규제가 강한 보험업 환경에서도 실제로 작동하는 교육기획·운영 사례와 재사용 가능한 업무절차를 확보하려는 니즈",
    psychology: "경험이 많은 실무자로서 추상적 이론보다 검증된 실행 사례를 선호하며, 도입 효과와 현실 적용 가능성을 냉정하게 확인하려는 상태로 추론됨",
    expectedGain: "교육기획부터 운영·평가까지의 End-to-End 사례, 실무 템플릿, 금융권 보안 고려사항, 적용 전후 효과 데이터",
    basis: "HR 경력 7년6개월이며 구체적으로 실제 교육기획 및 운영 사례를 희망하고 있음",
    confidence: "중간~높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 금융/보험업 규제 환경에 맞춘 End-to-End HRD 운영 사례\n2. 교육 효과 평가 및 AI 기반 참가자 반응 분석\n3. 실무 즉시 적용 가능한 교육 기획 실습 템플릿"
  },
  {
    id: 6,
    company: "부천도시공사",
    department: "경영지원부",
    name: "김효민",
    position: "주임",
    experience: "2년4개월",
    task: "교육",
    aiLevel: "개인활용",
    obstacle: "학습자의 AI 거부감 및 기초역량 부족",
    wishTopic: "AI 활용 수준 차이가 큰 교육생을 만족시키는 교육운영 방법",
    question: "",
    email: "hmiinn@naver.com",
    interest: "전체",
    industry: "지방공기업·도시개발 및 공공시설 운영",
    business: "도시개발·공공주택·도시정비 사업과 주차장·체육시설 등 공공시설의 관리·운영, 시민 서비스 제공",
    companyUrl: "https://www.best.or.kr/fmcs/192",
    coreNeed: "AI 숙련도와 수용성이 다른 학습자들을 동시에 포용할 수 있는 수준별 교육설계와 변화관리 방법이 핵심 니즈",
    psychology: "학습자 불만과 교육 실패 가능성을 우려하며 참여자의 감정과 만족도를 세심하게 관리하려는 책임감·부담이 큰 상태로 추론됨",
    expectedGain: "사전 진단도구, 초급·중급 분화 커리큘럼, 거부감 완화 메시지, 실습 난이도 조절법, 보충학습·코칭 운영안",
    basis: "장애물과 희망주제 모두 학습자의 거부감, 기초역량 차이, 만족도 문제에 집중되어 있음",
    confidence: "높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 학습자 AI 수용성 및 거부감 해소를 위한 변화관리 전략\n2. Level별(초급/중급) 차등화된 수준별 모듈형 학습 설계\n3. 공공기관 임직원 대상 실무 만족도 99% 달성 운영 팁"
  },
  {
    id: 7,
    company: "삼표시멘트",
    department: "인사팀",
    name: "주용현",
    position: "책임",
    experience: "1년",
    task: "교육·평가",
    aiLevel: "개인활용",
    obstacle: "사내 보안 규정 및 생성형AI 사용 제한",
    wishTopic: "교육 진행·안내·평가 업무 적용",
    question: "회사에서 ChatGPT 사용이 어려운데 대체 가능한 보안형 AI는?",
    email: "younghyun.ju@sampyo.co.kr",
    interest: "모두",
    industry: "시멘트 제조업",
    business: "포틀랜드시멘트·고로슬래그시멘트 등 시멘트 생산·판매와 레미콘 사업, 폐기물 자원화 및 환경경영",
    companyUrl: "https://www.sampyocement.co.kr/kor/ir/ir02.html",
    coreNeed: "ChatGPT 사용 제한을 우회하는 것이 아니라 회사 보안정책을 준수하면서 교육 진행·안내·평가를 자동화할 수 있는 대안 확보가 핵심 니즈",
    psychology: "AI 활용 의지는 있으나 내부 규정 때문에 실행이 막혀 답답함을 느끼며, 동시에 보안 사고를 피하려는 제약 인식과 신중함이 큰 상태로 추론됨",
    expectedGain: "기업용·폐쇄형·온프레미스 AI 대안 비교, 민감정보 비식별화 방법, 허용 가능한 자동화 예시, 내부 승인용 보안 체크리스트",
    basis: "사내 사용 제한을 가장 큰 장애물로 제시했고 강사에게 보안형 대체 AI를 직접 질문함",
    confidence: "높음",
    date: "2026-07-22",
    recommendedCurriculum: "1. 사내 보안 규정 준수형 폐쇄형/프라이빗 AI 솔루션 비교\n2. ChatGPT 대체용 온프레미스/Azure OpenAI 활용법\n3. 교육 안내/평가 자동화 시 보안 비식별화 처리 가이드"
  }
];

let levelChartInstance = null;
let obstacleChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  renderKpis();
  renderCharts();
  populateFilters();
  renderCards(rawData);
  setupEvents();
});

// Theme Switcher Logic (Dark Red vs Pantone Pastel)
function toggleTheme() {
  document.body.classList.toggle('theme-pantone');
  const btn = document.getElementById('theme-toggle-btn');
  const isPantone = document.body.classList.contains('theme-pantone');

  if (isPantone) {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i> 다크 크림슨 테마 전환';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-palette"></i> Pantone 파스텔 테마 전환';
  }
}

// Render KPI Cards
function renderKpis() {
  document.getElementById('total-participants').textContent = `${rawData.length}개사`;
  
  const orgCount = rawData.filter(d => d.aiLevel === '조직도입').length;
  const orgPercent = Math.round((orgCount / rawData.length) * 100);
  document.getElementById('org-adoption-rate').textContent = `${orgPercent}% (${orgCount}개사)`;

  // Primary obstacle logic
  const securityCount = rawData.filter(d => d.obstacle.includes('보안')).length;
  document.getElementById('top-obstacle').textContent = `보안/규정 (${securityCount}건)`;
}

// Render Chart.js Visualizations
function renderCharts() {
  const ctxLevel = document.getElementById('chart-level').getContext('2d');
  const ctxObstacle = document.getElementById('chart-obstacle').getContext('2d');

  // AI Level Chart
  const levelCounts = { '개인활용': 0, '조직도입': 0 };
  rawData.forEach(d => {
    if (levelCounts[d.aiLevel] !== undefined) levelCounts[d.aiLevel]++;
  });

  levelChartInstance = new Chart(ctxLevel, {
    type: 'doughnut',
    data: {
      labels: ['개인활용 (Personal Use)', '조직도입 (Org Adoption)'],
      datasets: [{
        data: [levelCounts['개인활용'], levelCounts['조직도입']],
        backgroundColor: ['#e11d48', '#c084fc'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { family: 'Pretendard', size: 12 } }
        }
      },
      cutout: '70%'
    }
  });

  // Obstacle Category Chart
  const obstacleMap = {
    '보안 및 정보유출 우려': 0,
    '기초역량 / 역량부족': 0,
    '교육기법 및 도입 정보부족': 0,
    '학습자 거부감 / 변화관리': 0
  };

  rawData.forEach(d => {
    if (d.obstacle.includes('보안')) obstacleMap['보안 및 정보유출 우려']++;
    else if (d.obstacle.includes('기초역량')) obstacleMap['기초역량 / 역량부족']++;
    else if (d.obstacle.includes('교육기법')) obstacleMap['교육기법 및 도입 정보부족']++;
    else obstacleMap['학습자 거부감 / 변화관리']++;
  });

  obstacleChartInstance = new Chart(ctxObstacle, {
    type: 'bar',
    data: {
      labels: Object.keys(obstacleMap),
      datasets: [{
        label: '응답 기업 수',
        data: Object.values(obstacleMap),
        backgroundColor: ['#e11d48', '#f59e0b', '#c084fc', '#10b981'],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: { font: { size: 11 } },
          grid: { display: false }
        },
        y: {
          ticks: { stepSize: 1 },
          grid: { color: 'rgba(0, 0, 0, 0.05)' },
          beginAtZero: true
        }
      }
    }
  });
}

// Populate Select Dropdowns
function populateFilters() {
  const levelSelect = document.getElementById('filter-level');
  const levelSet = new Set(rawData.map(d => d.aiLevel));
  levelSet.forEach(lvl => {
    const opt = document.createElement('option');
    opt.value = lvl;
    opt.textContent = `활용수준: ${lvl}`;
    levelSelect.appendChild(opt);
  });
}

// Render Cards
function renderCards(data) {
  const grid = document.getElementById('cards-grid');
  const countEl = document.getElementById('results-count');
  grid.innerHTML = '';
  countEl.textContent = `총 ${data.length}개사 검색됨`;

  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #94a3b8;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; display: block; color: #e11d48;"></i>
        검색 결과가 없습니다.
      </div>
    `;
    return;
  }

  data.forEach(item => {
    const isOrg = item.aiLevel === '조직도입';
    const badgeClass = isOrg ? 'badge-purple' : '';

    const card = document.createElement('div');
    card.className = 'participant-card';
    card.innerHTML = `
      <div>
        <div class="card-header">
          <div>
            <div class="company-name">${item.company}</div>
            <div class="user-meta">${item.department} | ${item.name} ${item.position} (${item.experience})</div>
            <div class="email-badge-row">
              <i class="fa-regular fa-envelope"></i> ${item.email}
            </div>
          </div>
          <span class="badge ${badgeClass}">${item.aiLevel}</span>
        </div>
        <div class="card-body">
          <div class="info-item">
            <div class="info-label">주요 장애물</div>
            <div class="info-content" style="color: #e11d48; font-weight: 600;">
              <i class="fa-solid fa-triangle-exclamation" style="margin-right: 4px;"></i>${item.obstacle}
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">학습 희망 주제</div>
            <div class="info-content">${item.wishTopic}</div>
          </div>
          <div class="info-item">
            <div class="info-label">업종 / 주요사업</div>
            <div class="info-content" style="font-size: 0.85rem; opacity: 0.8;">${item.industry}</div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn-email-primary" onclick="sendEmail(${item.id})">
          <i class="fa-solid fa-paper-plane"></i> ${item.name} 담당자 이메일 발송
        </button>
        <div class="card-action-row">
          <button class="btn-detail" style="width:100%" onclick="openModal(${item.id})">
            <i class="fa-solid fa-chart-pie"></i> 심층 분석 및 맞춤 커리큘럼 보기
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Setup Event Listeners for Filters
function setupEvents() {
  const searchInput = document.getElementById('search-input');
  const levelSelect = document.getElementById('filter-level');

  function filterData() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedLevel = levelSelect.value;

    const filtered = rawData.filter(item => {
      const matchesSearch = 
        item.company.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.obstacle.toLowerCase().includes(query) ||
        item.wishTopic.toLowerCase().includes(query) ||
        item.industry.toLowerCase().includes(query);

      const matchesLevel = selectedLevel === 'all' || item.aiLevel === selectedLevel;

      return matchesSearch && matchesLevel;
    });

    renderCards(filtered);
  }

  searchInput.addEventListener('input', filterData);
  levelSelect.addEventListener('change', filterData);
}

// Send Individual Custom Mailto Email
function sendEmail(id) {
  const item = rawData.find(d => d.id === id);
  if (!item || !item.email) {
    alert('등록된 이메일 주소가 없습니다.');
    return;
  }

  const subject = encodeURIComponent(`[HR AI 교육] ${item.company} ${item.name} ${item.position}님 맞춤 교육 커리큘럼 안내`);
  const bodyText = `안녕하세요, ${item.company} ${item.name} ${item.position}님.

HR AI 교육 참가를 위해 제출해주신 니즈 분석 데이터(주요 장애물: ${item.obstacle})를 바탕으로 수립된 맞춤형 교육 커리큘럼을 안내해 드립니다.

■ 희망 학습 주제:
${item.wishTopic}

■ 맞춤 추천 커리큘럼:
${item.recommendedCurriculum}

■ 핵심 니즈 및 실행 방향:
${item.coreNeed}

사내 AI 교육 일정 연계 및 추가 문의사항이 있으실 경우 본 메일로 편하게 답신 부탁드립니다.

감사합니다.
HR AI 교육 운영팀 드림`;

  const body = encodeURIComponent(bodyText);
  window.location.href = `mailto:${item.email}?subject=${subject}&body=${body}`;
}

// Open Detail Modal
function openModal(id) {
  const item = rawData.find(d => d.id === id);
  if (!item) return;

  const modalBody = document.getElementById('modal-body');
  const modalCompany = document.getElementById('modal-company');

  modalCompany.textContent = `${item.company} - HR AI 분석 리포트`;

  const questionHtml = item.question 
    ? `<div class="detail-section" style="border-color: rgba(245, 158, 11, 0.4);">
        <div class="detail-section-title" style="color: #f59e0b;">
          <i class="fa-solid fa-circle-question"></i> 강사 직통 질문
        </div>
        <div class="detail-text" style="font-weight: 600;">"${item.question}"</div>
       </div>`
    : '';

  modalBody.innerHTML = `
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <span class="badge">${item.industry}</span>
      <span class="badge badge-purple">경력 ${item.experience} (${item.task})</span>
      <span class="badge badge-emerald">확신도: ${item.confidence}</span>
    </div>

    ${questionHtml}

    <div class="detail-section">
      <div class="detail-section-title">
        <i class="fa-solid fa-bullseye"></i> 핵심 니즈 추론
      </div>
      <div class="detail-text">${item.coreNeed}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">
        <i class="fa-solid fa-brain"></i> 참가자 심리 상태 & 페르소나
      </div>
      <div class="detail-text">${item.psychology}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">
        <i class="fa-solid fa-gift"></i> 교육을 통해 얻고 싶은 기대 효과
      </div>
      <div class="detail-text">${item.expectedGain}</div>
    </div>

    <div class="curriculum-box">
      <h4><i class="fa-solid fa-graduation-cap"></i> 추천 맞춤형 교육 커리큘럼</h4>
      <div style="white-space: pre-line; line-height: 1.7; font-size: 0.95rem;">
        ${item.recommendedCurriculum}
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.06); padding: 14px 18px; border-radius: 8px;">
      <div style="font-size: 0.85rem;">
        <i class="fa-regular fa-envelope" style="color: #e11d48; margin-right: 6px;"></i> ${item.name} ${item.position} (${item.email})
      </div>
      <button class="btn-email-primary" style="width: auto; padding: 10px 20px;" onclick="sendEmail(${item.id})">
        <i class="fa-solid fa-paper-plane"></i> 이메일 직접 발송
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

// Close modal on background click
window.onclick = function(event) {
  const modal = document.getElementById('modal-overlay');
  if (event.target === modal) {
    closeModal();
  }
};
