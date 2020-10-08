"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _UserAdd = _interopRequireDefault(require("./components/base/UserAdd"));

var UserAddOutlined = function UserAddOutlined(props) {
  return /*#__PURE__*/_react["default"].createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: _UserAdd["default"]
  }));
};

var _default = UserAddOutlined;
exports["default"] = _default;