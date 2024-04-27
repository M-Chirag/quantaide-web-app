import Image from "next/image";
import ModuleCard from '../components/ModuleCard';
// import { Sidebar,SidebarItem } from './module1/Sidebar'; 
// import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
export default function Home() {
  return (
      <div className="flex md:flex-row">
        <ModuleCard 
          moduleNumber={1}
          title="Problem Statement 1"
          summary="Summarize the content for your study."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400"
      />
      </div>
  );
}
