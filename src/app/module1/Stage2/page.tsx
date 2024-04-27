"use client";

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../Sidebar'; 
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";

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
        </div>
      </div>
    </div>
        <Sidebar>
          <SidebarItem icon={<HomeIcon />} text="Dashboard" active={true} href="/" />
          <SidebarItem icon={<SettingsIcon />} text="Settings" active={false} href="../module1/stage1" />
          <SidebarItem icon={<LayoutDashboard />} text="Notifications" active={false} href="/notifications" />
    </Sidebar>
  </div>
    </div>
  );
}