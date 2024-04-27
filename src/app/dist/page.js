"use strict";
exports.__esModule = true;
var ModuleCard_1 = require("../components/ModuleCard");
var Sidebar_1 = require("../components/Sidebar");
var Sidebar_2 = require("../components/Sidebar");
var lucide_react_1 = require("lucide-react");
function Home() {
    return (React.createElement("div", { className: "flex md:flex-row" },
        React.createElement(ModuleCard_1["default"], { moduleNumber: 1, title: "Problem Statement 1", summary: "Summarize the content for your study.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d533dab53b43aa726d7f5c4d0ba523d255f7861d546f842e687cfdfae944d48c?apiKey=2a09c3227636445ca6cca45824f0323c&width=400" }),
        React.createElement(Sidebar_1.Sidebar, null,
            React.createElement(Sidebar_2.SidebarItem, { icon: React.createElement(lucide_react_1.HomeIcon, null), text: "Dashboard", active: true }),
            React.createElement(Sidebar_2.SidebarItem, { icon: React.createElement(lucide_react_1.SettingsIcon, null), text: "Settings", active: false }),
            React.createElement(Sidebar_2.SidebarItem, { icon: React.createElement(lucide_react_1.LayoutDashboard, null), text: "Notifications", active: false }))));
}
exports["default"] = Home;
