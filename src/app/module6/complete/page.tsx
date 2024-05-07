import Link from 'next/link';

export default function Module1Complete() {
  return (
    <div className='flex flex-col pb-20 bg-white'>
      <div className='flex justify-center items-center px-16 py-16 w-full rounded bg-green-400 bg-opacity-10 max-md:px-5 max-md:max-w-full'>
        <div className='max-w-full w-[823px]'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[24%] max-md:ml-0 max-md:w-full'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/e2e98d137cf2f8ce8e4e0546130cb59e117ffa86dc118d2140dba235cc2fd971?apiKey=2a09c3227636445ca6cca45824f0323c&'
                className='grow shrink-0 max-w-full aspect-[0.78] fill-green-700 w-[171px] max-md:mt-10'
              />
            </div>
            <div className='flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col self-stretch my-auto text-3xl font-bold text-green-700 max-md:mt-10 max-md:max-w-full'>
                <div className='max-md:max-w-full'>Congratulations,</div>
                <div className='mt-6 max-md:max-w-full'>
                  You successfully designed a survey!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href='/'>
        <div className='flex justify-center'>
          <div className='px-4 py-2 mt-12 text-base font-bold text-white whitespace-nowrap bg-amber-500 rounded-md max-md:px-5 max-md:mt-10' style={{maxWidth:'100px'}}>
            Share
          </div>
        </div>
      </Link>
    </div>
  );
}
