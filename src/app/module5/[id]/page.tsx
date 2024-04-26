import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col justify-center items-start px-8 py-2.5 w-full text-3xl text-amber-500 whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8316c41f59dc9e87c109e439326e81d098a6ea696d196908996710da1a85419?apiKey=2a09c3227636445ca6cca45824f0323c&"
            className="shrink-0 self-start aspect-[0.94] w-[35px]"
          />
          <div className="justify-center py-2">uantaide</div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1372px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c&"
                  className="shrink-0 my-auto w-10 aspect-square"
                />
                <div className="flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit">
                  <div className="text-xs">Problem Statement</div>
                  <div className="mt-1 text-xl font-bold">
                    What is a problem statement?{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                  A problem statement summarizes “the context for the study” and
                  the main problem the study seeks to address. Problem
                  statements are not questions and are statements that point out
                  an issue. With quantitive research, we start with a problem
                  and do not conduct exploratory research where we look for
                  interesting trends.
                </div>
                <div className="mt-10 max-md:max-w-full">
                  Typical research design process:{" "}
                </div>
                <div className="shrink-0 mt-4 h-80 rounded-lg bg-neutral-100 max-md:max-w-full" />
                <div className="justify-center self-end px-10 py-2.5 mt-7 font-bold text-white bg-amber-500 rounded-md max-md:px-5">
                  Next{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pt-10 pb-5 mx-auto w-full bg-white shadow-sm max-md:mt-10">
              <div className="flex gap-2 self-start">
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b77aa4f5b63ed41f012110e58b931feb77fcccb226b36cecf66ef6dc57045f0b?apiKey=2a09c3227636445ca6cca45824f0323c&"
                    className="w-10 aspect-square"
                  />
                </div>
                <div className="justify-center my-auto text-base text-black">
                  Module 1
                </div>
              </div>
              <div className="justify-center self-start mt-4 text-xs text-black">
                Your Progress
              </div>
              <div className="flex flex-wrap gap-2.5 content-center p-3 mt-4 bg-white rounded-md border-0 border-green-500 border-solid">
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ba73be-60c3-4fb1-ab0d-b1ee70f8138a?apiKey=2a09c3227636445ca6cca45824f0323c&"
                    className="rounded-full aspect-square bg-green-500 bg-opacity-20 h-[29px] w-[29px]"
                  />
                </div>
                <div className="flex-1 my-auto text-base text-black">
                  Choose your Interest{" "}
                </div>
              </div>
              <div className="flex flex-col justify-center p-3 mt-4 w-full text-base font-bold bg-white rounded-md border-0 border-solid border-neutral-400">
                <div className="flex gap-2.5 justify-center">
                  <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
                    <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                      2
                    </div>
                  </div>
                  <div className="flex-1 my-auto text-black">
                    What goes into problem statement?{" "}
                  </div>
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
        </div>
      </div>
    </div>
  );
}
