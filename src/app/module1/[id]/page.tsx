import SideBar from '../Components/sidebar';
import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';
import Stage3 from '../Stages/Stage3';
import Stage4 from './Stages/Stage4';
import Stage5 from './Stages/Stage5';
import Stage6 from './Stages/Stage6';


const stages = {
  1: <Stage1 />,
  2: <Stage2 />,
  3: <Stage3 />,
  4: <Stage4 />,
  5: <Stage5 />,
  6: <Stage6 />,
};   
interface Params {
  id: keyof typeof stages;

}

export default function Module({params} : { params: Params }) {
  return (

        

        <div className="w-full max-w-[1301px] ml-14 mr-14">
        <div className="flex flex-row max-md:flex-col max-md:gap-50">
            
            const StageRouter = stages[params.id] || <div>Invalid stage</div>;
            <SideBar  StageNumber={params.id}/>                 
        </div>
      </div>

  );
}

