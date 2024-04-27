
const SideBar = ({ StageNumber }) => {
    return (
        <div className="ml-2 max-md:ml-10 max-md:w-full">
        <div className="flex flex-col grow px-5 pt-20 pb-5 mx-auto w-full shadow-sm max-md:mt-10">
          <div className="flex justify-center items-center mt-1.5 w-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf92d66a-7139-4643-bdc0-740ff7572649?apiKey=2a09c3227636445ca6cca45824f0323c&"
              className="w-full h-10 rounded-full aspect-square bg-neutral-100"
            />
          </div>
          <div className="justify-center self-start mt-8 text-xs text-black">
            Your Progress: Currently at stage: {StageNumber}{" "}
          </div>
          <div className="flex flex-col justify-center p-3 mt-4 w-full text-base font-bold bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className='flex gap-2.5 justify-center'>
              <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
                <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                  1
                </div>
              </div>
              <div className="flex-1 my-auto text-black">
                Choose your Interest{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 p-3 mt-4 text-base bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
              <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                2
              </div>
            </div>
            <div className="my-auto text-black">
              What goes into problem statement?{" "}
            </div>
          </div>
          <div className="flex gap-2.5 p-3 mt-4 text-base bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className="flex flex-col justify-center self-start whitespace-nowrap text-neutral-700">
              <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                3
              </div>
            </div>
            <div className="leading-6 text-black">
              Conducting “problem-based” deductive research{" "}
            </div>
          </div>
          <div className="flex gap-2.5 p-3 mt-4 text-base bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
              <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                4
              </div>
            </div>
            <div className="my-auto text-black">The Three Criteria</div>
          </div>
          <div className="flex gap-2.5 p-3 mt-4 text-base bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
              <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                5
              </div>
            </div>
            <div className="my-auto text-black leading-[144%]">
              Examples of problem statements{" "}
            </div>
          </div>
          <div className="flex gap-2.5 p-3 mt-4 text-base bg-white rounded-md border-0 border-solid border-neutral-400">
            <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
              <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                6
              </div>
            </div>
            <div className="my-auto text-black">Let’s get hands on! </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar;
