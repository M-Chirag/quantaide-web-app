'use client';
import { useContext, createContext, useState } from 'react';
import { PanelLeft, ChevronLast, ChevronFirst } from 'lucide-react';
import Link from 'next/link';

const SidebarContext = createContext(null);

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className='h-screen fixed right-1'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <div className='flex flex-row'>
            <PanelLeft
              className={`shrink-0 aspect-[0.4] mt-2.5 overflow-hidden transition-all ${
                expanded ? 'w-10 h-10 border rounded-full p-2 bg-gray-100 border-gray-100' : 'w-0 h-0'
              }`}
            />
            <span className={`transition-all items-center text-sm font-sans pt-5 ml-4 ${expanded ? 'inline' : 'hidden'}`}>
             Module 1
            </span>
          </div>  
          <div className='mt-2'>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className='ml-22 p-1.5 rounded-lg bg-gray-50 hover:bg-amber-500'
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
          </div>
        </div>
        <div className='ml-4 text-xs mt-4 mb-n1'>Your Progress</div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
        
      </nav>
    </aside>
  );
}

export function SidebarItem({ number, text, active, stageNumber,  href }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={href} passHref>
      <li
        className={`relative flex py-2 px-3 my-3 rounded-md cursor-pointer transition-colors group ${
          active
            ? 'font-bold text-gray-900 border border-gray-900'
            : ' border border-gray-200 text-black hover:bg-gray-200 hover:text-gray-700'
        }`}
      >
        {/* {icon} */}

        <span className={`${expanded ? 'inline-flex items-center justify-center  h-8 w-8 rounded-full text-xs bg-gray-100 text-black border-gray-200' : 'hidden'}`}>
          {number}
        </span>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? ' text-gray-700 w-72 ml-4 inline-flex items-center text-sm font-sans' : 'w-0'
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
}
