# 데이터 파일 및 데이터베이스 연결 지도

이 문서는 SMB 공유 드라이브에서 한글 파일명의 NFC/NFD 충돌을 방지하기 위해 사용하는 ASCII 파일명과 한글 업무명의 대응 관계를 기록한다.

## 파일 매핑

| 한글 업무명 | 실제 파일명 | 연결 위치 | 데이터베이스 연결 | 설명 |
|---|---|---|---|---|
| 초급 교육과정 | `course-basic.csv` | 직접 참조 없음 | 직접 연결 없음 | 초급 교육과정 원본 자료 |
| 중급 교육과정 | `course-intermediate.csv` | 직접 참조 없음 | 직접 연결 없음 | 중급 교육과정 원본 자료 |
| 교육과정 교육일정 | `course-schedule.csv` | `attendance-sheet.html` | 직접 연결 없음 | 출석 양식의 교육일정 원본 |
| 교육대상자 | `trainees.csv` | 직접 참조 없음 | `public.trainees`와 업무상 대응 | 현재 파일은 비어 있으며 앱은 `js/trainee_sync.js`를 통해 DB에 연결 |
| 사내강사 현황 | `instructor-status.csv` | 직접 참조 없음 | 직접 연결 없음 | 강사 현황 원본 자료, 앱 데이터는 `js/instructor_data.js`에서 관리 |
| 출석 양식 | `attendance-sheet.html` | `js/curriculum_app.js` | 이수현황 및 교육대상자 데이터를 앱 모듈에서 사용 | 과정별 출석 양식 출력 화면 |
| 2026 교육진행현황 | `2026-training-progress.xlsx` | 직접 참조 없음 | 직접 연결 없음 | 기본 교육진행현황 통합 문서 |
| 2026 교육진행현황 복구본 | `2026-training-progress-recovery.xlsx` | 직접 참조 없음 | 직접 연결 없음 | 복구용 통합 문서 |
| 2026 교육진행현황 최신반영 | `2026-training-progress-latest.xlsx` | 직접 참조 없음 | 직접 연결 없음 | 최신 데이터 반영 통합 문서 |
| 2026 교육진행현황 출석반영 | `2026-training-progress-attendance.xlsx` | 직접 참조 없음 | 직접 연결 없음 | 출석 데이터 반영 통합 문서 |

## Supabase 테이블

| 테이블 | 연결 코드 | 역할 |
|---|---|---|
| `public.trainees` | `js/trainee_sync.js` | 교육대상자 명부 저장 및 동기화 |
| `public.course_status_private` | `js/completion_sync.js` | 관리자용 과정 이수 상세정보 저장 |
| `public.course_status_public` | `js/completion_sync.js` | 공개 가능한 과정 진행 요약 저장 및 실시간 동기화 |

테이블 정의와 접근 정책은 `supabase/setup.sql`에서 관리한다.

## 파일명 규칙

- 실제 파일과 폴더 이름에는 ASCII 영문, 숫자, 하이픈(`-`), 밑줄(`_`), 확장자용 마침표(`.`)만 사용한다.
- 한글 업무명과 설명은 이 문서와 화면 문구에 보존한다.
- 파일명을 변경할 때 이 문서와 모든 코드 참조를 함께 수정한다.
- CSV 텍스트 인코딩은 UTF-8을 사용한다.
- 새 파일을 추가한 뒤 `python3 tools/check-ascii-paths.py`로 경로를 확인한다.
