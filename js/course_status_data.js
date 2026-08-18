/**
 * Default Initial Course Completion Data File (교육 이수 현황 데이터)
 * 
 * 차후 RDBMS(MySQL, PostgreSQL 등) 테이블 연동 및 DB 마이그레이션이 용이하도록
 * 정형화된 JSON 데이터 구조로 정의되어 있습니다.
 */
const defaultCourseStatusData = {
  "초급_1": {
    "status": "미진행",
    "progress": 0,
    "targetCount": 35,
    "completedCount": 0,
    "extraCount": 0,
    "eduDate": "2026-03-24",
    "round1Trainees": [],
    "round2Trainees": []
  },
  "초급_15": {
    "status": "완료",
    "progress": 100,
    "targetCount": 2,
    "completedCount": 2,
    "extraCount": 0,
    "eduDate": "2026-07-28",
    "round1Trainees": ["1007338", "1009123"],
    "round2Trainees": []
  }
};

// Global helper to load course status data with localStorage fallback
function getStoredCourseStatusData() {
  try {
    const saved = localStorage.getItem('sampyo_admin_course_status_v3');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading sampyo_admin_course_status_v3:', e);
  }
  return typeof defaultCourseStatusData !== 'undefined' ? defaultCourseStatusData : {};
}

// Global helper to save course status data
function saveStoredCourseStatusData(data) {
  try {
    localStorage.setItem('sampyo_admin_course_status_v3', JSON.stringify(data));
  } catch (e) {
    console.error('Error saving sampyo_admin_course_status_v3:', e);
  }
}
