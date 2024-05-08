'use client';

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../../module1/Sidebar';
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard } from 'lucide-react';
import { Img } from '@builder.io/react';

export default function Stage1() {
  // const sidebarState = typeof window !== 'undefined' && window.innerWidth <= 1600 ? false : true;
  return (
    <div className='w-full max-w-[1301px] ml-14 mr-14'>
      <div className='flex flex-row max-md:flex-col max-md:gap-50'>
        <div className='flex flex-col bg-white'>
          <div className='self-center w-full max-w-[1372px] max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[69%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col mt-20 text-black max-md:mt-10 max-md:max-w-full'>
                  <div className='flex gap-5 self-start'>
                    <Link href='/'>
                      <button>
                        <img
                          loading='lazy'
                          src='../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg'
                          className='shrink-0 my-auto w-10 aspect-square'
                        />
                      </button>
                    </Link>
                    <div className='flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit'>
                      <div className='text-xs'>Research Question</div>
                      <div className='mt-1 text-xl font-bold'>
                        What are research questions?
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full'>
                    <div className='justify-center px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      Quantitative research questions inquire about the
                      relationships among variables that the investigator seeks
                      to know.
                    </div>

                    <div className='flex gap-5 mt-7 p-4 bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap'>
                      <div className='flex gap-0 justify-center items-center px-2 py-2 bg-orange-400 rounded-md h-[39px] w-[39px]'>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/cc06fddba394dd106c0cce3f0a1a6a49d7afe7ca3f0b08eecf043950d3ca5f7e?apiKey=2a09c3227636445ca6cca45824f0323c&'
                          className='gap-0 w-full border-0 border-white border-solid aspect-[0.92] fill-white stroke-[0.2px] stroke-white'
                        />
                      </div>
                      <div className='gap-0 my-auto text-base font-semibold leading-7 text-black max-md:flex-wrap max-md:max-w-full'>
                        A good research question will produce one or more
                        testable hypotheses.
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <Link href={'../module4/stage2'} passHref>
                      <button className='justify-center self-end px-10 py-2.5 mt-12 text-base font-bold text-white bg-orange-400 rounded-md max-md:px-5 max-md:mt-10'>
                        Next
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar moduleNumber={'4'} expandedState={true}>
          <SidebarItem
            number='1'
            text='What are research questions?'
            active={true}
            stageNumber={1}
            href='/module2/stage1'
          />
          <SidebarItem
            number='2'
            text='Types of Research question'
            active={false}
            stageNumber={1}
            href='/module2/stage2'
          />
          <SidebarItem
            number='3'
            text='Examples'
            active={false}
            stageNumber={1}
            href='/module3/stage3'
          />
          <SidebarItem
            number='4'
            text='Let’s get hands on'
            active={false}
            stageNumber={1}
            href='/module3/stage3'
          />
        </Sidebar>
      </div>
    </div>
  );
}
