import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quantaide',
  description: 'Capstone Project for MIMS 2024',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-full w-full'>
          <div className='flex md:flex-col mb-10'>
            <div className='flex md:flex-col justify-center items-start px-10 w-full text-4xl text-amber-500 max-md:px-5 max-md:max-w-full'>
              <Link href='/'>
                <nav style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', width: '100%', padding: '10px 32px', alignItems: 'center', gap: '16px', background: '#FEFEFE', boxShadow: '4px 0px 12px 0px rgba(0, 0, 0, 0.10)' }}>
                  <div className='flex gap-0.2'>
                    <img
                      loading='lazy'
                      src='../Logo_final.png'
                      className='shrink-0 self-start object-contain w-[120px] h-[42px] mt-2.5'
                      alt='Logo'
                    />
                  {/* <div className='justify-center py-2 mt-n1'>uantaide</div> */}
                  </div>
                </nav>
              </Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
