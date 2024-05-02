'use client';

import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '../../module1/Sidebar';
import Link from 'next/link';
import { HomeIcon, SettingsIcon, LayoutDashboard } from 'lucide-react';
import { Img } from '@builder.io/react';

export default function Stage4() {
  //     const [formData, setFormData] = useState({
  //     question1: '',
  //     question2: '',
  //     option1: 'Option 1',
  //     option2: 'Option 2',
  //     option3: 'Option 3',
  //     option4: 'Option 4',
  //     question3: '',
  //     yesNoOption: 'Yes', // Assuming a default value
  //     question4: '',
  //     scaleLabel1: '',
  //     scaleLabel5: ''
  //   });

  //     const [readOnly, setReadOnly] = useState(false);
  //     const [formSubmitted, setFormSubmitted] = useState(false);

  //     const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //   };
  return (
    <div className='w-full max-w-[1301px] ml-14 mr-14'>
      <div className='flex flex-row max-md:flex-col max-md:gap-50'>
        <div className='flex flex-col bg-white'>
          <div className='self-center w-full max-w-[1372px] max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[69%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full'>
                  <div className='flex gap-5 self-start'>
                    <Link href='/module6/stage3'>
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
                        Let&apos;s create a survey
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full'>
                    <div className='justify-center font-semibold px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                      When building a survey, it might be a good idea to decide
                      what kind of demographic data you want to collect. In the
                      next section you can start building your survey that will
                      help you gather data to test your hypothesis.
                    </div>
                    <form action=''>
                      {/* Question about music listening frequency  */}
                      <div className='flex mt-8 flex-col justify-center p-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                        <div className='justify-center leading-7 text-black max-md:max-w-full'>
                          1. You are curious about how much a person listens to
                          music per day. Create a survey question for this using
                          interval data.
                        </div>
                        <textarea
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] text-neutral-400 max-md:max-w-full'
                          placeholder='Write your question'
                        ></textarea>
                      </div>

                      {/* Question about platforms used for listening to music --> */}
                      <div className='flex flex-col justify-center p-6 mt-6 w-full text-base bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        <div className='leading-5 text-black max-md:max-w-full'>
                          2. We are curious what platform a user most frequently
                          uses to listen to music. Create a survey question to
                          collect categorical data. Then create four options for
                          the user to choose from.
                        </div>
                        <textarea
                          className='justify-center p-4 mt-3 text-base leading-7 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:max-w-full'
                          placeholder='Write your question'
                        ></textarea>

                        <div className='flex flex-col justify-center items-start p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[133%] max-md:pr-5 max-md:max-w-full'>
                          {/* <!-- Radio buttons for options --> */}
                          {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map(
                            (option, index) => (
                              <div
                                key={index}
                                className='flex gap-1.5 items-center mt-2'
                              >
                                <input
                                  type='radio'
                                  id={`option${index}`}
                                  name='platform'
                                  className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-full'
                                />
                                <input
                                  type='text'
                                  defaultValue={option}
                                  className='flex-1 ml-2 p-2 border border-gray-300 rounded'
                                  aria-label={`Custom text for ${option}`}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* <!-- Dichotomous question about playing instruments --> */}
                      <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        <div className='leading-7 text-black max-md:max-w-full'>
                          3. We are curious if users play instruments on a
                          regular basis. Create a question to ask the user this
                          dichotomous question. Then write two options for the
                          user to choose from.
                        </div>
                        <textarea
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] max-md:max-w-full'
                          placeholder='Write your question'
                        ></textarea>
                        <div className='flex flex-col justify-center items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                          {/* <!-- Radio buttons for dichotomous question --> */}
                          {['Yes', 'No'].map((option, index) => (
                            <div
                              key={index}
                              className='flex gap-1.5 items-center mt-2'
                            >
                              <input
                                type='radio'
                                id={`option${index}`}
                                name='platform'
                                className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-full'
                              />
                              <input
                                type='text'
                                defaultValue={option}
                                className='flex-1 ml-2 p-2 border border-gray-300 rounded'
                                aria-label={`Custom text for ${option}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        <div className='justify-center leading-7 text-black max-md:max-w-full'>
                          4. We are curious about measuring anxiety levels.
                          Create a survey prompt to ask the person to rank their
                          anxiety on an ordinal scale. Then below, add labels to
                          the scale values.
                        </div>
                        <textarea
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 text-black max-md:max-w-full'
                          placeholder='Write your question here...'
                        ></textarea>
                        <div className='flex flex-col justify-center p-4 mt-3 bg-white rounded leading-[162.5%] max-md:max-w-full'>
                          <div className='flex gap-2.5 max-w-full w-[165px]'>
                            <textarea
                              className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
                              placeholder='1'
                            ></textarea>
                            <div className='my-auto font-semibold text-black'>
                              to
                            </div>
                            <textarea
                              className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
                              placeholder='5'
                            ></textarea>
                          </div>
                          <div className='flex flex-col justify-center mt-4 w-[165px]'>
                            <div className='flex gap-2.5'>
                              <div className='my-auto font-semibold text-black'>
                                1
                              </div>
                              <textarea
                                className='justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-black'
                                placeholder='Scale label'
                              ></textarea>
                            </div>
                            <div className='flex gap-2.5 mt-4'>
                              <div className='my-auto font-semibold text-black'>
                                5
                              </div>
                              <textarea
                                className='justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-black'
                                placeholder='Scale label'
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className='flex justify-end'>
                        {/* <button
                          type='submit'
                          className={`justify-center self-end px-10 py-2.5 mt-12 text-base font-bold text-white bg-amber-500 rounded-md max-md:px-5 max-md:mt-10 ${
                            formSubmitted ? 'bg-gray-500' : 'bg-amber-500'
                          }`}
                          disabled={formSubmitted}
                        >
                          {formSubmitted ? 'Submitting...' : 'Done'}
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar moduleNumber={'6'}>
          <SidebarItem
            number='1'
            text='Putting it all together'
            active={false}
            stageNumber={4}
            href='/module6/stage1'
          />
          <SidebarItem
            number='2'
            text='Data collection through survey'
            active={false}
            stageNumber={4}
            href='/module6/stage2'
          />
          <SidebarItem
            number='3'
            text='Formatting '
            active={false}
            stageNumber={4}
            href='/module6/stage3'
          />
          <SidebarItem
            number='4'
            text='Let’s create questions'
            active={true}
            stageNumber={4}
            href='/module6/stage4'
          />
          <SidebarItem
            number='5'
            text='Preview Survey'
            active={false}
            stageNumber={4}
            href='/module6/stage5'
          />
        </Sidebar>
      </div>
    </div>
  );
}
