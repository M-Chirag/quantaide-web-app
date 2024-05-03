import Link from 'next/link';
const ModuleCard = ({ moduleNumber, title, summary, mainTile, imageSrc }) => {
  if (moduleNumber !== mainTile) {
    return (
      <div
        className={`flex flex-col 
                      px-6 py-6 mt-4 
                      max-w-full 
                      text-base text-black bg-white rounded-2xl 
                      border border-gray-300 
                      shadow-lg max-md:px-5 max-md:mt-10 max-md:ml-2.5`}
      >
        <div className='text-xs'>Module {moduleNumber}</div>
        <div className='flex flex-row'>
          <img
            loading='lazy'
            src={imageSrc}
            className={`mt-4 w-30 h-20 aspect-[1.45]`}
            alt='Module illustration'
          />
          <div className='flex flex-col mt-5 ml-6'>
            <div className='text-xl font-bold'>{title}</div>
            <div className='text-xs mt-2'>{summary}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col 
                    px-9 py-10
                    max-w-full 
                    text-base text-black bg-white rounded-2xl 
                    border border-gray-300 
                    shadow-lg max-md:px-5 max-md:mt-10 max-md:ml-2.5`}
    >
      <div className='text-xs'>Module {moduleNumber}</div>
      <img
        loading='lazy'
        src={imageSrc}
        className={`mt-1 w-80 h-60`}
        alt='Module illustration'
      />
      <div className='mt-6 text-xl font-bold'>{title}</div>
      <div className='mt-3.5'>{summary}</div>

      <div className='flex justify-center'>
        <Link href='/module1/stage1'>
          <button className='justify-center self-center px-10 py-2.5 mt-8 font-bold text-white whitespace-nowrap bg-amber-500 rounded-md max-md:px-5 cursor-pointer'>
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleCard;
