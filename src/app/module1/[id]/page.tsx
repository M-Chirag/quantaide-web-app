import SideBar from '../Components/sidebar';

export default function Module({params}) {
  return (

      <div className="w-full max-w-[1301px] ml-14 mr-14">
        <div className="flex flex-row max-md:flex-col max-md:gap-50">
          
            <SideBar  StageNumber={params.id}/>        
          
        </div>
      </div>

  );
}

