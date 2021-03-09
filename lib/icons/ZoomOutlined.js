"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function ZoomOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      className: "zoom-outlined_svg__icon",
      viewBox: "0 0 1024 1024"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M896 128v288c0 19.2-12.8 32-32 32s-32-12.8-32-32V236.8L633.6 441.6c-6.4 6.4-19.2 6.4-25.6 6.4s-19.2 0-25.6-6.4c-6.4-12.8-6.4-38.4 0-51.2L787.2 192H608c-19.2 0-32-12.8-32-32s12.8-32 32-32h288zM441.6 582.4c-12.8-6.4-38.4-12.8-51.2 0L192 787.2V608c0-19.2-12.8-32-32-32s-32 12.8-32 32v288h288c19.2 0 32-12.8 32-32s-12.8-32-32-32H236.8l204.8-198.4c6.4-12.8 6.4-38.4 0-51.2zM448 160c0-19.2-12.8-32-32-32H128v288c0 19.2 12.8 32 32 32s32-12.8 32-32V236.8l198.4 198.4C396.8 448 409.6 448 416 448s19.2 0 25.6-6.4c6.4-12.8 6.4-38.4 0-51.2L236.8 192H416c19.2 0 32-12.8 32-32zm416 416c-19.2 0-32 12.8-32 32v179.2L633.6 588.8c-12.8-12.8-38.4-12.8-51.2 0-6.4 12.8-6.4 32 0 44.8L780.8 832H608c-19.2 0-32 12.8-32 32s12.8 32 32 32h288V608c0-19.2-12.8-32-32-32z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ZoomOutlined.displayName = "ZoomOutlined";
var _default = ZoomOutlined;
exports["default"] = _default;