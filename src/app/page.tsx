import Image from "next/image";
import ModuleCard from '../components/ModuleCard';

export default function Home() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex flex-col justify-center items-start px-8 py-2.5 w-full text-3xl text-amber-500 whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/187bd80cf52f75aedeb008493f9b6b39d8a2b52dc04bab43aa927c8b2f6119d1?apiKey=2a09c3227636445ca6cca45824f0323c&"
            className="shrink-0 self-start aspect-[0.94] w-[35px]"
          />
          <div className="justify-center py-2">uantaide</div>
        </div>
      </div>
      <ModuleCard />
    </div>
  );
}
