"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _CloseCircle = _interopRequireDefault(require("./components/base/CloseCircle"));

var CloseCircleOutlined = function CloseCircleOutlined(props) {
  return /*#__PURE__*/_react["default"].createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: _CloseCircle["default"]
  }));
};

var _default = CloseCircleOutlined;
exports["default"] = _default;