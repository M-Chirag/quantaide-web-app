'use client';
import { useContext, createContext, useState } from 'react';
import { PanelLeft, ChevronLast, ChevronFirst } from 'lucide-react';
import Link from 'next/link';

const SidebarContext = createContext(null);

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className='h-screen fixed right-7'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <PanelLeft
            className={`shrink-0 aspect-[0.4] mt-2.5 overflow-hidden transition-all ${
              expanded ? 'w-6 h-6' : 'w-0 h-0'
            }`}
          />
          <span className={`transition-all ${expanded ? 'inline' : 'hidden'}`}>
            Module 1
          </span>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ number, text, active, href }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={href} passHref>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? 'border-b-2 border-black text-black'
            : 'text-gray-600 hover:bg-gray-300 hover:text-gray-700'
        }`}
      >
        {/* {icon} */}

        <span className={`font-bold ${expanded ? '' : 'hidden'}`}>
          {number}
        </span>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? 'w-72 ml-5' : 'w-0'
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
}
