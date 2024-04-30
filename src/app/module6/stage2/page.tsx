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
                <Link href="/module6/stage1">
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
                   Data collection through survey
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                                          In order to collect data that can be used for analysis, we must have a method to collect data. For this example, we are going to use a survey.
                                      </div>

                <div className="justify-center mt-8 px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                                          When building a survey, it might be a good idea to decide what kind of demographic data you want to collect.
                                      </div>


                <div className="justify-center mt-8 px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                                      There are a few parameters around picking x values that we are interested in. These variables must be the data that we believe have an impact on the y value.     
                                      </div>

                <div className="gap-0 mt-8 w-full text-base leading-7 text-black max-md:flex-wrap max-md:max-w-full">
        These x values can fall under a few categories such as:
      </div>
      <div className="flex flex-col gap-1 justify-center p-6 mt-3 w-full text-base text-black bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-between px-px leading-[162.5%] max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 my-auto font-semibold">Dichotomous </div>
          <div className="justify-center px-5 py-1 whitespace-nowrap rounded bg-neutral-200">
            Categorical
          </div>
        </div>
        <div className="gap-0 mt-1 leading-7 max-md:flex-wrap max-md:max-w-full">
          Only 2 primary responses are possible
          <br />
          True/False
          <br /> Yes/No
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center p-6 mt-4 w-full text-base leading-7 text-black bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 my-auto font-semibold">Nomimal </div>
          <div className="justify-center px-5 py-1 whitespace-nowrap rounded bg-neutral-200">
            Categorical
          </div>
        </div>
        <div className="gap-0 mt-1 max-md:flex-wrap max-md:max-w-full">
          Numbers are only used as placeholders for responses
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center p-6 mt-4 w-full text-base text-black bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-between px-px whitespace-nowrap leading-[162.5%] max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 my-auto font-semibold">Ordinal</div>
          <div className="justify-center px-5 py-1 rounded bg-neutral-200">
            Categorical
          </div>
        </div>
        <div className="gap-0 mt-1 leading-7 max-md:flex-wrap max-md:max-w-full">
          Numbers imply an underlying ordered structure
          <br />
          Likert-style questions <br />
          Education level <br />
          Income brackets{" "}
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center p-6 mt-4 w-full text-base text-black bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-between px-px whitespace-nowrap leading-[162.5%] max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 my-auto font-semibold">Interval</div>
          <div className="justify-center px-5 py-1 rounded bg-neutral-200">
            Semantic
          </div>
        </div>
        <div className="gap-0 mt-1 leading-7 max-md:flex-wrap max-md:max-w-full">
          Semantic Differential scales
          <br />
          Scale items{" "}
        </div>
      </div>
      <div className="gap-0 mt-14 w-full text-base leading-7 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        We can also collect data that is open ended instead of following the
        outline for creating fixed variable responses. Example:
      </div>
      <div className="flex flex-col gap-3 justify-center p-6 mt-4 w-full text-base leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="justify-center font-semibold text-black max-md:flex-wrap max-md:max-w-full">
          Q. What do you spend most of your time doing on the internet?{" "}
        </div>
        <textarea
  className="justify-center p-4 mt-3 italic font-light bg-white rounded border border-solid border-neutral-400 border-opacity-50 text-stone-300 max-md:flex-wrap max-md:max-w-full"
  placeholder="Open text field"
/>
      </div>
      <div className="flex flex-col gap-3 justify-center p-6 mt-5 w-full text-black bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="justify-center text-base font-semibold leading-7 max-md:flex-wrap max-md:max-w-full">
          Q. What do you spend most of your time doing on the Internet?
        </div>
        <div className="flex flex-col gap-0 justify-center items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col gap-4 max-w-full w-[198px]">
            <div className="flex gap-1.5 ">
              <div className="shrink-0 gap-0 w-5 h-5 bg-amber-500 border-amber-500 border-solid shadow-sm border-[3px] rounded-[100px]" />
              <div className="gap-0">Email</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 gap-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div className="gap-0">Browse news websites</div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <div className="shrink-0 gap-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div className="gap-0">Use social media</div>
            </div>
            <div className="flex gap-1.5 mt-4 whitespace-nowrap">
              <div className="shrink-0 gap-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]" />
              <div className="gap-0">Other</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 p-4 mt-5 bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap">
        <div className="flex gap-0 justify-center items-center px-2 py-2 my-auto bg-amber-500 rounded-md h-[39px] w-[39px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/174ef15b4a6a3c070d382101e1940f0679bb8e1bed27f61df796439611d042aa?apiKey=2a09c3227636445ca6cca45824f0323c&"
            className="gap-0 w-full border-0 border-white border-solid aspect-[0.92] fill-white stroke-[0.2px] stroke-white"
          />
        </div>
        <div className="gap-0 text-base font-semibold leading-7 text-black max-md:flex-wrap max-md:max-w-full">
          Both of these survey questions are effective but it depends on what we
          want to analyze. 
        </div>
      </div>
                    
                </div>
                <div className="flex justify-end">
                    <Link href={"../module6/stage3"} passHref>
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
                  <SidebarItem number="1" text="Putting it all together" active={false} stageNumber={2} href="/module6/stage1" />
  <SidebarItem number="2" text="Data collection through survey" active={true} stageNumber = {2} href="/module6/stage2" />
  <SidebarItem number="3" text="Formatting " active={false} stageNumber = {2} href="/module6/stage3" />
  <SidebarItem number="4" text="Let’s create questions" active={false} stageNumber = {2} href="/module6/stage4" />
  <SidebarItem number="5" text="Preview Survey" active={false} stageNumber = {2} href="/module6/stage5" />
</Sidebar>
  </div>
    </div>
  );
}
