const ModuleCard = () => {
  return (
    <div className="flex flex-col px-9 py-11 mt-36 ml-32 max-w-full text-base text-black bg-white rounded-2xl border border-gray-300 shadow-lg w-[394px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
      <div className="text-xs">Module 1</div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&"
        className="mt-5 w-full aspect-[1.45]"
        alt="Module illustration"
      />
      <div className="mt-6 text-xl font-bold">Problem Statement</div>
      <div className="mt-3.5">
        A problem statement summarizes “the context for the study” and the main
        problem the study seeks to address
      </div>
          <button  
              className="justify-center self-center px-10 py-2.5 mt-8 font-bold text-white whitespace-nowrap bg-amber-500 rounded-md max-md:px-5 cursor-pointer">
        Start
      </button>
    </div>
  );
};

export default ModuleCard;