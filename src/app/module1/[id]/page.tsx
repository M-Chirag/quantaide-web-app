import SideBar from '../Components/sidebar';
import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';


const stages = {
  1: <Stage1 />,
  2: <Stage2 />,
  // Add other stages here as needed
}; 

interface Params {
  id: keyof typeof stages;

}

export default function Module({params} : { params: Params }) {
  
  // Retrieve the stage component based on the current stage ID
  const StageRouter = stages[params.id] || <div>Invalid stage</div>;
  return (
      <div className="w-full max-w-[1301px] ml-14 mr-14">
            {StageRouter}          
      </div>
  );
}

