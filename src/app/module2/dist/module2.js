"use strict";
exports.__esModule = true;
// Module1.tsx
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("./Stage1/index");
var index_2 = require("./Stage2/index");
var Module2 = function () {
    var _a = react_1.useState(''), data = _a[0], setData = _a[1];
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/module2/Stage1" },
                react_1["default"].createElement(index_1["default"], { setData: setData })),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/module2/Stage2" },
                react_1["default"].createElement(index_2["default"], { data: data })))));
};
exports["default"] = Module2;
