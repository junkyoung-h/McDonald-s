# 🍔 McDonald's Clone PWA

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen?logo=github)](https://USERNAME.github.io/REPO_NAME)
[![PWA Supported](https://img.shields.io/badge/PWA-Installable-blue?logo=googlechrome)](https://web.dev/progressive-web-apps/)

맥도날드 공식 앱의 주요 기능을 웹 기반으로 구현한 **프론트엔드 리뉴얼 프로젝트**입니다.  
React나 프레임워크 없이 HTML, CSS, JavaScript만으로 제작했으며,  
PWA(Progressive Web App)로 설치 및 오프라인 사용이 가능합니다.

## 📌 프로젝트 소개
- **목표**: 맥도날드 앱과 맥딜리버리 앱의 UI/UX를 통합한 웹앱 구현
- **기술 스택**: HTML5, CSS3, JavaScript(ES6), Service Worker, Web Manifest
- **배포**: [GitHub Pages 링크](https://junkyoung-h.github.io/McDonald-s/)  

## ✨ 주요 기능
- **메인 페이지**: 프로모션 배너, 메뉴 바로가기, 오늘의 추천
- **쿠폰 페이지**: 다운로드 및 사용 가능
- **주문 페이지**: 메뉴 선택, 장바구니 담기
- **반응형 디자인** *(iPhone 15 Pro 기준 제작, 추후 확장 가능)*
- **PWA 지원**: 앱 설치 및 오프라인 모드 가능

## 🛠 PWA 설치 방법
### 데스크톱(Chrome/Edge)
1. [배포 링크](https://junkyoung-h.github.io/McDonald-s/) 접속
2. 주소창 우측 **설치(Install)** 아이콘 클릭
3. 독립 실행형 앱으로 이용 가능

### 안드로이드(Chrome)
1. 사이트 접속 후 **홈 화면에 추가** 또는 자동 설치 팝업 클릭
2. 홈 화면 아이콘으로 실행 가능

### iOS(Safari)
1. 공유 버튼 → **홈 화면에 추가**
2. 독립 앱 형태로 실행

## 📂 폴더 구조
📦 프로젝트 루트
├─ css/ # 스타일시트
├─ img/ # 이미지 리소스
├─ js/ # JavaScript 파일
├─ index.html # 메인 페이지
├─ coupon.html # 쿠폰 페이지
├─ order.html # 주문 페이지
├─ manifest.json # PWA 매니페스트
├─ service_worker.js # PWA 서비스 워커


## 🚀 실행 방법
1. 레포지토리 클론  
   ```bash
   git clone (https://junkyoung-h.github.io/McDonald-s/)
로컬 실행
로컬 서버 사용(예: VSCode Live Server)
GitHub Pages 배포
main 브랜치 → Settings → Pages에서 배포 경로 설정

🔧 향후 개선 예정
반응형 레이아웃 확장 (태블릿·데스크톱 지원)
성능 최적화 및 Lighthouse 점수 개선
오프라인 캐시 범위 확대 (쿠폰/주문 페이지 포함)
접근성(Accessibility) 개선 (대체 텍스트, 명도 대비)
주문 프로세스 UX 향상 및 애니메이션 추가
이미지 WebP 변환 적용으로 로딩 속도 향상

📜 라이선스

본 프로젝트는 학습 목적으로 제작되었으며, 상업적 사용을 금지합니다.
