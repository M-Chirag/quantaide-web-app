'use client';
import { useContext, createContext, useState } from 'react';
import { PanelLeft, ChevronLast, ChevronFirst } from 'lucide-react';
import Link from 'next/link';

const SidebarContext = createContext(null);


export function Sidebar({ moduleNumber, children, expandedState }) {
  const [expanded, setExpanded] = useState(expandedState);
  return (
    <aside className={`h-screen fixed mt-8 z-0 right-0 bg-white border-l-0 border-t-0 shadow-md ${expanded ? '' : 'hover:bg-#C9C9C9'};`}>
      <nav className='h-full flex flex-col border-r shadow-sm'>
        <div className='p-4 flex justify-between items-start'>
          <div
            className={`flex flex-col ${expanded ? 'space-y-2' : 'space-y-0'}`}
          >
            <div className='flex items-center'>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200'
              >
                {expanded ? <ChevronLast /> : <ChevronFirst />}
              </button>

              <span
                className={`transition-all text-lg font-sans ml-2 ${
                  expanded ? 'block' : 'hidden'
                }`}
              >
                Module {moduleNumber}
              </span>
            </div>
            <span
              className={`transition-all text-xs ${
                expanded ? 'block' : 'hidden'
              }`}
            >
              Your Progress
            </span>
            
          </div>
          
        </div>
        
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
      
      </nav>
      
    </aside>
  );
}

export function SidebarItem({ number, text, active, stageNumber, href }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <Link href={href} passHref>
      <li
        className={`relative flex py-2 px-3 my-3 rounded-md cursor-pointer transition-colors group ${
          expanded
            ? active ? 'font-bold text-gray-900 border border-gray-900'
            : ' border border-gray-100 text-black hover:bg-gray-200 hover:text-gray-700'
            : ''
        }`}
      >
        

        <span
          className={`${
            expanded
              ? 'inline-flex items-center justify-center  h-8 w-8 rounded-full text-xs  border-gray-200'
              : 'hidden'
          }
                            ${
                              parseInt(number) < parseInt(stageNumber)
                                ? 'text-green-800 bg-green-100'
                                : 'text-black bg-gray-100'
                            }
                          `}
        >
          {number}
        </span>
        <span
          className={`overflow-hidden transition-all ${
            expanded
              ? ' text-gray-700 w-72 ml-4 inline-flex items-center text-sm font-sans'
              : 'w-0'
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
}
