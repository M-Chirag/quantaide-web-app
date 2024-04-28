"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Sidebar_1 = require("../Sidebar");
function Stage2() {
    return (react_1["default"].createElement("div", { className: "w-full max-w-[1301px] ml-14 mr-14" },
        react_1["default"].createElement("div", { className: "flex flex-row max-md:flex-col max-md:gap-50" },
            react_1["default"].createElement("div", { className: "flex flex-col bg-white" },
                react_1["default"].createElement("div", { className: "self-center w-full max-w-[1372px] max-md:max-w-full" },
                    react_1["default"].createElement("div", { className: "flex gap-5 max-md:flex-col max-md:gap-0" },
                        react_1["default"].createElement("div", { className: "flex flex-col w-[69%] max-md:ml-0 max-md:w-full" },
                            react_1["default"].createElement("div", { className: "flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full" },
                                react_1["default"].createElement("div", { className: "flex gap-5 self-start" },
                                    react_1["default"].createElement("img", { loading: "lazy", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/860d96c9cbbdfa6d1135252de5487b1f79a55f9cf012f94b3462c1601ceaaadc?apiKey=2a09c3227636445ca6cca45824f0323c&", className: "shrink-0 my-auto w-10 aspect-square" }),
                                    react_1["default"].createElement("div", { className: "flex flex-col grow shrink-0 justify-end px-5 basis-0 w-fit" },
                                        react_1["default"].createElement("div", { className: "text-xs" }, "Problem Statement"),
                                        react_1["default"].createElement("div", { className: "mt-1 text-xl font-bold" },
                                            "What is a problem statement?",
                                            " "))),
                                react_1["default"].createElement("div", { className: "flex flex-col pl-16 mt-11 text-base max-md:pl-5 max-md:mt-10 max-md:max-w-full" },
                                    react_1["default"].createElement("div", { className: "justify-center px-6 py-6 leading-7 bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full" }, "A problem statement summarizes \u201Cthe context for the study\u201D and the main problem the study seeks to address. Problem statements are not questions and are statements that point out an issue. With quantitive research, we start with a problem and do not conduct exploratory research where we look for interesting trends."),
                                    react_1["default"].createElement("div", { className: "mt-10 max-md:max-w-full" },
                                        "Typical research design process:",
                                        " "),
                                    react_1["default"].createElement("div", { className: "shrink-0 mt-4 h-80 rounded-lg bg-neutral-100 max-md:max-w-full" }),
                                    react_1["default"].createElement("div", { className: "justify-center self-end px-10 py-2.5 mt-7 font-bold text-white bg-amber-500 rounded-md max-md:px-5" },
                                        "Next",
                                        " "))))))),
            react_1["default"].createElement(Sidebar_1.Sidebar, null,
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "1", text: "Choose your Interest", active: false, stageNumber: 1, href: "/module1/Stage1" }),
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "2", text: "What goes into problem statement?", active: true, stageNumber: 2, href: "/module1/stage2" }),
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "3", text: "Conducting \u2018problem-based\u2019 deductive research", active: false, stageNumber: 3, href: "/module1/stage3" }),
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "4", text: "The Three Criteria", active: false, stageNumber: 4, href: "/module1/stage4" }),
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "5", text: "Examples of problem statements", active: false, stageNumber: 5, href: "/module1/stage5" }),
                react_1["default"].createElement(Sidebar_1.SidebarItem, { number: "6", text: "Let\u2019s get hands on!", active: false, stageNumber: 6, href: "/module1/stage6" })))));
}
exports["default"] = Stage2;
