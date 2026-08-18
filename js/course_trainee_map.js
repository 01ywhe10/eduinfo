/**
 * Dynamic Course-Trainee Mapping Engine
 * 
 * Automatically synchronizes course trainees based on real-time trainee level settings
 * (processLvl, maintLvl, qualityLvl) in traineeData (via localStorage).
 */

function buildDynamicCourseTraineeMap() {
  const map = {};
  
  // 1. Fetch latest trainee list (prefer localStorage, fallback to global traineeData)
  let currentTrainees = [];
  if (typeof getStoredTraineeData === 'function') {
    currentTrainees = getStoredTraineeData();
  } else {
    try {
      const stored = localStorage.getItem('sampyo_trainee_data');
      if (stored) {
        currentTrainees = JSON.parse(stored);
      }
    } catch(e) {
      console.error('Error reading sampyo_trainee_data in course_trainee_map:', e);
    }
    if ((!currentTrainees || currentTrainees.length === 0) && typeof traineeData !== 'undefined') {
      currentTrainees = traineeData;
    }
  }

  // 2. Fetch curriculum list
  const curriculums = (typeof curriculumData !== 'undefined') ? curriculumData : [];

  // 3. Dynamically map trainees to each course
  curriculums.forEach(course => {
    const courseId = course.id; // e.g. "초급_1", "중급_5"
    const courseLvl = course.level; // "초급" or "중급"
    const cat = course.category; // "Process&Production", "Maintenance", "Quality", "Environment"

    const matchedTrainees = currentTrainees.filter(t => {
      let targetLvl = '';
      if (cat === 'Process&Production') {
        targetLvl = t.processLvl;
      } else if (cat === 'Maintenance') {
        targetLvl = t.maintLvl;
      } else if (cat === 'Quality') {
        targetLvl = t.qualityLvl;
      } else if (cat === 'Environment') {
        targetLvl = t.processLvl || t.maintLvl || t.qualityLvl;
      } else {
        targetLvl = t.processLvl || t.maintLvl || t.qualityLvl;
      }

      if (!targetLvl) return false;
      if (targetLvl === '전체') return true;
      if (targetLvl.includes(courseLvl)) return true;
      return false;
    });

    map[courseId] = matchedTrainees.map(t => ({
      name: t.name,
      dept: t.dept,
      position: t.position,
      job: t.job,
      empId: t.empId,
      email: t.email || `${t.empId}@sampyo.co.kr`,
      phone: t.phone || '010-0000-0000'
    }));
  });

  return map;
}

// Global ES6 Proxy for seamless backward compatibility and real-time dynamic resolution
const courseTraineeMap = new Proxy({}, {
  get: function(target, prop) {
    if (prop === 'then' || typeof prop === 'symbol' || prop === 'prototype') {
      return target[prop];
    }
    const dynamicMap = buildDynamicCourseTraineeMap();
    if (prop in dynamicMap) {
      return dynamicMap[prop];
    }
    return target[prop] || [];
  },
  has: function(target, prop) {
    const dynamicMap = buildDynamicCourseTraineeMap();
    return prop in dynamicMap || prop in target;
  },
  ownKeys: function(target) {
    const dynamicMap = buildDynamicCourseTraineeMap();
    return Reflect.ownKeys(dynamicMap);
  },
  getOwnPropertyDescriptor: function(target, prop) {
    const dynamicMap = buildDynamicCourseTraineeMap();
    if (prop in dynamicMap) {
      return { configurable: true, enumerable: true, value: dynamicMap[prop] };
    }
    return undefined;
  }
});
