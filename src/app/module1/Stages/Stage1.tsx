export default function Stage1() {
  return (
    <div className="flex flex-col bg-white">
      
      <div className="self-center w-full max-w-[1372px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-9 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between self-start text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c&"
                  className="shrink-0 my-auto w-10 aspect-square"
                />
                <div className="flex flex-col justify-end px-5">
                  <div className="text-xs">Problem Statement</div>
                  <div className="mt-1 text-xl font-bold">
                    Choose your Interest
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-16 mt-11 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2 max-md:flex-wrap">
                  <div className="flex flex-col flex-wrap grow shrink-0 justify-center content-end basis-0 w-fit max-md:max-w-full">
                    <div className="flex flex-col justify-center max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col justify-center max-md:max-w-full">
                          <div className="text-xl text-black max-md:max-w-full">
                            What are your interests?{" "}
                          </div>
                          <div className="mt-2 text-base text-neutral-400 max-md:max-w-full">
                            Quantaide learns about your domain when you share
                            your interests. Add as many related documents you
                            have to help Quantaide tailor this experience for
                            you.{" "}
                          </div>
                        </div>
                        <div className="flex flex-col mt-10 max-md:max-w-full">
                          <div className="flex gap-1 self-start">
                            <div className="flex justify-center items-center p-1">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e29c3d7422a2d35231dcd1f0f8b39abcae4c62edf6a2ec7ec112706f7bf50e?apiKey=2a09c3227636445ca6cca45824f0323c&"
                                className="aspect-[1.04] fill-amber-500 w-[25px]"
                              />
                            </div>
                            <div className="flex gap-2 text-base text-amber-500">
                              <div className="justify-center px-2 py-1 whitespace-nowrap bg-white rounded border border-amber-500 border-solid">
                                Music
                              </div>
                              <div className="justify-center px-2 py-1 bg-white rounded border border-amber-500 border-solid">
                                Mental Health
                              </div>
                            </div>
                          </div>
                          <div className="justify-center items-start px-3.5 py-3.5 mt-4 text-base bg-white rounded-lg border border-solid border-zinc-300 text-stone-300 max-md:pr-5 max-md:max-w-full">
                            Type your interest here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea439422e8e5f5968afdc3d38dc703980a26ef5e7fd8df5b16115fdb9b57632?apiKey=2a09c3227636445ca6cca45824f0323c&"
                    className="shrink-0 self-end mt-40 aspect-square w-[43px] max-md:mt-10"
                  />
                </div>
                <div className="justify-center self-end px-10 py-2.5 mt-12 text-base font-bold text-white bg-amber-500 rounded-md max-md:px-5 max-md:mt-10">
                  Next{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
