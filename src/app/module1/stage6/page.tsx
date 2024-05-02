'use client';
import React, { useState, FormEvent } from 'react';
import { Star, CircleX, CircleCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AICard } from '../AICard';

import Link from 'next/link';
import { Sidebar, SidebarItem } from '../Sidebar';
import { data } from 'autoprefixer';
import ApiService, { AssessmentResult } from '@/app/ApiService';

// Define the score mappings outside the function since they do not depend on component scope
const scoreMappings: { [key: number]: { text: string; color: string } } = {
  0: { text: "Let's try again", color: 'text-red-500' },
  1: { text: 'Needs Improvement', color: 'text-red-500' },
  2: { text: 'Needs Improvement', color: 'text-yellow-500' },
  3: { text: 'Fair', color: 'text-yellow-500' },
  4: { text: 'Good', color: 'text-green-500' },
  5: { text: 'Excellent', color: 'text-green-500' },
};

export default function Stage6() {
  const router = useRouter();
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
  const [cardsVisibility, setCardsVisibility] = useState({
    1: true,
    2: true,
    3: true,
  });
  function handleTryagain(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    setAssessmentResult(null);
    setCardsVisibility({
      ...cardsVisibility, 
      1: true,
      2: true,
      3: true,
    });
  };
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Simulated fetch response
      // const data: AssessmentResult = {
      //   score: 4,
      //   text1: 'The response text that you want to display in the first card.',
      //   text2: 'Another response text for the second card.',
      //   text3: 'Further response text for the third card.',
      // };

      const formdata = new FormData();
      formdata.append("question", body);
      formdata.append("instruction", "Take this question/body text from the user and generate 3 suggestions in JSON format only in the format of {'score': <0 if the question is not grammatically correct. 0 if the question has less than 4 words. 1 if the question is incomplete logically. Else, use cosine similarity to give the question a score. Compare the question to the following sentences to calculate the similarity score and scale it from 1 to 5. sentence 1 : 'Rising mental health problems in the United States have become a significant health concern with various factors contributing to it.', sentence 2: 'The escalating prevalence of mental health issues in the United States has emerged as a pressing public health challenge, influenced by multiple contributing factors.', sentence 3: 'Increasing mental health issues across the United States pose a substantial public health dilemma, driven by a range of influencing factors.', sentence 4: 'The surge in mental health challenges within the United States represents a major health crisis, influenced by a multitude of contributing factors.', sentence 5: 'Elevated rates of mental health difficulties within the United States are now a prominent health issue, influenced by various contributing factors.'>, 'text1: <suggestion as text>, 'text2': : <suggestion as text>, 'text3': <suggestion as text>}.");
      console.log(formdata);
      const requestOptions: RequestInit = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };


      // const formData = new FormData(event.currentTarget); // entire form data is captured here
      const response = await fetch('https://us-central1-encoded-antenna-362401.cloudfunctions.net/python-http-function', requestOptions);
      const responseGPT = await response.text()

      try {
        const parsedData = JSON.parse(responseGPT);
        const data: AssessmentResult = {
          score: JSON.parse(JSON.parse(parsedData.body)).score,
          text1: JSON.parse(JSON.parse(parsedData.body)).text1,
          text2: JSON.parse(JSON.parse(parsedData.body)).text2,
          text3: JSON.parse(JSON.parse(parsedData.body)).text3,
        };
        setAssessmentResult(data);
        console.log(data);

      } catch (error) {
        console.error('Error parsing JSON:', error);
      }

      setIsLoading(false);
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckClick = (cardNumber: number) => {
    if (assessmentResult) {
      const textKey = `text${cardNumber}` as keyof AssessmentResult;
      const text = assessmentResult[textKey];
      if (typeof text === 'string') {
        setBody(text);
      }
    }
  };

  const handleCrossClick = (cardNumber: number) => {
    setCardsVisibility((prevState) => ({ ...prevState, [cardNumber]: false }));
  };

  const score = assessmentResult ? assessmentResult.score : 0;
  const assessment = scoreMappings[score];

  if (assessmentResult) {
    return (
      <div className='w-full max-w-[1301px] mx-14'>
        <div className='flex flex-row max-md:flex-col max-md:gap-50'>
          <div className='flex-grow bg-white p-5'>
            <div className='flex gap-1 justify-between self-start text-black'>
              <Link href='/module1/stage6'>
                <button>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c'
                    className='shrink-0 my-auto w-10 aspect-square'
                  />
                </button>
              </Link>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col w-2/3'>
                <div className='flex flex-col justify-end px-5'>
                  <div className='text-xs'>Problem Statement</div>
                  <div className='mt-1 text-xl font-bold'>
                    Let’s get hands on!
                  </div>
                </div>
                <div className='mt-10 ml-4 text-base text-black'>
                  Your Assessment
                </div>
                {/* Star logic goes here based on assessment.score*/}
                <div className='flex gap-1 items-center text-3xl font-bold tracking-wider'>
                  <div
                    className={`px-4 py-3.5 rounded-md ${assessment?.color}`}
                  >
                    {assessment?.text}
                  </div>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`my-auto ${
                        index < score ? assessment?.color : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className='flex flex-col w-4/5'>
                
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className='justify-center px-3.5 py-3.5 mt-2 text-base rounded-lg border border-solid border-zinc-300 text-black resize-vertical'
                  
                />

                {(<div className='flex justify-end'>
               
              <button
                type='button'
                onClick={handleTryagain}
                className='px-10 py-2.5 mt-4 mb-4 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300'
              >
                Evaluate again?
                
              </button>
              
              <Link href={'../module1/complete'} passHref>
              <button
                type='submit'
                disabled={isLoading}
                className='px-10 py-2.5 ml-4 mt-4 mb-4 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300'
              >
                {'Finalize'}
                
              </button>  
              </Link>      
                  
       
            </div>)}
            </div>
              </div>
              {/* The 3 AI responses will be displayed here. */}
              <div className='flex flex-col w-1/3'>
                {Object.entries(cardsVisibility).map(
                  ([cardNumber, isVisible]) =>
                    isVisible && (
                      <AICard
                        key={cardNumber}
                        cardNumber={cardNumber}
                        text={(assessmentResult as any)[`text${cardNumber}`]}
                        onCheckClick={() =>
                          handleCheckClick(Number(cardNumber))
                        }
                        onCrossClick={() =>
                          handleCrossClick(Number(cardNumber))
                        }
                      />
                    )
                )}
              </div>
            </div>

            {/* Finalize button */}
            
          </div>


          <Sidebar moduleNumber={'1'}>
            <SidebarItem
              number='1'
              text='Choose your Interest'
              active={false}
              stageNumber='6'
              href='/module1/stage1'
            />
            <SidebarItem
              number='2'
              text='What goes into problem statement?'
              stageNumber='6'
              active={false}
              href='/module1/stage2'
            />
            <SidebarItem
              number='3'
              text='Conducting ‘problem-based’ deductive research'
              stageNumber='6'
              active={false}
              href='/module1/stage3'
            />
            <SidebarItem
              number='4'
              text='The Three Criteria'
              stageNumber='6'
              active={false}
              href='/module1/stage4'
            />
            <SidebarItem
              number='5'
              text='Examples of problem statements'
              stageNumber='6'
              active={false}
              href='/module1/stage5'
            />
            <SidebarItem
              number='6'
              text='Let’s get hands on!'
              stageNumber='6'
              active={true}
              href='/module1/stage6'
            />
          </Sidebar>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-[1301px] mx-14'>
      <div className='flex flex-row max-md:flex-col max-md:gap-50'>
        <div className='flex-grow bg-white p-5'>
          <div className='flex gap-1 justify-between self-start text-black'>
            <Link href='/module1/stage5'>
              <button>
                <img
                  loading='lazy'
                  src='../860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc.svg'
                  className='shrink-0 my-auto w-10 aspect-square'
                />
              </button>
            </Link>
          </div>
          <div className='flex flex-col justify-end px-5'>
            <div className='text-xs'>Problem Statement</div>
            <div className='mt-1 text-xl font-bold'>Let’s get hands on!</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-3/5'>
            <div className='mt-12 text-base font-bold text-black'>
              Write your own problem statement below
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='justify-center px-3.5 py-3.5 mt-2 text-base rounded-lg border border-solid border-zinc-300 text-black resize-vertical'
              placeholder='Problem statement goes here...'
              rows={6}
            />
            {(<div className='flex justify-end'>
              <button
                type='submit'
                disabled={isLoading}
                className='px-10 py-2.5 mt-4 mb-4 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300'
              >
                {isLoading ? 'Submitting...' : 'Evaluate with AI'}
                
              </button>
                   
                  
       
            </div>)}
            </div>
          </form>
        </div>
        <Sidebar moduleNumber={'1'}>
          <SidebarItem
            number='1'
            text='Choose your Interest'
            active={false}
            stageNumber='6'
            href='/module1/stage1'
          />
          <SidebarItem
            number='2'
            text='What goes into problem statement?'
            stageNumber='6'
            active={false}
            href='/module1/stage2'
          />
          <SidebarItem
            number='3'
            text='Conducting ‘problem-based’ deductive research'
            stageNumber='6'
            active={false}
            href='/module1/stage3'
          />
          <SidebarItem
            number='4'
            text='The Three Criteria'
            stageNumber='6'
            active={false}
            href='/module1/stage4'
          />
          <SidebarItem
            number='5'
            text='Examples of problem statements'
            stageNumber='6'
            active={false}
            href='/module1/stage5'
          />
          <SidebarItem
            number='6'
            text='Let’s get hands on!'
            stageNumber='6'
            active={true}
            href='/module1/stage6'
          />
        </Sidebar>
      </div>
    </div>
  );
}
