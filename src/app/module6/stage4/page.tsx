"use client";

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../../module1/Sidebar'; 
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
import { Img } from '@builder.io/react';

export default function Stage2() {
  return (
    <div className="w-full max-w-[1301px] ml-14 mr-14">
      <div className="flex flex-row max-md:flex-col max-md:gap-50">
    <div className="flex flex-col bg-white">
      <div className="self-center w-full max-w-[1372px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 self-start">
                <Link href="/module6/stage3">
                      <button>
                      <img
                      loading="lazy"
                      src="../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg"
                      className="shrink-0 my-auto w-10 aspect-square"
                          />
                        </button>
                      </Link>
                <div className="flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit">
                  <div className="text-xs">Question Formulation</div>
                  <div className="mt-1 text-xl font-bold">
                    Let's create a survey
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center font-semibold px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                  When building a survey, it might be a good idea to decide what kind of demographic data you want to collect. In the next section you can start building your survey that will help you gather data to test your hypothesis. 
                                      </div>
                                      
            <div className="flex flex-col justify-center p-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="justify-center leading-7 text-black max-md:max-w-full">
          You are curious about how much a person listens to music per day.
          Create a survey question for this using interval data.
        </div>
        <div className="justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] text-neutral-400 max-md:max-w-full">
          Write your question
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 mt-6 w-full text-base bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full">
        <div className="leading-5 text-black max-md:max-w-full">
          We are curious what platform a user most frequently uses to listen to
          music. Create a survey question to collect categorical data. Then
          create four options for the user to choose from. 
        </div>
        <div className="justify-center p-4 mt-3 text-base leading-7 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:max-w-full">
          Write your question
        </div>
        <div className="flex flex-col justify-center items-start p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[133%] max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col w-[88px]">
            <div className="flex gap-1.5">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 1</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 2</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 3</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 4</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full">
        <div className="leading-7 text-black max-md:max-w-full">
          We are curious if users play instruments on a regular basis. Create a
          question to ask the user this dichotomous question. Then write two
          options for the user to choose from. 
        </div>
        <div className="justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] max-md:max-w-full">
          Write your question
        </div>
        <div className="flex flex-col justify-center items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col w-[87px]">
            <div className="flex gap-1.5">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 1</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div>Option 2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="justify-center leading-7 text-black max-md:max-w-full">
          We are curious about measuring anxiety levels. Create a survey prompt
          to ask the person to rank their anxiety on an ordinal scale. Then
          below, add labels to the scale values.
        </div>
        <div className="flex flex-col justify-center p-4 mt-3 bg-white rounded leading-[162.5%] max-md:max-w-full">
          <div className="justify-center p-4 bg-white rounded border border-solid border-neutral-400 border-opacity-50 text-neutral-400 max-md:max-w-full">
            Write your question
          </div>
          <div className="flex flex-col items-start pr-20 mt-4 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-2.5 max-w-full whitespace-nowrap text-neutral-400 w-[165px]">
              <div className="flex flex-col justify-center">
                <div className="justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 max-md:px-5">
                  1
                </div>
              </div>
              <div className="my-auto font-semibold text-black">to</div>
              <div className="flex flex-col justify-center">
                <div className="justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 max-md:px-5">
                  5
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-4 max-w-full w-[165px]">
              <div className="flex gap-2.5">
                <div className="my-auto font-semibold text-black">1</div>
                <div className="justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-neutral-400">
                  Scale label
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-4 max-w-full w-[165px]">
              <div className="flex gap-2.5">
                <div className="my-auto font-semibold text-black">5</div>
                <div className="justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-neutral-400">
                  Scale label
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                    
            
        </div>
                
                {/* Form submission button                   */}
                <div className="flex justify-end">
                    <Link href={"../module6/stage2"} passHref>
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
    <Sidebar moduleNumber={"6"}>
                  <SidebarItem number="1" text="Putting it all together" active={false} stageNumber={4} href="/module6/stage1" />
  <SidebarItem number="2" text="Data collection through survey" active={false} stageNumber = {4} href="/module6/stage2" />
  <SidebarItem number="3" text="Formatting " active={false} stageNumber = {4} href="/module6/stage3" />
  <SidebarItem number="4" text="Let’s create questions" active={true} stageNumber = {4} href="/module6/stage4" />
  <SidebarItem number="5" text="Preview Survey" active={false} stageNumber = {4} href="/module6/stage5" />
</Sidebar>
  </div>
    </div>
  );
}
