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
          <div className='flex md:flex-col pb-20'>
            <div className='flex md:flex-col justify-center items-start px-10 py-5 w-full text-4xl text-amber-500 max-md:px-5 max-md:max-w-full'>
              <Link href='/'>
                <div className='flex gap-0.2'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/187bd80cf52f75aedeb008493f9b6b39d8a2b52dc04bab43aa927c8b2f6119d1?apiKey=2a09c3227636445ca6cca45824f0323c&'
                    className='shrink-0 self-start aspect-[0.94] w-[35px] mt-2.5'
                    alt='Logo'
                  />
                  <div className='justify-center py-2 mt-n1'>uantaide</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
