"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _echarts = _interopRequireDefault(require("echarts"));

var _core = _interopRequireDefault(require("./core"));

var ReactEcharts = function ReactEcharts(props) {
  return /*#__PURE__*/_react["default"].createElement(_core["default"], (0, _extends2["default"])({
    echarts: _echarts["default"]
  }, props));
};

var _default = ReactEcharts;
exports["default"] = _default;