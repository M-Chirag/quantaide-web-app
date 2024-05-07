'use client';
import React from 'react';
import { CircleCheck, CircleX } from 'lucide-react';

export function AICard({ cardNumber, text, onCheckClick, onCrossClick }) {
  return (
    <div className='ml-5 mt-4 p-4 bg-white rounded-lg border border-amber-500 border-solid ' style={{maxWidth:'470px'}}>
      <div className='flex flex-col flex-1 justify-center'>
        <div className='flex justify-center items-center self-start p-2'>
          <img
            loading='lazy'
            src='../19e29c3d7422a2d35231dcd1f0f8b39abcae4c62edf6a2ec7ec112706f7bf50e.svg'
            className='aspect-[1.04] fill-amber-500 w-[25px]'
          />
        </div>

        <div className='justify-center text-base font-semibold leading-9 text-black'>
          AI Suggestion {cardNumber}
        </div>
        <div className='mt-2 text-base leading-7 text-black whitespace-normal'>{text}</div>

        <div className='flex gap-3 mt-3'>
          <button
            onClick={() => onCheckClick(cardNumber)}
            aria-label='Accept suggestion'
          >
            <CircleCheck className='text-green-500' size={28} />
          </button>
          <button
            onClick={() => onCrossClick(cardNumber)}
            aria-label='Reject suggestion'
          >
            <CircleX className='text-red-500' size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
