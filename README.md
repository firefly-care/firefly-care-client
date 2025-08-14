
2025 청년 일경험 프로젝트 3조 반딧불이 돌봄 서비스 웹 프론트엔드 개발 레포지토리입니다.
React + TypeScript + Zustand + TanStack Query 기반으로 제작되었습니다.

---

## 🏗️ 기술 스택

- **React + TypeScript**
- **Vite**
- **Zustand** – 클라이언트 상태 관리
- **TanStack Query (React Query)** – 서버 상태 관리 및 비동기 처리
- **styled-components** – 스타일링
- **Axios** – API 호출

---

## 📁 폴더 구조

```

src/
├── apis/             # API 호출 함수 (React Query 연동)
├── assets/           # 이미지, 폰트 등
├── components/       # 재사용 가능한 UI 컴포넌트
├── hooks/            # 커스텀 훅
├── pages/            # 페이지 단위 컴포넌트 (라우팅 기준)
├── routes/           # React Router 정의
├── stores/           # Zustand 상태 관리
├── styles/           # 전역 스타일, theme 설정
├── types/            # 공통 타입 정의
├── utils/            # 유틸리티 함수
├── App.tsx           # 라우팅, 스타일 설정 포함 메인 컴포넌트
└── main.tsx          # ReactDOM 렌더링 진입점

````

---

## 🔖 커밋 메시지 컨벤션

| 타입         | 설명         | 예시                           |
| ---------- | ---------- | ---------------------------- |
| `🎉 init`     | 초기 세팅      | `init: Vite + React + TS 설정` |
| `✨ feature`  | 새로운 기능     | `feat: 방명록 페이지 UI 추가`        |
| `🐛 fix`      | 버그 수정      | `fix: 모바일 뷰 깨짐 수정`           |
| `💄 style`    | 스타일 변경     | `style: tailwind 클래스 정리`     |
| `♻️ refactor` | 코드 리팩토링    | `refactor: 상태 관리 로직 정리`      |
| `📝 docs`     | 문서 수정      | `docs: README 업데이트`          |
| `✏️ chore`    | 설정 변경 등 기타 | `chore: eslint 설정 추가`        |

---

## 📦 설치 및 실행

```bash
# 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰 서버 실행
npm run preview
```

---

## 🙌 PR 방법

1. 이슈 생성 → `#번호` 자동 부여됨
2. `feature/#번호` 브랜치 생성
3. 작업 후 `develop` 브랜치로 PR 생성
4. `main` 머지 시 운영 서버 자동 배포

---
