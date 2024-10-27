export interface certificationDataType {
  title: string;
  subTitle: string;
  period: string;
}

const certificationData: certificationDataType[] = [
  {
    title: "SQLD(SQL개발자)",
    subTitle: "한국데이터산업진흥원",
    period: "2024.04.05",
  },
  {
    title: "ADsP(데이터분석준전문가)",
    subTitle: "한국데이터산업진흥원",
    period: "2024.03.22",
  }
];

const AboutCertification = () => {
  return (
    <ul>
      {certificationData.map((data) => (
        <li key={data.title} className="mb-5">
          <p className="text-lg font-semibold py-1">{data.title}</p>
          <p className="text-sm">{data.subTitle}</p>
          <p className="text-sm">{data.period}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutCertification;
