import { projectDataType } from "@/data/ProjectData";

const ProjectDetailDescription = ({ data }: { data: projectDataType }) => {
  return (
    <section className="flex flex-col gap-4 border-t-2 border-slate-600 py-5 text-slate-300">
      <div>
        <span className="font-semibold text-lg">프로젝트 목표</span>
        <ul className="list-disc pl-6 py-2">
          {data.pusrpose.map((el, i) => (
            <li className="py-1" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold text-lg">담당 업무</span>
        <ul className="list-disc pl-6 py-2">
          {data.myWork.map((el, i) => (
            <li className="py-1" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold text-lg">결과/역량</span>
        <ul className="list-disc pl-6 py-2">
          {data.result.map((el, i) => (
            <li className="py-1" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailDescription;
