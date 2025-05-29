interface EducationDataType {
  title: string;
  subTitle: string;
  period: string;
  content: string[];
}

const EducationData: EducationDataType[] = [
  {
    title: "유데미 X 웅진씽크빅 X 스나이퍼팩토리",
    subTitle: "프로젝트 캠프 : Next.js 과정 2기 ",
    period: "2024.07 ~ 2024.09",
    content: [
      "고용노동부 주관 청년 일경험 과정",
      "Next.js 교육 이수 및 기업 협업 프로젝트 진행",
    ],
  },
  {
    title: "코드스테이츠(CodeSates)",
    subTitle: "소프트웨어 엔지니어링 부트캠프(프론트엔드) - 40기",
    period: "2022.06 ~ 2022.12 (840H)",
    content: [
      "Javascript, HTML/CSS, React 학습",
      "Figma, Redux, 네트워크 및 인증/보안 기본지식 학습",
      "Webpack, GraphQL, TDD, 최적화 기법, 배포를 위한 AWS, CI/CD의 기본지식 학습",
      "프로그램 기간 매일 과제 수행 및 페어 프로그래밍, 코드 리뷰 경험 + 알고리즘 문제 풀이",
      "협업 프로젝트 2회 진행(Clone 1회, Main 1회)",
    ],
  },
  {
    title: "인하대학교",
    subTitle: "컴퓨터공학 전공",
    period: "2016.02 ~ 2022.8",
    content: [
      "디자인융합학 부전공",
      "C++을 기본으로 객체지향프로그래밍, 자료구조, OS, 데이터베이스, 선형대수 등 기본적인 컴퓨터 공학 이론 학습",
    ],
  },
];

const AboutEducation = () => {
  return (
    <ul>
      {EducationData.map((data) => (
        <li key={data.title} className="mb-5 text-slate-300">
          <p className="text-lg font-semibold py-1 text-slate-100">{data.title}</p>
          <p className="text-sm">{data.subTitle}</p>
          <p className="text-sm">{data.period}</p>
          <ul className="list-disc text-[11px] sm:text-sm pl-4 py-2">
            {data.content.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AboutEducation;
