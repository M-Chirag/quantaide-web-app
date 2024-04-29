"use client";   
import React, { useState, FormEvent } from 'react';
import { Star, CircleX, CircleCheck  } from 'lucide-react';
import { useRouter } from "next/navigation";
import { AICard } from '../AICard'; 

import Link from 'next/link';
import { Sidebar, SidebarItem } from '../Sidebar'; 
import { data } from 'autoprefixer';



// Define the AssessmentResult type outside of your component
type AssessmentResult = {
  score: number;
  text1: string;
  text2: string;
  text3: string;
};

// Define the score mappings outside the function since they do not depend on component scope
const scoreMappings: { [key: number]: { text: string; color: string } } = {
  0: { text: 'Let\'s try again', color: 'text-red-500' },
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulated fetch response
      const data: AssessmentResult = {
        score: 4,
        text1: "The response text that you want to display in the first card.",
        text2: "Another response text for the second card.",
        text3: "Further response text for the third card.",
      };
      
      setIsLoading(false);
      setAssessmentResult(data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
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
    setCardsVisibility(prevState => ({ ...prevState, [cardNumber]: false }));
  };
  const score = assessmentResult ? assessmentResult.score : 0;
  const assessment = scoreMappings[score];
  

  if (assessmentResult) {
    return (
       <div className="w-full max-w-[1301px] mx-14">
      <div className="flex flex-row max-md:flex-col max-md:gap-50">
        <div className="flex-grow bg-white p-5">
          <div className="flex gap-1 justify-between self-start text-black">
            <Link href="/module1/stage2">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c"
                  className="shrink-0 my-auto w-10 aspect-square"
                />
              </button>
            </Link>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col w-2/3'>
          <div className="flex flex-col justify-end px-5">
                      <div className="text-xs">Problem Statement</div>
                      <div className="mt-1 text-xl font-bold">
                        Let’s get hands on!
                      </div>
                    </div>
            <div className="mt-10 ml-4 text-base text-black">
              Your Assessment
            </div>
            {/* Star logic goes here based on assessment.score*/}
            <div className="flex gap-1 items-center text-3xl font-bold tracking-wider">
    <div className={`px-4 py-3.5 rounded-md ${assessment?.color}`}>
      {assessment?.text}
    </div>
    {[...Array(5)].map((_, index) => (
      <Star key={index} className={`my-auto ${index < score ? assessment?.color : 'text-gray-300'}`} />
    ))}
  </div>
            <div
              className="flex flex-row justify-center w-4/7 h-1/3 px-3.5 py-3.5 mt-2 text-base rounded-lg border border-solid border-zinc-300 text-black resize-vertical"
            >{body}</div>
</div>
          {/* The 3 AI responses will be displayed here. */}
              <div className="flex flex-col w-1/3">
            
              {Object.entries(cardsVisibility).map(([cardNumber, isVisible]) => (
        isVisible && (
                  <AICard
                     key={cardNumber}
            cardNumber={cardNumber}
            text={(assessmentResult as any)[`text${cardNumber}`]}
            onCheckClick={() => handleCheckClick(Number(cardNumber))}
            onCrossClick={() => handleCrossClick(Number(cardNumber))}
          />
        )
      ))}
              </div>
              
        </div>
            
            
            {/* Finalize button */}
            <div className="flex justify-end mt-10">
              <Link href={"../module1/complete"} passHref><button
                type="submit"
                className="px-10 py-2.5 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300"
              >
                Finalize
              </button></Link>
            </div>
          </div>
          
        <Sidebar>
          <SidebarItem number="1" text="Choose your Interest" active={false} stageNumber="6" href="/module1/stage1" />
              <SidebarItem number="2" text="What goes into problem statement?" stageNumber="6" active={false} href="/module1/stage2" />
              <SidebarItem number="3" text="Conducting ‘problem-based’ deductive research" stageNumber="6" active={false} href="/module1/stage3" />
              <SidebarItem number="4" text="The Three Criteria" stageNumber="6" active={false} href="/module1/stage4" />
              <SidebarItem number="5" text="Examples of problem statements" stageNumber="6" active={false} href="/module1/stage5" />
              <SidebarItem number="6" text="Let’s get hands on!" stageNumber="6" active={true} href="/module1/stage6" />
        </Sidebar>
      </div>
    </div>
  
);
}

  return (
    <div className="w-full max-w-[1301px] mx-14">
      <div className="flex flex-row max-md:flex-col max-md:gap-50">
        <div className="flex-grow bg-white p-5">
          <div className="flex gap-1 justify-between self-start text-black">
            <Link href="/module1/stage2">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c"
                  className="shrink-0 my-auto w-10 aspect-square"
                />
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-end px-5">
                      <div className="text-xs">Problem Statement</div>
                      <div className="mt-1 text-xl font-bold">
                        Let’s get hands on!
                      </div>
                    </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-12 text-base font-bold text-black">
              Write your own problem statement below
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="justify-center w-full px-3.5 py-3.5 mt-2 text-base rounded-lg border border-solid border-zinc-300 text-black resize-vertical"
              placeholder="Problem statement goes here..."
              rows={6}
            />
            <div className="flex justify-end mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className="px-10 py-2.5 text-base font-bold text-white bg-amber-500 rounded-md disabled:bg-amber-300"
              >
                {isLoading ? 'Submitting...' : 'Done'}
              </button>
            </div>
          </form>
        </div>
        <Sidebar>
          <SidebarItem number="1" text="Choose your Interest" active={false} stageNumber="6" href="/module1/stage1" />
              <SidebarItem number="2" text="What goes into problem statement?" stageNumber="6" active={false} href="/module1/stage2" />
              <SidebarItem number="3" text="Conducting ‘problem-based’ deductive research" stageNumber="6" active={false} href="/module1/stage3" />
              <SidebarItem number="4" text="The Three Criteria" stageNumber="6" active={false} href="/module1/stage4" />
              <SidebarItem number="5" text="Examples of problem statements" stageNumber="6" active={false} href="/module1/stage5" />
              <SidebarItem number="6" text="Let’s get hands on!" stageNumber="6" active={true} href="/module1/stage6" />
        </Sidebar>
      </div>
    </div>
  );
}