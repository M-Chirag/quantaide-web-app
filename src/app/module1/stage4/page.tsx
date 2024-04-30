"use client";

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../Sidebar'; 
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
import { Img } from '@builder.io/react';

export default function Stage3() {
  return (
    <div className="w-full max-w-[1301px] ml-14 mr-14">
      <div className="flex flex-row max-md:flex-col max-md:gap-50">
    <div className="flex flex-col bg-white">
      <div className="self-center w-full max-w-[1372px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 self-start">
                <Link href="/module1/stage3">
                      <button>
                      <img
                      loading="lazy"
                      src="../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg"
                      className="shrink-0 my-auto w-10 aspect-square"
                          />
                        </button>
                      </Link>
                <div className="flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit">
                  <div className="text-xs">Problem Statement</div>
                  <div className="mt-1 text-xl font-bold">
                    Three criteria to keep in mind for a research problem:
                  </div>
                </div>
              </div>
              
                                  
                                  <div className="px-5 mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-4 mx-auto w-full text-base bg-white rounded border border-gray-200 border-solid max-md:mt-3.5">
              <div className="flex gap-4 items-start pb-7">
                <div className="flex flex-col justify-center whitespace-nowrap text-neutral-700">
                  <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                    1
                  </div>
                </div>
                <div className="font-semibold text-black">
                  What are we going to learn as the result of the proposed
                  project that we do not know now?
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-4 mx-auto w-full text-base bg-white rounded border border-gray-200 border-solid max-md:mt-3.5">
              <div className="flex gap-4">
                <div className="flex flex-col justify-center self-start whitespace-nowrap text-neutral-700">
                  <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                    2
                  </div>
                </div>
                <div className="flex-1 font-semibold text-black">
                  Why is it worth knowing?{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-4 mx-auto w-full text-base bg-white rounded border border-gray-200 border-solid max-md:mt-3.5">
              <div className="flex gap-4">
                <div className="flex flex-col justify-center self-start whitespace-nowrap text-neutral-700">
                  <div className="justify-center items-center px-2.5 rounded-full bg-neutral-100 h-[29px] w-[29px]">
                    3
                  </div>
                </div>
                <div className="font-semibold text-black">
                  How will we know that the conclusions are valid?{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 p-4 mt-5 bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap">
        <div className="flex justify-center items-center px-2 py-2 bg-amber-500 rounded-md h-[39px] w-[39px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a888f22c42070b28de158a99270ccc235f2f5541798d58fd12c9c75cea381f9e?apiKey=2a09c3227636445ca6cca45824f0323c&"
            className="border-0 border-white border-solid aspect-[0.92] fill-white stroke-[0.2px] stroke-white w-[23px]"
          />
        </div>
        <div className="my-auto text-base text-black max-md:max-w-full">
          {" "}
          You should know the answers to these as you formulate a problem
          statement{" "}
        </div>
      </div>
                                  

                                  
                                  
                <div className="flex justify-end">
                    <Link href={"../module1/stage5"} passHref>
                      <button
                        
                          className="justify-center self-end px-10 py-2.5 mt-12 text-base font-bold text-white bg-amber-500 rounded-md max-md:px-5 max-md:mt-10">
                        Next</button>
                        
                      </Link>
                    </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sidebar moduleNumber={"1"}>
          <SidebarItem number="1" text="Choose your Interest" active={false} stageNumber={4} href="/module1/stage1" />
          <SidebarItem number="2" text="What goes into problem statement?" active={false} stageNumber={4} href="/module1/stage2" />
  <SidebarItem number="3" text="Conducting ‘problem-based’ deductive research" active={false} stageNumber = {4} href="/module1/stage3" />
  <SidebarItem number="4" text="The Three Criteria" active={true} stageNumber = {4} href="/module1/stage4" />
  <SidebarItem number="5" text="Examples of problem statements" active={false} stageNumber = {4} href="/module1/stage5" />
  <SidebarItem number="6" text="Let’s get hands on!" active={false} stageNumber = {4} href="/module1/stage6" />
</Sidebar>
  </div>
    </div>
  );
}
