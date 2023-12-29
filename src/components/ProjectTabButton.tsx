interface ProjectTabButtonTypes {
  name: string;
  onClick: any;
  isSelected: boolean;
}

const ProjectTabButton = ({
  name,
  onClick,
  isSelected,
}: ProjectTabButtonTypes) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-slate-400 border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-3 py-1 sm:px-6 sm:py-2 ${buttonStyles} transition-all duration-300
       focus:border-purple-500`}
    >
      {name}
    </button>
  );
};

export default ProjectTabButton;
