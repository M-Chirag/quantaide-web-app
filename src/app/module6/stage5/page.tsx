'use client';

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../../module1/Sidebar';
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard } from 'lucide-react';
import { Img } from '@builder.io/react';

export default function Stage2() {
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
                    <Link href='/module6/stage4'>
                      <button>
                        <img
                          loading='lazy'
                          src='../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg'
                          className='shrink-0 my-auto w-10 aspect-square'
                        />
                      </button>
                    </Link>
                    <div className='flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit'>
                      <div className='text-xs'>Question Formulation</div>
                      <div className='mt-1 text-xl font-bold'>
                        Preview Your Survey
                      </div>
                    </div>
                  </div>

                  {/* Form Begins */}
                  <div className='self-center'>
                    <div className='flex flex-col justify-center mt-5 p-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      <div className='text-base font-semibold leading-7 max-md:max-w-full'>
                        1. Which age group do you belong to?
                      </div>
                      <div className='flex flex-col items-start p-4 mt-3 text-base leading-5 whitespace-nowrap bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                        <div className='flex gap-1.5'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>10-15</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>16-20</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>21-25</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>26-30</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center p-6 mt-7 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      <div className='text-base font-semibold leading-7 max-md:max-w-full'>
                        2. What is your primary music streaming service?
                      </div>
                      <div className='flex flex-col items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                        <div className='flex gap-1.5 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Spotify</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Apple Music</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>YouTube Music</div>
                        </div>
                        <div className='flex gap-1.5 mt-4 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>SoundCloud</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center p-6 mt-7 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      <div className='text-base font-semibold leading-7 max-md:max-w-full'>
                        3. Do you listen to music while working?
                      </div>
                      <div className='flex flex-col items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                        <div className='flex gap-1.5 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Yes</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>No </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center p-6 mt-7 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      <div className='text-base font-semibold leading-7 max-md:max-w-full'>
                        4. What is your favorite genre of music?
                      </div>
                      <div className='flex flex-col items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                        <div className='flex gap-1.5 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Pop</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Hip Hop</div>
                        </div>
                        <div className='flex gap-1.5 mt-4 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>R&B</div>
                        </div>
                        <div className='flex gap-1.5 mt-4 whitespace-nowrap'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Dance</div>
                        </div>
                        <div className='flex gap-1.5 mt-4'>
                          <div className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          <div>Classic Rock</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center p-6 mt-7 w-full font-semibold bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      <div className='text-base leading-7 max-md:max-w-full'>
                        5. Rank your anxiety on a scale of 0-5. 0 - I do not
                        experience this. 5 - I experience this regularly,
                        constantly/or to an extreme.
                      </div>
                      <div className='flex gap-5 justify-between items-center p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:flex-wrap'>
                        <div className='my-auto'>I do not experience this</div>
                        <div className='flex gap-5 justify-between self-stretch whitespace-nowrap leading-[133%]'>
                          <div className='flex flex-col justify-center'>
                            <div>1</div>
                            <div className='shrink-0 mt-1 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <div>2</div>
                            <div className='shrink-0 mt-1 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <div>3</div>
                            <div className='shrink-0 mt-1 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <div>4</div>
                            <div className='shrink-0 mt-1 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <div>5</div>
                            <div className='shrink-0 mt-1 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-[100px]' />
                          </div>
                        </div>
                        <div className='my-auto'>
                          I experience this regularly
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end mb-10'>
                    <Link href={'../module6/complete'} passHref>
                      <button className='justify-center self-end px-10 py-2.5 mt-12 text-base font-bold text-white bg-orange-400 rounded-md max-md:px-5 max-md:mt-10'>
                        Done
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Sidebar moduleNumber={'6'} expandedState={true}>
          <SidebarItem
            number='1'
            text='Putting it all together'
            active={false}
            stageNumber={5}
            href='/module6/stage1'
          />
          <SidebarItem
            number='2'
            text='Data collection through survey'
            active={false}
            stageNumber={5}
            href='/module6/stage2'
          />
          <SidebarItem
            number='3'
            text='Formatting '
            active={false}
            stageNumber={5}
            href='/module6/stage3'
          />
          <SidebarItem
            number='4'
            text='Let’s create questions'
            active={false}
            stageNumber={5}
            href='/module6/stage4'
          />
          <SidebarItem
            number='5'
            text='Preview Survey'
            active={true}
            stageNumber={5}
            href='/module6/stage5'
          />
        </Sidebar>
      </div>
    </div>
  );
}
