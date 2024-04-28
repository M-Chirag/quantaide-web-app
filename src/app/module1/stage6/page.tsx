"use client";   
import React, { useState } from 'react';

import Link from 'next/link';
import { Sidebar, SidebarItem } from '../Sidebar'; 
import { PanelLeft, Clipboard, BookOpen, UserCheck, FilePlus, Hand, LayoutDashboard } from 'lucide-react';


function Stage6() {  
  return (
    <div className="w-full max-w-[1301px] ml-14 mr-14"> 
    <div className="w-full max-w-[1301px] ml-14 mr-14">
      <div className="flex flex-row max-md:flex-col max-md:gap-50">
        <div className="flex flex-col bg-white">
          <div className="self-center w-full max-w-[1372px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-9 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between self-start text-black">
                    <Link href="/module/stage2">
                      <button>
                      <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c&"
                      className="shrink-0 my-auto w-10 aspect-square"
                          />
                        </button>
                      </Link>
                    <div className="flex flex-col justify-end px-5">
                      <div className="text-xs">Problem Statement</div>
                      <div className="mt-1 text-xl font-bold">Let’s get hands on! </div>
                    </div>
                  </div>
                  <div className="flex flex-col pl-16 mt-11 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-2 max-md:flex-wrap">
                      <div className="flex flex-col flex-wrap grow shrink-0 justify-center content-end basis-0 w-fit max-md:max-w-full">
                        <div className="flex flex-col justify-center max-md:max-w-full">
                          <div className="flex flex-col max-md:max-w-full">
                            <div className="flex flex-col justify-center max-md:max-w-full">
                              <div className="max-md:max-w-full">Music and Mental Health </div>
                               <div className="mt-2.5 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Sit facilisi eget phasellus
            non. Integer morbi praesent erat interdum porttitor odio duis.
            Faucibus id libero elementum id quis lobortis velit aliquam. Feugiat
            arcu aliquam leo tortor ac.
          </div>
                                                          </div>
                                                          
                                                          <div className="mt-12 text-base font-bold text-black max-md:mt-10 max-md:max-w-full">
          Write your own problem statement below{" "}
        </div>
                            <div className="flex flex-col mt-2 max-md:max-w-full">
                              
                              <textarea
  className="justify-center items-start px-3.5 py-3.5 mt-2 text-base rounded-lg border border-solid border-zinc-300 text-black max-md:pr-5 max-md:max-w-full resize-vertical"
  placeholder="Problem statement goes here..."
  rows={6} // Adjust the number of rows as needed to increase the height
></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
      
                    </div>
                    
                    <div className="flex justify-end">
                    <Link href={"/"} passHref>
                      <button
                        
                          className="justify-center self-end px-10 py-2.5 mt-10 text-base font-bold text-white bg-amber-500 rounded-md max-md:px-5 max-md:mt-10">
                        Done</button>
                        
                    </Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Sidebar>
  <SidebarItem number="1" text="Choose your Interest" active={false} stageNumber = "6" href="/module1/stage1" />
  <SidebarItem number="2" text="What goes into problem statement?" stageNumber = "6" active={false} href="/module1/stage2" />
  <SidebarItem number="3" text="Conducting ‘problem-based’ deductive research" stageNumber = "6" active={false} href="/module1/stage3" />
  <SidebarItem number="4" text="The Three Criteria" stageNumber = "6" active={false} href="/module1/stage4" />
  <SidebarItem number="5" text="Examples of problem statements" stageNumber = "6" active={false} href="/module1/stage5" />
  <SidebarItem number="6" text="Let’s get hands on!" stageNumber = "6" active={true} href="/module1/stage6" />
</Sidebar>
      </div>
    </div>
    </div>
  );
}


export default Stage6;