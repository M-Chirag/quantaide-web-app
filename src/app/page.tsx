import Image from "next/image";
import ModuleCard from '../components/ModuleCard';
// import { Sidebar,SidebarItem } from './module1/Sidebar'; 
// import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
                    <div className="flex flex-row justify-center">
                      <div className="w-1/5"> </div>
                        <div className="flex flex-col w-2/5">
                            <div className="ml-9 item-center font-bold text-2xl relative top-0 left-10"> Welcome! </div>
                            <div className="ml-9 item-center text-xl relative top-0 left-10">
                            Join us as guide your through the process of survey design in our comprehensive modules. 
                            </div>
                        </div>
                      <div className="w-1/5 text-center pl-80">6 Modules</div>
                      <div className="w-1/5 "> </div>
                    </div>
      
      <div className="flex md:flex-row h-full mt-10 overflow-hidden">
      <div className="w-1/5"></div> 
      <div className="w-2/5"> 
                            <div className="flex flex-col mr-3/5">
                            
                                              <ModuleCard 
                                                moduleNumber={1}
                                                title="Problem Statement 1"
                                                summary="Summarize the content for your study."
                                                mainTile = {1}
                                                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                                              /> 
                            </div>
        </div>
        <div className="w-1/5"></div> 
        <div className="flex flex-col align-top w-1/10">
        <div className="flex flex-col h-full w-full" style={{ overflowY: 'auto' }}>
                  <ModuleCard 
                    moduleNumber={2}
                    title="Justification"
                    summary="Justify why this problem matters."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27357dd94af2ca6a0cfe5e21d74c63bbc10df778c8d6b2357c707c2f3d9183d3?apiKey=2a09c3227636445ca6cca45824f0323c&"
                  />
                  <ModuleCard 
                    moduleNumber={3}
                    title="Argument"
                    summary="Argue what might resolve your problem with clarity."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2da962a5f2adbf6151cccafd66e5ef1842a7363b97c10c69a4edeec19b5e4a3?apiKey=2a09c3227636445ca6cca45824f0323c&"
                  />
                  <ModuleCard 
                    moduleNumber={4}
                    title="Research Question"
                    summary="Through questions, inquire relationships among variables."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                  />

                  <ModuleCard 
                    moduleNumber={5}
                    title="Hypothesis Formulation"
                    summary="Build testable hypotheses to predict a relationship between variables."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                  />
                  <ModuleCard 
                    moduleNumber={6}
                    title="Question Formulation"
                    summary="Create your survey."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                  />
                  <ModuleCard 
                    moduleNumber={7}
                    title="Hypothesis Formulation"
                    summary="Build testable hypotheses to predict a relationship between variables."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                  />
                  <ModuleCard 
                    moduleNumber={8}
                    title="Question Formulation"
                    summary="Create your survey."
                    mainTile = {1}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
                  />
         
        </div>
        
        </div>
       
        <div className="w-1/5"></div> 
        
      </div>
      <div className="h-10 mb-75"></div>
      </div>
  );
}
