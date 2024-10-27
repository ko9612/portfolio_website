import { StaticImageData } from "next/image";
import hobbytThumbnail from "/public/hobbyt_thumbnail.png";
import portfolioThumbnail from "/public/portfolio_thumbnail.png";
import fitChallengeThumbnail from "/public/Fit_Challenge_thumbnail.png";
import libbuddyThumbnail from "/public/Libbuddy_thumbnail.png";
import petCareThumbnail from "/public/petcare_thumbnail.png";
import ToucheerThumbnail from "/public/Toucheer_thumbnail.png";
import flawdetectorThumbnail from "/public/flawdetector_thumbnail.png";

import flawdetector_slide2 from "/public/flawdetector_slide2.png";
import flawdetector_slide3 from "/public/flawdetector_slide3.png";
import flawdetector_slide4 from "/public/flawdetector_slide4.png";
import flawdetector_slide5 from "/public/flawdetector_slide5.png";
import flawdetector_slide6 from "/public/flawdetector_slide6.png";

import portfolio_slide2 from "/public/portfolio_slide2.png";
import portfolio_slide3 from "/public/portfolio_slide3.png";
import portfolio_slide4 from "/public/portfolio_slide4.png";
import portfolio_slide5 from "/public/portfolio_slide5.png";
import portfolio_slide6 from "/public/portfolio_slide6.png";

import hobbyt_slide2 from "/public/hobbyt_slide2.png";
import hobbyt_slide3 from "/public/hobbyt_slide3.png";
import hobbyt_slide4 from "/public/hobbyt_slide4.png";
import hobbyt_slide5 from "/public/hobbyt_slide5.png";

import Fit_Challenge_slide2 from "/public/Fit_Challenge_slide2.png";
import Fit_Challenge_slide3 from "/public/Fit_Challenge_slide3.png";
import Fit_Challenge_slide4 from "/public/Fit_Challenge_slide4.png";
import Fit_Challenge_slide5 from "/public/Fit_Challenge_slide5.png";
import Fit_Challenge_slide6 from "/public/Fit_Challenge_slide6.png";

import Libbuddy_slide2 from "/public/Libbuddy_slide2.png";
import Libbuddy_slide3 from "/public/Libbuddy_slide3.png";
import Libbuddy_slide4 from "/public/Libbuddy_slide4.png";
import Libbuddy_slide5 from "/public/Libbuddy_slide5.png";

import Toucheer_slide2 from "/public/Toucheer_slide2.png";
import Toucheer_slide3 from "/public/Toucheer_slide3.png";
import Toucheer_slide4 from "/public/Toucheer_slide4.png";
import Toucheer_slide5 from "/public/Toucheer_slide5.png";

import petcare_slide1 from "/public/petcare_slide1.png";
import petcare_slide2 from "/public/petcare_slide2.png";
import petcare_slide3 from "/public/petcare_slide3.png";
import petcare_slide4 from "/public/petcare_slide4.png";
import petcare_slide5 from "/public/petcare_slide5.png";

interface urlType {
  github: string | null;
  deploy: string | null;
  notion: string | null;
  video: string | null;
  ppt: string | null;
  pdf: string | null;
}

interface contributionType {
  total: number;
  plan: number | null;
  design: number | null;
  develop: number | null;
  act: number | null;
}

export interface projectDataType {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  description: string;
  period: string;
  role: string;
  division: string;
  componsition: string;
  stack: string[];
  url: urlType;
  Contribution: contributionType;
  slideImg: StaticImageData[];
  pusrpose: string[];
  myWork: string[];
  result: string[];
  tag: string[];
}

export const projectData: projectDataType[] = [
  {
    id: 1,
    title: "Flaw Detector",
    thumbnail: flawdetectorThumbnail,
    description:
      "개발 중 발생할 수 있는 보안 취약점을 실시간으로 분석, 해결책을 제안하는 AI 기반 보안 솔루션",
    period: "2024.08.17 - 2024.10.17",
    role: "frontend 개발",
    division: "Team Project",
    componsition: "Front 5인",
    stack: [
      "Typescript",
      "Tailwind-css",
      "Next.js",
      "Zustand",
      "Storybook",
      "Jest",
      "Framer-motion",
      "Firebase",
      "Vercel",
      "Llama3",
      "Puppeteer",
      "Figma",
    ],
    url: {
      github: "https://github.com/hyeonji1125/sfacspace-06-project",
      deploy: "https://sfacspace-06-project.vercel.app",
      notion:
        "https://soapy-krill-b24.notion.site/260c2d1d3e2a4833b46096891fe8abeb?pvs=73",
      video: null,
      ppt: null,
      pdf: null,
    },
    Contribution: {
      total: 30,
      plan: null,
      design: null,
      develop: null,
      act: null,
    },
    slideImg: [
      flawdetectorThumbnail,
      flawdetector_slide2,
      flawdetector_slide3,
      flawdetector_slide4,
      flawdetector_slide5,
      flawdetector_slide6,
    ],
    pusrpose: [
      "코드의 보안 취약점 사전 식별",
      "복잡한 코드 구조에서도 보안 취약점 신속 탐지",
      "개발 과정에서 보안 강화",
      "안전하고 신뢰할 수 있는 소프트웨어 제공",
    ],
    myWork: [
      "취약점 분석 페이지 퍼블리싱 및 기능 구현",
      "리포지토리의 파일 검사 통계를 보여주는 컴포넌트 구현",
      "리포지토리 제목, 파일 리스트 컴포넌트 구현 - 폴더 별 파일리스트 불러오기(재귀 활용) / 파일 다중 선택 기능",
      "파일 뷰어 컴포넌트 구현 - 상태별 파일 뷰어(초기, 파일 선택 시, 파일 분석 중/후) / 파일의 코드 불러오기 및 코드 하이라이팅 작업 / 파일 분석 상태 Alert 창 (오류, 분석 중, 대기 중, 분석 완료)",
      "파일 분석 결과 컴포넌트 구현",
      "랜딩 페이지 구현 및 공통 UI 컴포넌트 제작",
    ],
    result: [
      "단순히 기능 구현에 그치는 것이 아니라, 실질적으로 보안 취약점을 개선하는 AI 솔루션을 개발함",
      "새로운 기술을 도입하거나, 로직을 재구성하는 등의 방법을 통해 문제를 해결하면서 문제 해결 능력을 향상",
    ],
    tag: ["All", "Development"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    thumbnail: portfolioThumbnail,
    description: "개인 포트폴리오 웹사이트(반응형 적용)",
    period: "2023.12.24 - 2023.12.31",
    role: "frontend 개발, UX/UI 디자인",
    division: "Solo Project",
    componsition: "1인",
    stack: [
      "Typescript",
      "Tailwind-css",
      "Next.js",
      "React",
      "Framer-motion",
      "Vercel",
      "Figma",
    ],
    url: {
      github: "https://github.com/ko9612/portfolio_website",
      deploy: "https://portfoliowebsitehana.vercel.app/",
      notion: null,
      video: null,
      ppt: null,
      pdf: null,
    },
    Contribution: {
      total: 100,
      plan: null,
      design: null,
      develop: null,
      act: null,
    },
    slideImg: [
      portfolio_slide2,
      portfolio_slide3,
      portfolio_slide4,
      portfolio_slide5,
      portfolio_slide6,
    ],
    pusrpose: ["개인 포트폴리오 사이트 개발"],
    myWork: [
      "웹 사이트 퍼블리싱 & 프론트엔드 개발",
      "Figma를 이용해 UX/UI 디자인(기존 디자인들 참고)",
    ],
    result: [
      "개발 환경 세팅부터 개발, 배포까지 스스로 진행해보면서 개발 프로세스 이해도 향상",
      "개인 포트폴리오 사이트 생성",
    ],
    tag: ["All", "Development"],
  },
  {
    id: 3,
    title: "Hobbyt",
    thumbnail: hobbytThumbnail,
    description:
      "수공예 취미를 가지고 있는 사람들을 위한 기록용 블로그 및 판매 서비스(반응형 적용)",
    period: "2023.01.01 - 2023.05.30",
    role: "frontend 개발, UX/UI 디자인, 서비스 기획",
    division: "Team Project",
    componsition: "Front 2인 | Backend 2인",
    stack: [
      "Typescript",
      "Tailwind-css",
      "Styled-component",
      "Next.js",
      "React",
      "Recoil",
      "Vercel",
      "Figma",
    ],
    url: {
      github: "https://github.com/ko9612/Hobbyt",
      deploy: "https://hobbyt.vercel.app/",
      notion:
        "https://soapy-krill-b24.notion.site/Project-Hobbyt-a980c6439070478293defc17a5de04db?pvs=4",
      video: null,
      ppt: null,
      pdf: null,
    },
    Contribution: {
      total: 35,
      plan: 70,
      design: 50,
      develop: 50,
      act: null,
    },
    slideImg: [
      hobbytThumbnail,
      hobbyt_slide2,
      hobbyt_slide3,
      hobbyt_slide4,
      hobbyt_slide5,
    ],
    pusrpose: [
      "가짜’ 수공예품 판매 방지",
      "같은 취미를 가진 유저들을 위한 커뮤니티 제공(SNS: X 벤치마킹-구 twitter)",
      "수공예 취미를 가지고 있는 유저의 취미 과정 기록 (블로그)",
      "취미활동을 통해 만든 작품 판매 및 구매 (E-commerce)",
    ],
    myWork: [
      "프로젝트 기획 및 UXUI 디자인, 프론트엔드 배포(Vercel)",
      "메인 페이지",
      "로그인 - 일반 로그인, 소셜 로그인(네이버, 카카오, 구글), 로그아웃",
      "비밀번호 찾기 / 비밀번호 재설정",
      "회원가입 - 이메일 인증을 통해 인증코드 입력 후 가입",
      "검색 - 블로그 & 판매 게시글 검색(최신순, 인기순) / 무한 스크롤 적용",
      "마이페이지 - 비밀번호 변경 / 회원탈퇴 / 주소 조회(Daum Post code API) / 내 정보 수정 및 저장",
      "판매 게시글 관련 CRUD- 제목, 썸네일, 본문(toast UI editor), 제품 정보, 기타 정보 작성 및 수정 / 판매 게시글 조회, 삭제 및 즐겨찾기",
      "주문 기능 및 주문 정보 상세 조회 - 단계별 주문 상태 조회(판매자의 경우, 조회+주문 상태 변경) / 입금처, 배송/환불 정보, 입금 정보, 주문 정보 조회(구매자의 경우, 조회+배송/환불 정보 수정)",
      "결제 - 카드 결제(아임포트 API) / 계좌이체 결제",
      "네비게이션 바, 헤더, Modal 구현",
    ],
    result: [
      "E-commerce 서비스 내에 적용되는 대부분의 기능들을 구현해보면서 기능 구현 역량 향상",
      "프로젝트의 규모, 목적, 요구사항에 따른 기술 셋 선정의 중요성 학습",
      "Tailwind CSS, Next.js, Recoil, TypeScript 등 새로운 스택 학습 & 숙련도 향상",
      "다양한 오픈 api 응용 방법 학습",
    ],
    tag: ["All", "Development"],
  },
  {
    id: 4,
    title: "Fit Challenge",
    thumbnail: fitChallengeThumbnail,
    description:
      "피트니스 운동에 동기 부여가 필요한 사람들을 위한 챌린지 및 커뮤니티 서비스",
    period: "2022.11.14 - 2022.12.07",
    role: "frontend 개발, UX/UI 디자인, 서비스 기획",
    division: "Team Project",
    componsition: "Front 4인 | Backend 3인",
    stack: [
      "Javascript",
      "Styled-component",
      "React",
      "Redux-toolkit",
      "AWS(S3,CloudFront)",
      "Figma",
    ],
    url: {
      github: "https://github.com/ko9612/Fit-Challenge-",
      deploy: "http://fitchallenge2.s3-website.ap-northeast-2.amazonaws.com/",
      notion:
        "https://codestates.notion.site/22-Challenges-070f5bc95629493cb53344f3291be50a",
      video: "https://www.youtube.com/watch?v=JjaTPnuEXX0",
      ppt: null,
      pdf: null,
    }, //
    Contribution: {
      total: 25,
      plan: 50,
      design: 50,
      develop: 30,
      act: null,
    },
    slideImg: [
      Fit_Challenge_slide2,
      Fit_Challenge_slide3,
      Fit_Challenge_slide4,
      Fit_Challenge_slide5,
      Fit_Challenge_slide6,
    ],
    pusrpose: [
      "피트니스 운동을 하는 유저 간 운동 정보 공유 (SNS 형태의 커뮤니티 서비스)",
      "상세한 운동 내역 기록 (개인 캘린더)",
      "동기 부여를 도와줄 실시간 사용자 랭킹 서비스 도입",
      "더욱 강한 동기 부여를 위해 사용자 간 경쟁 서비스 도입 (1:1 챌린지)",
    ],
    myWork: [
      "프로젝트 기획 및 UXUI 디자인",
      "메인 페이지 구현 - 최신 post 업로드 유저 리스트 & 메인페이지 태그 검색 기능 & 이미지 캐러셀(react-auto-image-slider) & 무한 스크롤 (react-intersection-observer)",
      "Dailypost CRUD 및 유효성 검사 구현 - 이미지 미리보기(File Reader API) 및 CRUD & 본문, 태그 CRUD",
      "댓글 기능 구현(CRUD+더보기)",
      "Q&A 페이지 - 페이지네이션 구현",
      "Modal 구현",
      "로딩 화면 구현",
      "AWS S3 + CloudFront를 활용한 프론트엔드 배포",
    ],
    result: [
      "7명과 함께 팀 프로젝트를 진행함으로써, 협업 능력 향상",
      "Git, Notion 등 협업 툴 숙련도 향상",
      "React, CSS, JavaScript, Redux 등 개발에 적용한 기술의 숙련도 향상",
      "원활한 협업을 위한 일관성 있는 코드 작성 역량 향상(Eslint, Prettier 활용)",
    ],
    tag: ["All", "Development"],
  },
  {
    id: 5,
    title: "라이브버디",
    thumbnail: libbuddyThumbnail,
    description:
      "AI 기반 객체인식과 IoT 센서 및 데이터 시각화를 활용한 통합 좌석 관리 시스템",
    period: "2022.11.14 - 2022.12.07",
    role: "데이터 크롤링/분석, UX/UI 디자인, 서비스 기획",
    division: "Team Project",
    componsition:
      "Deep Learning 1인 | Front 1인 | Backend 1인 | Data, 기획, UX/UI Design 1인",
    stack: ["Python", "Pandas", "Numpy", "Matplotlib", "AdobeXD"],
    url: {
      github: null,
      deploy: null,
      notion: null,
      video: null,
      ppt: "https://drive.google.com/file/d/1hYLnV6MKvvkg2JAmlI8laXZ9IlqDA7Ki/view?usp=sharing",
      pdf: "https://drive.google.com/file/d/1XMYBymNRKbs2QXs1YLtUhXIXVT8xIpqw/view?usp=sharing",
    },
    Contribution: {
      total: 30,
      plan: 70,
      design: 100,
      develop: null,
      act: 100,
    },
    slideImg: [
      libbuddyThumbnail,
      Libbuddy_slide2,
      Libbuddy_slide3,
      Libbuddy_slide4,
      Libbuddy_slide5,
    ],
    pusrpose: [
      "공용공간의 골칫거리 ‘사석화’ 문제 해결",
      "객체 인식 & 거리 센서 & 통계 시스템을 적용하여 이용 좌석 실시간 확인 (좌석 혼잡도, 사석화 의심 비율, 시간대별 이용량)",
      "업무 자동화를 통한 관리자의 관리 효율 향상(앱 애플리케이션으로 편리한 관리)",
      "좌석 간 거리 두기 여부 확인 (전염병 예방)",
      "도서관을 비롯한 CCTV가 있는 모든 공용공간에 적용(예약시스템이 갖춰지지 않은 공간 포함)",
    ],
    myWork: [
      "대학 및 공공 도서관 열람실 약 20여곳의 시간대별 좌석 점유율 통계를 구하기 위한 데이터 수집 - 데이터 크롤링(requests + BeautifulSoup + openpyxl)",
      "문제 원인 분석을 위한 데이터 분석/시각화(Pandas + Matplotlib)",
      "프로젝트 일정 및 개발 프로세스 관리",
      "프로젝트 구성 및 아이디어 기획 - 시장 / 사용자 리서치 (매체 및 설문 조사) 수행 & 요구사항 명세서, 간트차트, UseCase Diagram 등 설계",
      "Adobe XD를 이용한 앱 UXUI 디자인",
      "보고서 및 발표자료 작성",
      "저작권 등록 / SW 자산 등록 / 특허 출원 명세서 작성",
    ],
    result: [
      "2021.08.24 한국저작권위원회 SW R&D 연구성과물 등록 완료(등록번호: C2021-033851)",
      "데이터 수집/분석 및 관리 역량 향상",
      "프로젝트의 A-Z까지 관여함으로써 종합적(다각적) 프로젝트 이해 역량 향상",
    ],
    tag: ["All", "Development"],
  },
  {
    id: 6,
    title: "Tocheer",
    thumbnail: ToucheerThumbnail,
    description: "디지털 취약계층을 고려한 키오스크 UXUI 개선 프로젝트",
    period: "2020.09 - 2020.11",
    role: "프로젝트 기획, UX/UI 기획",
    division: "Team Project",
    componsition: "2인",
    stack: ["PowerPoint"],
    url: {
      github: null,
      deploy: null,
      notion: null,
      video: null,
      ppt: "https://drive.google.com/file/d/1oi0iC1p_MloYBP5PGnfsuQP-lyEbn7Tp/view?usp=sharing",
      pdf: null,
    }, //
    Contribution: {
      total: 60,
      plan: null,
      design: null,
      develop: null,
      act: null,
    },
    slideImg: [
      ToucheerThumbnail,
      Toucheer_slide2,
      Toucheer_slide3,
      Toucheer_slide4,
      Toucheer_slide5,
    ],
    pusrpose: [
      "노인층 등 디지털 취약 계층의 정보격차 문제에 대한 인식 강화",
      "키오스크 사용시 디지털 취약계층이 겪는 어려움 해소 - 구체적인 시나리오 설정을 위해 대형 병원 내의 키오스크를 대상으로 진행",
    ],
    myWork: [
      "시드 아이디어 도출 (이슈 탐색, 현황 분석, Pain Point 도출, 프로젝트 컨셉 및 타켓선정)",
      "이해 관계자 & 사용자 여정 지도 제작",
      "USP(혁신 포인트) 도출 및 프로토타입 작성",
      "타이틀 & 로고 디자인",
      "Persona & 시나리오 빌딩(스토리보드)",
      "User Flow 설계",
      "Lean Canvas Model 작성",
      "팀장으로서, 프로젝트 자료 제작 및 발표",
    ],
    result: [
      "프로젝트 기획 시, 시사점과 가능성 도출 & 설득력있는 솔루션 제시 가능",
      "사회의 중요 이슈와 동향을 파악 후, 기획 아이디어로 발전시킬 수 있는 역량 함양",
      "미래를 예측하고, 전략을 수립하는 과정에서 전략적 사고 향상",
      "프로토타입 & 스토리보드 설계 역량 향상",
      "린 캔버스 모델을 활용한 비즈니스 모델 및 수익 모형 구축 역량 향상",
    ],
    tag: ["All", "UX/UI"],
  },
  {
    id: 7,
    title: "너와 함'개'할 '고양'",
    thumbnail: petCareThumbnail,
    description:
      "반려동물과 함께 하는 가정에 안전하고 편리한 펫케어 서비스를 제공하는 앱 애플리케이션 기획",
    period: "2019.9 - 2019.11",
    role: "프로젝트 기획, UX/UI 기획, UXUI 디자인",
    division: "Team Project",
    componsition: "3인",
    stack: ["PowerPoint", "Figma"],
    url: {
      github: null,
      deploy: null,
      notion: null,
      video: null,
      ppt: "https://drive.google.com/file/d/14BmtH-8LOROUSBSZ-OGkU0obQxKrADZD/view?usp=sharing",
      pdf: null,
    },
    Contribution: {
      total: 50,
      plan: null,
      design: null,
      develop: null,
      act: null,
    },
    slideImg: [
      petcare_slide1,
      petcare_slide2,
      petcare_slide3,
      petcare_slide4,
      petcare_slide5,
    ],
    pusrpose: [
      "기존 반려동물 케어 서비스의 단점 개선 & 반려인에게 안전하고 편리한 펫케어 서비스 제공",
      "다양한 케어 서비스를 통합하여 편의성 향상",
      "실시간 뷰잉 + 알림 서비스와 같은 편리하고 디테일한 발전 방향 제시",
    ],
    myWork: [
      "시장 조사 - 경쟁 서비스 조사 및 벤치마킹 포인트 도출",
      "사용자 인터뷰를 통한 사용자 조사 - 사용자 가치 및 태도, 이용 행태 분석 - 1차 - 비대면 설문조사 & 2차 - 대면 인터뷰 + Workaround 자료 수집 & 자료를 토대로 참여자 및 주요 이슈별 분석 수행",
      "Persona & Journey map 빌딩 - Pain Point 도출",
      "효과적인 아이데이션을 위해 주제별 브레인스토밍 작업 수행",
      "USP 도출 및 컨셉 빌딩",
      "시나리오 빌딩 - 플롯 작성 및 유저 시나리오 제작",
      "IA(Information Architecture) & 와이어프레임 설계",
      "UX/UI 디자인 (프로토타입 설계)",
      "팀장으로서, 프로젝트 자료 제작 및 발표",
    ],
    result: [
      "체계적인 서비스 기획 및 UX 설계 역량 향상",
      "실무에서 활용되고 있는 다양한 시장 및 사용자 조사 방법론 응용 가능 (벤치마킹, 로드맵, Survey 등)",
      "Persona & Journey map을 중심으로 인문학적 데이터 분석 역량 향상",
      "시나리오 & 컨셉 빌딩 역량 향상",
      "IA 및 와이어프레임 설계 역량 향상",
    ],
    tag: ["All", "UX/UI"],
  },
];
