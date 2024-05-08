'use client';
// check again
import React, { useState, FormEvent } from 'react';
import { Sidebar, SidebarItem } from '../../module1/Sidebar';
import Link from 'next/link';
import { HomeIcon, Star, SettingsIcon, LayoutDashboard } from 'lucide-react';
import { Img } from '@builder.io/react';

// Define the score mappings outside the function since they do not depend on component scope
const scoreMappings: { [key: number]: { text: string; color: string } } = {
  0: { text: "Let's try again", color: 'text-red-500' },
  1: { text: 'Needs Improvement', color: 'text-red-500' },
  2: { text: 'Needs Improvement', color: 'text-yellow-500' },
  3: { text: 'Fair', color: 'text-yellow-500' },
  4: { text: 'Good', color: 'text-green-500' },
  5: { text: 'Excellent', color: 'text-green-500' },
};

export default function Stage4() {
  const sidebarState =
    typeof window !== 'undefined' && window.innerWidth <= 1600 ? false : true;
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formElement = event.currentTarget as HTMLFormElement;
      const formData = new FormData(formElement);
      const formDataEntries = Array.from(formData.entries());

      const formDataJson: { [key: string]: FormDataEntryValue } = {};
      // Iterate over form data entries
      try {
        for (const [key, value] of formData.entries()) {
          // Add each form data entry to the JSON object
          formDataJson[key] = value;
        }
      } catch (err) {
        console.log(err);
      }

      // Convert the JSON object to a string
      const formDataJsonString = JSON.stringify(formDataJson);

      console.log(formDataJsonString);

      const formGPTData = new FormData();
      formGPTData.append('question', formDataJsonString);
      formGPTData.append(
        'instruction',
        "In the JSON string, I have given keys in the format of 'q(number)_(form input type)'. Group the questions based on the question number and use that as input to evaluate the quality of the question on a score from 1 to 5 (only whole numbers) and a one line short sentence feedback to give back an output JSON in the format {question_number: {score:, feedback}}. keep this format only strictly. Don't return body key property.Just {question_number:{score:<value>, feedback:<short sentence>}}.Strictly give relevant json, and not adding your summary text on top and bottom."
      );

      const requestOptions: RequestInit = {
        method: 'POST',
        body: formGPTData,
        redirect: 'follow',
      };
      const response = await fetch(
        'https://us-central1-encoded-antenna-362401.cloudfunctions.net/python-http-function',
        requestOptions
      );
      const responseGPT = await response.text();
      const parsedData = JSON.parse(JSON.parse(responseGPT).body).replace(
        /^\"|\"$|\\n\\n|\\n\\n\\n|json|\\n|`/g,
        ''
      );
      console.log(typeof parsedData);
      console.log(parsedData);

      const parsedDataF: Record<string, { score: number; feedback: string }> =
        JSON.parse(parsedData);
      const items: any[] = Object.entries(parsedDataF).map(
        ([key, value]: [string, any]) => ({
          number: key,
          score: value.score,
          feedback: value.feedback,
        })
      );

      setAssessmentResult(items);
      console.log(scoreMappings[assessmentResult[0]['score']]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  //     const [readOnly, setReadOnly] = useState(false);
  //     const [formSubmitted, setFormSubmitted] = useState(false);

  //     const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //   };

  // if(assessmentResult){
  //   <div className='w-full max-w-[1301px] ml-14 mr-14'>
  //     <div className='flex flex-row max-md:flex-col max-md:gap-50'>
  //       <div className='flex flex-col bg-white'>
  //         <div className='self-center w-full max-w-[1372px] max-md:max-w-full'>
  //           <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
  //             <div className='flex flex-col w-[69%] max-md:ml-0 max-md:w-full'>
  //               <div className='flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full'>
  //                 <div className='flex gap-5 self-start'>
  //                   <Link href='/module6/stage3'>
  //                     <button>
  //                       <img
  //                         loading='lazy'
  //                         src='../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg'
  //                         className='shrink-0 my-auto w-10 aspect-square'
  //                       />
  //                     </button>
  //                   </Link>
  //                   <div className='flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit'>
  //                     <div className='text-xs'>Question Formulation</div>
  //                     <div className='mt-1 text-xl font-bold'>
  //                       Let&apos;s create a survey
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className='flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full'>
  //                   <div className='justify-center font-semibold px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
  //                     When building a survey, it might be a good idea to decide
  //                     what kind of demographic data you want to collect. In the
  //                     next section you can start building your survey that will
  //                     help you gather data to test your hypothesis.
  //                   </div>
  //                   <form onSubmit={handleSubmit}>
  //                     {/* Question about music listening frequency  */}
  //                     <div className='flex mt-8 flex-col justify-center p-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
  //                       <div className='justify-center leading-7 text-black max-md:max-w-full'>
  //                         1. You are curious about how much a person listens to
  //                         music per day. Create a survey question for this using
  //                         interval data.
  //                       </div>
  //                       <input
  //                         type='text'
  //                         name="q1_text"
  //                         className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] text-neutral-400 max-md:max-w-full'
  //                         placeholder='Write your question'
  //                       ></input>
  //                     </div>

  //                     {/* Question about platforms used for listening to music --> */}
  //                     <div className='flex flex-col justify-center p-6 mt-6 w-full text-base bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
  //                       <div className='leading-5 text-black max-md:max-w-full'>
  //                         2. We are curious what platform a user most frequently
  //                         uses to listen to music. Create a survey question to
  //                         collect categorical data. Then create four options for
  //                         the user to choose from.
  //                       </div>
  //                       {/* value={q2Text}
  //                         onChange={(e) => setq2Text(e.target.value)} */}
  //                       <input
  //                         type='text'
  //                         name="q2_text"
  //                         className='justify-center p-4 mt-3 text-base leading-7 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:max-w-full'
  //                         placeholder='Write your question'
  //                       ></input>

  //                       <div className='flex flex-col justify-center items-start p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[133%] max-md:pr-5 max-md:max-w-full'>
  //                         {/* <!-- Radio buttons for options --> */}
  //                         {['q2_Option1', 'q2_Option2', 'q2_Option3', 'q2_Option4'].map(
  //                           (option, index) => (
  //                             <div
  //                               key={index}
  //                               className='flex gap-1.5 items-center mt-2'
  //                             >
  //                               <input
  //                                 type='radio'
  //                                 id={`option${index}`}
  //                                 name='platform'
  //                                 className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-full'
  //                               />
  //                               <input
  //                                 type='text'
  //                                 name={option}
  //                                 className='flex-1 ml-2 p-2 border border-gray-300 rounded'
  //                                 placeholder={`Enter option ${index + 1}`}
  //                               />
  //                             </div>
  //                           )
  //                         )}
  //                       </div>
  //                     </div>

  //                     {/* <!-- Dichotomous question about playing instruments --> */}
  //                     <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
  //                       <div className='leading-7 text-black max-md:max-w-full'>
  //                         3. We are curious if users play instruments on a
  //                         regular basis. Create a question to ask the user this
  //                         dichotomous question. Then write two options for the
  //                         user to choose from.
  //                       </div>
  //                       <input
  //                         type='text'
  //                         name='q3_text'
  //                         className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] max-md:max-w-full'
  //                         placeholder='Write your question'
  //                       ></input>
  //                       <div className='flex flex-col justify-center items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
  //                         {/* <!-- Radio buttons for dichotomous question --> */}
  //                         {['Yes', 'No'].map((option, index) => (
  //                           <div
  //                             key={index}
  //                             className='flex gap-1.5 items-center mt-2'
  //                           >
  //                             <input
  //                               type='radio'
  //                               id={`option${index}`}
  //                               name='platform'
  //                               className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 rounded-full'
  //                             />
  //                             <input
  //                               type='text'
  //                               name={`q3_option${index}`}
  //                               className='flex-1 ml-2 p-2 border border-gray-300 rounded'
  //                               placeholder={option}
  //                             />
  //                           </div>
  //                         ))}
  //                       </div>
  //                     </div>

  //                     <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
  //                       <div className='justify-center leading-7 text-black max-md:max-w-full'>
  //                         4. We are curious about measuring anxiety levels.
  //                         Create a survey prompt to ask the person to rank their
  //                         anxiety on an ordinal scale. Then below, add labels to
  //                         the scale values.
  //                       </div>
  //                       <input
  //                         type='text'
  //                         name='q4_text'
  //                         className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 text-black max-md:max-w-full'
  //                         placeholder='Write your question here...'
  //                       ></input>
  //                       <div className='flex flex-col justify-center p-4 mt-3 bg-white rounded leading-[162.5%] max-md:max-w-full'>
  //                         <div className='flex gap-2.5 max-w-full w-[165px]'>
  //                           <input
  //                             type='text'
  //                             name='q4_scale1'
  //                             className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
  //                             placeholder='1'
  //                           ></input>
  //                           <div className='my-auto font-semibold text-black'>
  //                             to
  //                           </div>
  //                           <input
  //                             type='text'
  //                             name='q4_scale2'
  //                             className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
  //                             placeholder='5'
  //                           ></input>
  //                         </div>
  //                         <div className='flex flex-col justify-center mt-4 w-[165px]'>
  //                           <div className='flex gap-2.5'>
  //                             <div className='my-auto font-semibold text-black'>
  //                               1
  //                             </div>
  //                             <input
  //                               type='text'
  //                               name='q4_scale_label1'
  //                               className='justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-black'
  //                               placeholder='Scale label'
  //                             ></input>
  //                           </div>
  //                           <div className='flex gap-2.5 mt-4'>
  //                             <div className='my-auto font-semibold text-black'>
  //                               5
  //                             </div>
  //                             <input
  //                               type='text'
  //                               name='q4_scale_label2'
  //                               className='justify-center px-1.5 py-2 w-22 rounded border border-solid border-neutral-400 text-black'
  //                               placeholder='Scale label'
  //                             ></input>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>

  //                     {/* Submit button */}
  //                     <div className='flex justify-end'>
  //             <button
  //               type='submit'
  //               disabled={isLoading}
  //               className='px-10 py-2.5 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300'
  //             >
  //               {isLoading ? 'Submitting...' : 'Done'}
  //             </button>
  //           </div>

  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Sidebar moduleNumber={'6'}>
  //         <SidebarItem
  //           number='1'
  //           text='Putting it all together'
  //           active={false}
  //           stageNumber={4}
  //           href='/module6/stage1'
  //         />
  //         <SidebarItem
  //           number='2'
  //           text='Data collection through survey'
  //           active={false}
  //           stageNumber={4}
  //           href='/module6/stage2'
  //         />
  //         <SidebarItem
  //           number='3'
  //           text='Formatting '
  //           active={false}
  //           stageNumber={4}
  //           href='/module6/stage3'
  //         />
  //         <SidebarItem
  //           number='4'
  //           text='Let’s create questions'
  //           active={true}
  //           stageNumber={4}
  //           href='/module6/stage4'
  //         />
  //         <SidebarItem
  //           number='5'
  //           text='Preview Survey'
  //           active={false}
  //           stageNumber={4}
  //           href='/module6/stage5'
  //         />
  //       </Sidebar>
  //     </div>
  //   </div>
  // }

  return (
    <div className='w-full max-w-[1301px] ml-14 mr-14'>
      <div className='flex flex-row max-md:flex-col max-md:gap-50'>
        <div className='flex flex-col bg-white'>
          <div className='self-center w-full max-w-[1372px] max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
              <div className='flex flex-col w-[69%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col mt-20 text-black max-md:mt-10 max-md:max-w-full'>
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
                      {!assessmentResult && (
                        <div className='mt-1 mb-5 text-xl font-bold'>
                          Let&apos;s create a survey
                        </div>
                      )}
                    </div>
                  </div>
                  {assessmentResult && (
                    <div className='ml-20 mt-5 text-2xl font-bold'>
                      {' '}
                      Survey Evaluation -{'>'}
                    </div>
                  )}
                  <div className='flex flex-col pl-16 mt-15 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full'>
                    {
                      <div className='mt-4 justify-center font-semibold px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                        When building a survey, it might be a good idea to
                        decide what kind of demographic data you want to
                        collect. In the next section you can start building your
                        survey that will help you gather data to test your
                        hypothesis.
                      </div>
                    }
                    <form onSubmit={handleSubmit}>
                      {/* Question about music listening frequency  */}
                      <div className='flex mt-8 flex-col justify-center p-6 w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full'>
                        {assessmentResult && (
                          <div className=' ml-2 flex flex-row gap-4 mb-2 border-b-2 py-1'>
                            <div className='flex gap-1 items-center text-3xl font-bold tracking-wider '>
                              {/* <div
                                        className={`px-4 py-3.5 rounded-md ${scoreMappings[assessmentResult[0].score]?.color}`}
                                      >
                                        {scoreMappings[assessmentResult[0].score]?.text}
                                      </div> */}
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  className={`my-auto ${
                                    index < assessmentResult[0]['score']
                                      ? scoreMappings[assessmentResult[0].score]
                                          ?.color
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className='text-gray-900'>
                              {assessmentResult[0].feedback}
                            </p>
                          </div>
                        )}
                        {
                          <div className='justify-center leading-7 text-black max-md:max-w-full'>
                            1. You as a researcher are interested in daily music
                            listening patterns in users. Create a survey
                            question to ask the user the amount of music they
                            listen to
                          </div>
                        }

                        <input
                          type='text'
                          name='q1_text'
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[162.5%] text-black placeholder-gray-400 max-md:max-w-full'
                          placeholder='Write your question'
                        ></input>
                      </div>

                      {/* Question about platforms used for listening to music --> */}
                      <div className='flex flex-col justify-center p-6 mt-6 w-full text-base bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        {assessmentResult && (
                          <div className=' ml-2 flex flex-row gap-4 mb-2 border-b-2 py-1'>
                            <div className='flex gap-1 items-center text-3xl font-bold tracking-wider '>
                              {/* <div
                                        className={`px-4 py-3.5 rounded-md ${scoreMappings[assessmentResult[0].score]?.color}`}
                                      >
                                        {scoreMappings[assessmentResult[0].score]?.text}
                                      </div> */}
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  className={`my-auto ${
                                    index < assessmentResult[0]['score']
                                      ? scoreMappings[assessmentResult[1].score]
                                          ?.color
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className='text-gray-900'>
                              {assessmentResult[1].feedback}
                            </p>
                          </div>
                        )}
                        <div className='leading-5 text-black max-md:max-w-full'>
                          2. You are curious about the most popular music
                          streaming platforms. Create a survey question to
                          collect categorical data from users. Then create four
                          options for the user to choose from.
                        </div>
                        {/* value={q2Text}
                          onChange={(e) => setq2Text(e.target.value)} */}
                        <input
                          type='text'
                          name='q2_text'
                          className='justify-center p-4 mt-3 text-base  text-black placeholder-gray-400leading-7 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:max-w-full'
                          placeholder='Write your question'
                        ></input>

                        <div className='flex flex-col justify-center items-start p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 leading-[133%] max-md:pr-5 max-md:max-w-full'>
                          {/* <!-- Radio buttons for options --> */}
                          {[
                            'q2_Option1',
                            'q2_Option2',
                            'q2_Option3',
                            'q2_Option4',
                          ].map((option, index) => (
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
                                name={option}
                                className='flex-1 ml-2 p-2 border border-gray-300 text-black placeholder-gray-400 rounded'
                                placeholder={`Enter option ${index + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <!-- Dichotomous question about playing instruments --> */}
                      <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        {assessmentResult && (
                          <div className='ml-2 flex flex-row gap-4 mb-2 border-b-2 py-1'>
                            <div className='flex gap-1 items-center text-3xl font-bold tracking-wider '>
                              {/* <div
                                        className={`px-4 py-3.5 rounded-md ${scoreMappings[assessmentResult[0].score]?.color}`}
                                      >
                                        {scoreMappings[assessmentResult[0].score]?.text}
                                      </div> */}
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  className={`my-auto ${
                                    index < assessmentResult[2]['score']
                                      ? scoreMappings[assessmentResult[2].score]
                                          ?.color
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className='text-gray-900'>
                              {assessmentResult[2].feedback}
                            </p>
                          </div>
                        )}
                        <div className='leading-7 text-black max-md:max-w-full'>
                          3. You are curious if playing instruments regularly
                          has an impact on anxiety. Create a dichotomous
                          question for this.
                        </div>
                        <input
                          type='text'
                          name='q3_text'
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid text-black placeholder-gray-400 border-neutral-400 border-opacity-50 leading-[162.5%] max-md:max-w-full'
                          placeholder='Write your question'
                        ></input>
                        <div className='flex flex-col justify-center items-start p-4 mt-3 text-base leading-5 bg-white rounded border border-solid border-neutral-400 border-opacity-50 max-md:pr-5 max-md:max-w-full'>
                          {/* <!-- Radio buttons for dichotomous question --> */}
                          {['Enter Option 1', 'Enter Option 2'].map(
                            (option, index) => (
                              <div
                                key={index}
                                className='flex gap-1.5 items-center mt-2'
                              >
                                <input
                                  type='radio'
                                  id={`option${index}`}
                                  name='platform'
                                  className='shrink-0 w-5 h-5 bg-white border border-solid shadow-sm border-zinc-300 text-black placeholder-gray-400 rounded-full'
                                />
                                <input
                                  type='text'
                                  name={`q3_option${index}`}
                                  className='flex-1 ml-2 p-2 border text-black placeholder-gray-400 border-gray-300 rounded'
                                  placeholder={option}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className='flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full'>
                        {assessmentResult && (
                          <div className='ml-2 flex flex-row gap-4 mb-2 border-b-2 py-1'>
                            <div className='flex gap-1 items-center text-3xl font-bold tracking-wider '>
                              {/* <div
                                        className={`px-4 py-3.5 rounded-md ${scoreMappings[assessmentResult[0].score]?.color}`}
                                      >
                                        {scoreMappings[assessmentResult[0].score]?.text}
                                      </div> */}
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  className={`my-auto ${
                                    index < assessmentResult[3]['score']
                                      ? scoreMappings[assessmentResult[3].score]
                                          ?.color
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className='text-gray-900'>
                              {assessmentResult[3].feedback}
                            </p>
                          </div>
                        )}
                        <div className='justify-center leading-7 text-black max-md:max-w-full'>
                          4. You are curious about individuals' well-being over
                          time. Create a question prompt that encourages users
                          to reflect on their anxiety from the past week using
                          an ordinal scale.
                        </div>
                        <input
                          type='text'
                          name='q4_text'
                          className='justify-center p-4 mt-3 bg-white rounded border border-solid border-neutral-400 border-opacity-50 text-black placeholder-gray-400 max-md:max-w-full'
                          placeholder='Write your question here...'
                        ></input>
                        <div className='flex flex-col justify-center p-4 mt-3 bg-white rounded leading-[162.5%] max-md:max-w-full'>
                          <div className='flex gap-2.5 max-w-full w-[165px]'>
                            <input
                              type='text'
                              name='q4_scale1'
                              className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
                              placeholder='1'
                            ></input>
                            <div className='my-auto font-semibold text-black'>
                              to
                            </div>
                            <input
                              type='text'
                              name='q4_scale2'
                              className='justify-center items-start px-7 py-3.5 rounded border border-solid border-neutral-400 text-black max-md:px-5'
                              placeholder='5'
                            ></input>
                          </div>
                          <div className='flex flex-col justify-center mt-4 w-[165px]'>
                            <div className='flex gap-2.5'>
                              <div className='my-auto font-semibold text-black'>
                                1
                              </div>
                              <input
                                type='text'
                                name='q4_scale_label1'
                                className='justify-center px-1.5 py-2 rounded border border-solid border-neutral-400 text-black'
                                placeholder='Scale label'
                              ></input>
                            </div>
                            <div className='flex gap-2.5 mt-4'>
                              <div className='my-auto font-semibold text-black'>
                                5
                              </div>
                              <input
                                type='text'
                                name='q4_scale_label2'
                                className='justify-center px-1.5 py-2 w-22 rounded border border-solid border-neutral-400 text-black'
                                placeholder='Scale label'
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col items-end'>
                        <div className='mt-4 text-sm text-gray-400'>
                          If you don&apos;t wish to use AI, proceed to preview
                          your survey.{' '}
                        </div>
                      </div>
                      {/* Submit button */}
                      {
                        <div className='flex justify-end mb-20'>
                          <button
                            type='submit'
                            disabled={isLoading}
                            className='px-10 py-2.5 mt-4 mb-4 text-base font-bold text-white  bg-amber-500  rounded-md disabled:bg-amber-50'
                          >
                            {isLoading
                              ? 'Submitting...'
                              : assessmentResult
                              ? 'Evaluate Again'
                              : 'Evaluate'}
                          </button>
                          <Link href={'../module6/stage5'} passHref>
                            <button
                              type='submit'
                              disabled={isLoading}
                              className='px-10 py-2.5 ml-4 mt-4 mb-4 text-base font-bold text-white bg-orange-400 rounded-md disabled:bg-orange-200'
                            >
                              {'Preview'}
                            </button>
                          </Link>
                        </div>
                      }
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar moduleNumber={'6'} expandedState={sidebarState}>
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
