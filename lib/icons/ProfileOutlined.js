"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function ProfileOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.8 0H3.2a2.14 2.14 0 00-2.14 2.13v11.74A2.14 2.14 0 003.2 16h9.6a2.14 2.14 0 002.13-2.13V2.13A2.14 2.14 0 0012.8 0zm1.06 13.87a1.06 1.06 0 01-1.06 1.06H3.2a1.06 1.06 0 01-1.07-1.06V2.13A1.06 1.06 0 013.2 1.07h9.6a1.06 1.06 0 011.06 1.06z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.49 4.27h-4.8a.53.53 0 000 1.06h4.8a.53.53 0 100-1.06zm0 3.2h-4.8a.53.53 0 000 1.06h4.8a.53.53 0 100-1.06zm0 3.2h-4.8a.53.53 0 100 1.06h4.8a.53.53 0 100-1.06zm-6.6-6.4H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06zm0 3.2H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06zm0 3.2H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = ProfileOutlined;
exports["default"] = _default;