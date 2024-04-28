"use strict";
exports.__esModule = true;
var ModuleCard_1 = require("../components/ModuleCard");
// import { Sidebar,SidebarItem } from './module1/Sidebar'; 
// import { HomeIcon, SettingsIcon, LayoutDashboard  } from "lucide-react";
function Home() {
    return (React.createElement("div", { className: "flex flex-col w-screen h-screen overflow-hidden" },
        React.createElement("div", { className: "flex flex-row justify-center" },
            React.createElement("div", { className: "w-1/5" }, " "),
            React.createElement("div", { className: "flex flex-col w-2/5" },
                React.createElement("div", { className: "ml-9 item-center font-bold text-2xl relative top-0 left-10" }, " Welcome! "),
                React.createElement("div", { className: "ml-9 item-center text-xl relative top-0 left-10" }, "Join us as guide your through the process of survey design in our comprehensive modules.")),
            React.createElement("div", { className: "w-1/5 text-center pl-80" }, "6 Modules"),
            React.createElement("div", { className: "w-1/5 " }, " ")),
        React.createElement("div", { className: "flex md:flex-row h-full mt-10 overflow-hidden" },
            React.createElement("div", { className: "w-1/5" }),
            React.createElement("div", { className: "w-1/5" },
                React.createElement("div", { className: "flex flex-col mr-3/5" },
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 1, title: "Problem Statement 1", summary: "Summarize the content for your study.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }))),
            React.createElement("div", { className: "w-1/5" }),
            React.createElement("div", { className: "flex flex-col align-top w-1/10" },
                React.createElement("div", { className: "flex flex-col h-full w-full", style: { overflowY: 'auto' } },
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 2, title: "Justification", summary: "Justify why this problem matters.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 3, title: "Argument", summary: "Argue what might resolve your problem with clarity.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 4, title: "Research Question", summary: "Through questions, inquire relationships among variables.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 5, title: "Hypothesis Formulation", summary: "Build testable hypotheses to predict a relationship between variables.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 6, title: "Question Formulation", summary: "Create your survey.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 5, title: "Hypothesis Formulation", summary: "Build testable hypotheses to predict a relationship between variables.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
                    React.createElement(ModuleCard_1["default"], { moduleNumber: 6, title: "Question Formulation", summary: "Create your survey.", mainTile: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }))),
            React.createElement("div", { className: "w-1/5" })),
        React.createElement("div", { className: "h-90 mb-96" })));
}
exports["default"] = Home;
