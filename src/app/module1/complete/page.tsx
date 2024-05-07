import Link from 'next/link';

export default function Module1Complete() {
  return (
    <div className='flex flex-col pb-20 bg-white'>
      <div className='flex justify-center items-center px-16 py-16 w-full text-xl text-black rounded bg-green-400 bg-opacity-20 max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 justify-between max-w-full w-[842px] max-md:flex-wrap'>
          <img
            loading='lazy'
            src='../087a01cbbf2b75be759f9dd9f0f39c1ca635270e2e419a54fb9e3202d3b4fdeb.svg'
            className='shrink-0 max-w-full aspect-[0.47] w-[104px]'
          />
          <div className='flex flex-col my-auto max-md:max-w-full'>
            <div className='text-3xl font-bold text-green-700 max-md:max-w-full'>
              Yay, you completed Module 1!
            </div>
            <div className='mt-12 max-md:mt-10 max-md:max-w-full'>
              Did you know?{' '}
            </div>
            <div className='mt-4 max-md:max-w-full'>
              The sequence of questions in a survey can influence
              respondents&apos; answers, known as &quot;question order
              effects.&quot;
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col self-center px-5 mt-20 w-full max-w-[1117px] max-md:mt-10 max-md:max-w-full'>
        <div className='text-2xl font-bold text-black max-md:max-w-full'>
          What&apos;s next?{' '}
        </div>
        <div className='px-px mt-8 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow py-7 pr-3 pl-6 w-full text-base text-black bg-white rounded border border-gray-200 border-solid max-md:pl-5 max-md:mt-9'>
                <div className='text-xs'>Module 2</div>
                <img
                  loading='lazy'
                  srcSet='../27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3.png'
                  className='self-start mt-4 w-full aspect-[1.72]'
                />
                <div className='mt-5 text-xl font-bold'>Justification</div>
                <div className='mt-4'>
                  Now that we have created our problem statement, we must
                  justify why this problem matters.
                </div>
                <Link href={'../module2/stage1'} passHref>
                  <button className='ml-14 px-10 py-2.5 mt-10 text-base font-bold text-white bg-orange-400 rounded-md max-md:px-5 max-md:mt-10'>
                    Start
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow px-6 pt-6 pb-20 w-full text-black bg-white rounded border border-gray-200 border-solid max-md:px-5 max-md:mt-9'>
                <div className='text-xs'>Module 3</div>
                <img
                  loading='lazy'
                  srcSet='../d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3.png'
                  className='mt-4 w-full aspect-[1.72]'
                />
                <div className='mt-5 text-xl font-bold'>Argument</div>
                <div className='mt-3.5 mr-6 text-base max-md:mr-2.5'>
                  An argument explains what might resolve/address your problem,
                  using clear and concise language
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow pt-6 pb-20 pl-6 w-full bg-white rounded border border-gray-200 border-solid max-md:mt-9'>
                <div className='text-xs text-black'>Module 4</div>
                <div className='flex flex-col justify-center px-px mt-4 rounded bg-zinc-300 max-md:pr-5'>
                  <img
                    loading='lazy'
                    srcSet='../36613dda2bd9d3e8dfce3118be4052265a66b78b8274ad4608cd9590176496d1.png'
                    className='w-full aspect-[1.72]'
                  />
                </div>
                <div className='mt-5 text-xl font-bold text-black'>
                  Research Question
                </div>
                <div className='mt-4 text-base text-black'>
                  Quantitative research questions inquire about the
                  relationships among variables that the investigator seeks to
                  know.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
