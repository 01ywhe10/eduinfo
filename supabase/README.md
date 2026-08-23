# Supabase 이수현황 동기화 설정

## 1. 데이터베이스 생성

Supabase Dashboard의 SQL Editor에서 `setup.sql` 전체를 실행합니다.

- `course_status_public`: 로그인하지 않은 화면에 표시할 과정별 요약
- `course_status_private`: 사번이 포함된 관리자 전용 차수별 이수 명단

## 2. 관리자 계정 생성

Dashboard의 Authentication > Users > Add user에서 관리자 이메일과 비밀번호를 생성합니다.
공개 회원가입은 사용하지 않습니다.

## 3. 웹 클라이언트 연결

Dashboard의 Connect 화면에 표시되는 Project URL과 Publishable key를
`js/supabase_config.js`에 입력합니다. Secret key와 service_role key는 사용하지 않습니다.

```js
window.EDUINFO_SUPABASE_CONFIG = {
  url: 'https://YOUR_PROJECT.supabase.co',
  publishableKey: 'sb_publishable_YOUR_KEY'
};
```

## 4. 기존 데이터 최초 업로드

기존 이수현황이 저장된 브라우저에서 `Admin.html`을 엽니다.
2단계에서 만든 관리자 이메일과 비밀번호로 로그인합니다.
원격 테이블이 비어 있으면 현재 `localStorage` 데이터가 최초 1회 자동 업로드됩니다.

이후 관리자 화면에서 저장할 때마다 Supabase와 로컬 캐시에 함께 저장됩니다.
다른 화면은 공개 요약 변경을 구독하고 변경된 경우 자동 갱신합니다.