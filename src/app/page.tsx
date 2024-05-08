import Image from 'next/image';
import ModuleCard from '../components/ModuleCard';
import Link from 'next/link';
// import { Sidebar,SidebarItem } from './module1/Sidebar';
// import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className='bg-amber-500 text-white text-center p-1 mt-20'>
        <p className='font-medium'>
          🚧 We are currently in development. Only Modules 1 and 6 are fully
          available. Stay tuned for more updates!
        </p>
      </div>
      <div className='flex md:flex-row justify-between'>
        <div
          className='ml-40 flex flex-col w-4/5'
          style={{ minWidth: '590px' }}
        >
          <div className='font-bold text-2xl ml-3 mt-20'> Dashboard </div>
          <div
            className='flex items-center ml-3 mt-2'
            style={{
              color: '#000',
              fontFamily: 'Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Join us as we guide you through the process of survey design in our
            comprehensive modules.
          </div>

          <div
            className='w-4/6 mt-10'
            style={{ minWidth: '390px', maxWidth: '390px' }}
          >
            <ModuleCard
              moduleNumber={1}
              title='Problem Statement'
              summary='Summarize the content for your study.'
              mainTile={1}
              imageSrc='problem_statement.png'
            />
          </div>
        </div>

        <div className='flex flex-col mt-20 justify-start items-end w-4/5'>
          <div className='text-end font-semibold'> 6 modules </div>
          <div
            className='flex flex-col mt-20 h-2/5 p-1 rounded-md overflow-y-scroll'
            style={{
              overflowY: 'scroll',
              minWidth: '390px',
              maxWidth: '590px',
              maxHeight: '1300px',
              minHeight: '520px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.5) transparent',
            }}
          >
            <Link href='/module2/stage1'>
              <ModuleCard
                moduleNumber={2}
                title='Justification'
                summary='Justify why this problem matters.'
                mainTile={1}
                imageSrc='../27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3.png'
              />
            </Link>
            <Link href='/module3/stage1'>
              <ModuleCard
                moduleNumber={3}
                title='Argument'
                summary='Argue what might resolve your problem with clarity.'
                mainTile={1}
                imageSrc='../d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3.png'
              />
            </Link>
            <Link href='/module4/stage1'>
              <ModuleCard
                moduleNumber={4}
                title='Research Question'
                summary='Through questions, inquire relationships among variables.'
                mainTile={1}
                imageSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400'
              />
            </Link>
            <Link href='/module5/stage1'>
              <ModuleCard
                moduleNumber={5}
                title='Hypothesis Formulation'
                summary='Build testable hypotheses to predict a relationship between variables.'
                mainTile={1}
                imageSrc='hypothesis_formpng.png'
              />
            </Link>
            <Link href='/module6/stage1'>
              <ModuleCard
                moduleNumber={6}
                title='Question Formulation'
                summary='Create your survey.'
                mainTile={1}
                imageSrc='question_formulation.png'
              />
            </Link>
          </div>
        </div>
        <div className='w-1/6' style={{ minWidth: '150px' }}></div>
      </div>
    </div>
  );
}
