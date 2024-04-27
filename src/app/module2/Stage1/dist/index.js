"use strict";
exports.__esModule = true;
// Stage1/index.tsx
var react_1 = require("react");
var Stage1 = function () {
    var _a = react_1.useState(''), data = _a[0], setData = _a[1];
    var handleDataChange = function (event) {
        setData(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, "Stage 1"),
        react_1["default"].createElement("input", { type: "text", value: data, onChange: handleDataChange })));
};
exports["default"] = Stage1;
