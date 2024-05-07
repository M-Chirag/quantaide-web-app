'use client';

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../Sidebar';
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard } from 'lucide-react';
import { Img } from '@builder.io/react';

export default function Stage3() {
  const sidebarState = typeof window !== 'undefined' && window.innerWidth <= 1600 ? false : true;
  return (
    <div className='w-full max-w-[1301px] ml-14 mr-14'>
      <div className='flex flex-row max-md:flex-col max-md:gap-50'>
        <div className='flex flex-col bg-white'>
          <div className='self-center w-full max-w-[1372px] max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[69%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col mt-20 text-black max-md:mt-10 max-md:max-w-full'>
                  <div className='flex gap-5 self-start'>
                    <Link href='/module1/stage2'>
                      <button>
                        <img
                          loading='lazy'
                          src='../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg'
                          className='shrink-0 my-auto w-10 aspect-square'
                        />
                      </button>
                    </Link>
                    <div className='flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit'>
                      <div className='text-xs'>Problem Statement</div>
                      <div className='mt-1 text-xl font-bold'>
                        In survey design we conduct problem-based deductive
                        research.
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full'>
                    <div className='justify-center px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      For quantitative research, we are starting with a problem
                      and not conducting{' '}
                      <a
                        target='_blank'
                        href='https://research-methodology.net/research-methodology/research-design/exploratory-research/'
                        className='underline'
                      >
                        exploratory research
                      </a>{' '}
                      where we look for interesting trends. Note that the
                      problem is NOT a question. It is a statement that gets to
                      the heart of an issue that we will then argue is important
                      to further understand. These problems come from a wide
                      range of areas such as data science, UX, finance,
                      healthcare, education, business, etc.
                    </div>

                    <div className='flex gap-5 mt-7 p-4 bg-white rounded-lg border border-gray-200 border-solid max-md:flex-wrap'>
                      <div className='flex items-center p-2 mt-6 bg-orange-400 rounded-md h-[40px] w-[80px]'>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/cc06fddba394dd106c0cce3f0a1a6a49d7afe7ca3f0b08eecf043950d3ca5f7e?apiKey=2a09c3227636445ca6cca45824f0323c&'
                          className='gap-0 '
                        />
                      </div>
                      <div className='gap-0 my-auto text-base font-semibold leading-7 text-black max-md:flex-wrap max-md:max-w-full'>
                        The key here is that we are always starting with a
                        defined problem, no matter the area or discipline, etc.
                        This is different from purely “exploratory” work where
                        you are hunting for interesting things that may or may
                        not show up in your data. 
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-end'>
                    <Link href={'../module1/stage4'} passHref>
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
        <Sidebar moduleNumber={'1'} expandedState={sidebarState}>
          <SidebarItem
            number='1'
            text='Choose your Interest'
            active={false}
            stageNumber={3}
            href='/module1/stage1'
          />
          <SidebarItem
            number='2'
            text='What goes into problem statement?'
            active={false}
            stageNumber={3}
            href='/module1/stage2'
          />
          <SidebarItem
            number='3'
            text='Conducting ‘problem-based’ deductive research'
            active={true}
            stageNumber={3}
            href='/module1/stage3'
          />
          <SidebarItem
            number='4'
            text='The Three Criteria'
            active={false}
            stageNumber={3}
            href='/module1/stage4'
          />
          <SidebarItem
            number='5'
            text='Examples of problem statements'
            active={false}
            stageNumber={3}
            href='/module1/stage5'
          />
          <SidebarItem
            number='6'
            text='Let’s get hands on!'
            active={false}
            stageNumber={3}
            href='/module1/stage6'
          />
        </Sidebar>
      </div>
    </div>
  );
}
