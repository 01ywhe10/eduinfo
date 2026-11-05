const initialTraineeData = [
  {
    "seq": "1",
    "dept": "R&D팀",
    "position": "책임",
    "job": "R&D",
    "empId": "1007338",
    "name": "오양석",
    "processLvl": "(선택)",
    "maintLvl": "중급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "2",
    "dept": "R&D팀",
    "position": "매니저",
    "job": "R&D",
    "empId": "1008568",
    "name": "임희아",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "3",
    "dept": "공정개선팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1008255",
    "name": "이순혁",
    "processLvl": "(선택)",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "4",
    "dept": "공정개선팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1008253",
    "name": "정신환",
    "processLvl": "(선택)",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "5",
    "dept": "광산생산팀",
    "position": "수석",
    "job": "생산기획",
    "empId": "1007171",
    "name": "고영민",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "6",
    "dept": "광산생산팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1008320",
    "name": "이원섭",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "7",
    "dept": "기계팀",
    "position": "매니저",
    "job": "기계설비",
    "empId": "1008621",
    "name": "김국송",
    "processLvl": "제외",
    "maintLvl": "제외",
    "qualityLvl": "제외",
    "email": "",
    "phone": "#N/A"
  },
  {
    "seq": "8",
    "dept": "기계팀",
    "position": "책임",
    "job": "기계설비",
    "empId": "1008326",
    "name": "김창용",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "9",
    "dept": "기계팀",
    "position": "책임",
    "job": "기계설비",
    "empId": "1008256",
    "name": "신성웅",
    "processLvl": "초급",
    "maintLvl": "(선택)",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "10",
    "dept": "기계팀",
    "position": "책임",
    "job": "기계설비",
    "empId": "1007556",
    "name": "홍성훈",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "11",
    "dept": "기술팀",
    "position": "책임",
    "job": "설비/공사",
    "empId": "1007337",
    "name": "김영욱",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "12",
    "dept": "기술팀",
    "position": "책임",
    "job": "설비/공사",
    "empId": "1008154",
    "name": "이기수",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "13",
    "dept": "보전관리팀",
    "position": "수석",
    "job": "생산관리",
    "empId": "1008200",
    "name": "배장석",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "14",
    "dept": "보전관리팀",
    "position": "책임",
    "job": "기계설비",
    "empId": "1008258",
    "name": "이동원",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "15",
    "dept": "보전관리팀",
    "position": "책임",
    "job": "기계설비",
    "empId": "1007553",
    "name": "이진희",
    "processLvl": "초급",
    "maintLvl": "(선택)",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "16",
    "dept": "생산1팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "1008619",
    "name": "박희범",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "17",
    "dept": "생산1팀",
    "position": "수석",
    "job": "생산관리",
    "empId": "1007320",
    "name": "이유형",
    "processLvl": "(선택)",
    "maintLvl": "(선택)",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "18",
    "dept": "생산1팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "1008618",
    "name": "최민규",
    "processLvl": "중급",
    "maintLvl": "중급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "19",
    "dept": "생산2팀",
    "position": "수석",
    "job": "생산관리",
    "empId": "1007327",
    "name": "김동현",
    "processLvl": "(선택)",
    "maintLvl": "(선택)",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "20",
    "dept": "생산2팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1008321",
    "name": "박상진",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "21",
    "dept": "생산2팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "1008620",
    "name": "정희경",
    "processLvl": "중급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "22",
    "dept": "생산기획팀",
    "position": "책임",
    "job": "생산기획",
    "empId": "1007588",
    "name": "남광현",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "23",
    "dept": "생산기획팀",
    "position": "책임",
    "job": "생산기획",
    "empId": "1007580",
    "name": "이혜진",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "24",
    "dept": "순환자원파트",
    "position": "책임",
    "job": "생산관리",
    "empId": "1007331",
    "name": "윤인한",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "25",
    "dept": "안전보건팀",
    "position": "책임",
    "job": "보건",
    "empId": "1007420",
    "name": "김보애",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "26",
    "dept": "안전보건팀",
    "position": "수석",
    "job": "환경안전",
    "empId": "1008521",
    "name": "신승호",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "27",
    "dept": "안전보건팀",
    "position": "책임",
    "job": "환경안전",
    "empId": "1007336",
    "name": "조경찬",
    "processLvl": "제외",
    "maintLvl": "제외",
    "qualityLvl": "제외",
    "email": "",
    "phone": "#N/A"
  },
  {
    "seq": "28",
    "dept": "안전보건팀",
    "position": "매니저",
    "job": "환경안전",
    "empId": "1008683",
    "name": "홍성호",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "29",
    "dept": "운영지원팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1008707",
    "name": "유다건",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "30",
    "dept": "전기팀",
    "position": "책임",
    "job": "설비/공사",
    "empId": "1008261",
    "name": "김세중",
    "processLvl": "초급",
    "maintLvl": "(선택)",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "31",
    "dept": "전기팀",
    "position": "수석",
    "job": "설비/공사",
    "empId": "1007074",
    "name": "김종태",
    "processLvl": "초급",
    "maintLvl": "(선택)",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "32",
    "dept": "전기팀",
    "position": "책임",
    "job": "설비/공사",
    "empId": "1008324",
    "name": "박건",
    "processLvl": "초급",
    "maintLvl": "(선택)",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "33",
    "dept": "전기팀",
    "position": "수석",
    "job": "설비/공사",
    "empId": "1005970",
    "name": "송창근",
    "processLvl": "제외",
    "maintLvl": "제외",
    "qualityLvl": "제외",
    "email": "",
    "phone": ""
  },
  {
    "seq": "34",
    "dept": "제품팀",
    "position": "수석",
    "job": "생산관리",
    "empId": "1007169",
    "name": "고시원",
    "processLvl": "(선택)",
    "maintLvl": "(선택)",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "35",
    "dept": "제품팀",
    "position": "책임",
    "job": "생산관리",
    "empId": "1007967",
    "name": "정윤수",
    "processLvl": "중급",
    "maintLvl": "중급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "36",
    "dept": "품질팀",
    "position": "책임",
    "job": "품질관리",
    "empId": "1007335",
    "name": "김상진",
    "processLvl": "중급",
    "maintLvl": "중급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "37",
    "dept": "품질팀",
    "position": "수석",
    "job": "품질관리",
    "empId": "1005936",
    "name": "안상원",
    "processLvl": "초급",
    "maintLvl": "중급",
    "qualityLvl": "(선택)",
    "email": "",
    "phone": ""
  },
  {
    "seq": "38",
    "dept": "품질팀",
    "position": "책임",
    "job": "품질관리",
    "empId": "1008254",
    "name": "오민석",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "중급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "39",
    "dept": "품질팀",
    "position": "수석",
    "job": "품질관리",
    "empId": "1007329",
    "name": "임두섭",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "(선택)",
    "email": "",
    "phone": ""
  },
  {
    "seq": "40",
    "dept": "순환자원파트",
    "position": "책임",
    "job": "생산관리",
    "empId": "1007334",
    "name": "정의식",
    "processLvl": "중급",
    "maintLvl": "초급",
    "qualityLvl": "(선택)",
    "email": "",
    "phone": ""
  },
  {
    "seq": "41",
    "dept": "환경팀",
    "position": "수석",
    "job": "환경안전",
    "empId": "1008296",
    "name": "김지현",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "42",
    "dept": "환경팀",
    "position": "책임",
    "job": "환경안전",
    "empId": "1008325",
    "name": "이인욱",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "43",
    "dept": "안전보건팀",
    "position": "책임",
    "job": "환경안전",
    "empId": "1008682",
    "name": "김준배",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "44",
    "dept": "운영지원팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "1008735",
    "name": "김형준",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "45",
    "dept": "공정개선팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "K24081",
    "name": "이준호",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "46",
    "dept": "광산생산팀",
    "position": "수석",
    "job": "생산관리",
    "empId": "1007172",
    "name": "권민수",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "47",
    "dept": "생산2팀",
    "position": "매니저",
    "job": "생산관리",
    "empId": "1008913",
    "name": "김건우",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "48",
    "dept": "보전관리팀",
    "position": "매니저",
    "job": "기계설비",
    "empId": "1008914",
    "name": "민성운",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "49",
    "dept": "기계팀",
    "position": "매니저",
    "job": "기계설비",
    "empId": "1008915",
    "name": "권오영",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "50",
    "dept": "인사팀",
    "position": "매니저",
    "job": "교육운영",
    "empId": "1008917",
    "name": "조현서",
    "processLvl": "(선택)",
    "maintLvl": "(선택)",
    "qualityLvl": "(선택)",
    "email": "",
    "phone": ""
  },
  {
    "seq": "51",
    "dept": "전기팀",
    "position": "매니저",
    "job": "설비/공사",
    "empId": "1008923",
    "name": "김용하",
    "processLvl": "초급",
    "maintLvl": "초급",
    "qualityLvl": "초급",
    "email": "",
    "phone": ""
  },
  {
    "seq": "52",
    "dept": "인사팀",
    "position": "교육담당자",
    "job": "교육운영",
    "empId": "ADMIN_JU",
    "name": "주용현",
    "processLvl": "(제외)",
    "maintLvl": "(제외)",
    "qualityLvl": "(제외)",
    "email": "",
    "phone": ""
  }
];

function getStoredTraineeData() {
  try {
    const stored = localStorage.getItem('sampyo_trainee_data');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Merge with initial data to preserve any default fields or trainees
        const map = new Map();
        initialTraineeData.forEach(item => map.set(String(item.empId), { ...item }));
        parsed.forEach(item => {
          if (item && item.empId) {
            const prev = map.get(String(item.empId)) || {};
            map.set(String(item.empId), { ...prev, ...item });
          }
        });
        const adminItem = map.get('ADMIN_JU');
        if (adminItem) {
          adminItem.processLvl = '(제외)';
          adminItem.maintLvl = '(제외)';
          adminItem.qualityLvl = '(제외)';
        }
        return [...map.values()].map((item, index) => ({
          ...item,
          seq: String(index + 1)
        }));
      }
    }
  } catch (e) {
    console.error('Error loading trainee data from localStorage:', e);
  }
  return initialTraineeData.map(item => ({ ...item }));
}

function saveStoredTraineeData(data) {
  try {
    if (data && Array.isArray(data)) {
      traineeData = data;
    }
    localStorage.setItem('sampyo_trainee_data', JSON.stringify(traineeData));

    // Async sync with Supabase if traineeSync module exists
    if (window.traineeSync && typeof window.traineeSync.saveAll === 'function') {
      window.traineeSync.saveAll(traineeData).catch(() => {});
    }
  } catch (e) {
    console.error('Error saving trainee data to localStorage:', e);
  }
}

function resetTraineeData() {
  localStorage.removeItem('sampyo_trainee_data');
  traineeData = initialTraineeData.map(item => ({ ...item }));
  saveStoredTraineeData(traineeData);
  return traineeData;
}

let traineeData = getStoredTraineeData();


