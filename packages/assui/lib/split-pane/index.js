"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_split_pane_1 = tslib_1.__importDefault(require("react-split-pane"));
var SplitPane = function SplitPane(props) {
  return (0, jsx_runtime_1.jsx)(react_split_pane_1["default"], _extends({}, props));
};
exports["default"] = SplitPane;