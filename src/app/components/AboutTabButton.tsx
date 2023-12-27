interface AboutTabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const AboutTabButton = ({
  active,
  selectTab,
  children,
}: AboutTabButtonProps) => {
  const buttonClasses = active
    ? "text-white border-b-4 border-purple-500"
    : "text-slate-400";
  return (
    <button onClick={selectTab}>
      <p
        className={`mx-4 font-semibold text-lg md:text-xl hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default AboutTabButton;
