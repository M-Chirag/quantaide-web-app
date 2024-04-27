const ModuleCard = ({ moduleNumber, title, summary, imageSrc }) => {
  return (
    <div className="h-full flex flex-col px-9 py-11 mt-36 ml-32 max-w-full text-base text-black bg-white rounded-2xl border border-gray-300 shadow-lg w-[394px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
      <div className="text-xs">Module {moduleNumber}</div>
      <img
        loading="lazy"
        src={imageSrc}
        className="mt-5 w-full aspect-[1.45]"
        alt="Module illustration"
      />
      <div className="mt-6 text-xl font-bold">{title}</div>
      <div className="mt-3.5">{summary}</div>
      <button  
        className="justify-center self-center px-10 py-2.5 mt-8 font-bold text-white whitespace-nowrap bg-amber-500 rounded-md max-md:px-5 cursor-pointer">
        Start
      </button>
    </div>
  );
};

export default ModuleCard;
