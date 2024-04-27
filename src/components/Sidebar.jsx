'use client';
import { useContext, createContext, useState } from 'react';
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';

const SidebarContext = createContext(null);

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className='h-screen fixed right-7'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/187bd80cf52f75aedeb008493f9b6b39d8a2b52dc04bab43aa927c8b2f6119d1?apiKey=2a09c3227636445ca6cca45824f0323c&'
            className={`shrink-0 aspect-[0.4] mt-2.5 overflow-hidden transition-all ${
              expanded ? 'w-25' : 'w-0'
            }`}
            alt='logo'
          />
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

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? 'border-b-2 border-black text-black' // Active state: black border and strong black text
          : 'text-gray-600 hover:bg-gray-300 hover:text-gray-700' // Default state and hover effects
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-72 ml-5' : 'w-0'
        }`}
      >
        {text}
      </span>
      {/* {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-gray-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )} */}

      {!expanded && (
        <div
          className={`absolute right-full rounded-md px-2 py-1 ml-6 bg-gray-300 text-black text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
