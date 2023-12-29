import developmentIcon from "/public/development-frontend.svg";
import cooperatingIcon from "/public/cooperation.svg";
import codeReviewIcon from "/public/code-review.svg";
import sharingIcon from "/public/sharing.svg";

export interface AboutArrType {
  icon: string;
  description: string;
  alt: string;
}

export const AboutArr: AboutArrType[] = [
  {
    icon: developmentIcon,
    description:
      "컴퓨터공학&디자인 전공으로 학습한 기술적 이해와 디자인감각을 바탕으로, 사용자 친화적인 웹 애플리케이션 개발 능력 보유",
    alt: "developmentIcon",
  },
  {
    icon: sharingIcon,
    description:
      "지속적으로 개발 커뮤니티 및 블로그를 통해 웹 기술 동향 주시 & 경험 공유를 통한 성장 지향",
    alt: "sharingIcon",
  },
  {
    icon: codeReviewIcon,
    description:
      "부트캠프 교육을 통해 웹 프론트엔드 개발 역량 함양 & 코드 리뷰 경험",
    alt: "codeReviewIcon",
  },
  {
    icon: cooperatingIcon,
    description:
      "개발, 기획, 디자인 등 다양한 역할로 프로젝트에 참여한 경험을 통해 종합적인 프로젝트 이해 및 원활한 협업에 기여 가능",
    alt: "cooperatingIcon",
  },
];
