"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _Close = _interopRequireDefault(require("./components/base/Close"));

var CloseOutlined = function CloseOutlined(props) {
  return /*#__PURE__*/_react["default"].createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: _Close["default"]
  }));
};

var _default = CloseOutlined;
exports["default"] = _default;