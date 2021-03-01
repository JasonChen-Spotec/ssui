"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function Doc(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "doc_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".doc_svg__st0{fill:#285a83}.doc_svg__st1{fill:#ef6f53}"), /*#__PURE__*/React.createElement("path", {
      className: "doc_svg__st0",
      d: "M3.8 12.9h-.4c-.9 0-1.6-.7-1.6-1.6v-.1c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v.1c-.1.9-.8 1.6-1.7 1.6zm-.4-2.3c-.4 0-.7.3-.7.7v.1c0 .3.3.6.7.6h.5c.4 0 .7-.3.7-.7v-.1c0-.4-.3-.7-.7-.7h-.5z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "doc_svg__st0",
      d: "M14.4 14.9H1.6c-.9 0-1.6-.7-1.6-1.6V2.6C0 1.7.7 1 1.6 1h12.9c.9 0 1.6.7 1.6 1.6v10.7c-.1.9-.8 1.6-1.7 1.6zM1.6 2c-.4 0-.7.3-.7.6v10.7c0 .4.3.7.7.7h12.9c.4 0 .7-.3.7-.7V2.6c0-.4-.3-.7-.7-.7H1.6z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "doc_svg__st1",
      d: "M13.8 4.9H2.2c-.2 0-.4-.2-.4-.5S2 4 2.2 4h11.5c.2 0 .5.2.5.5s-.2.4-.4.4zM13.8 7.1H2.2c-.2 0-.4-.2-.4-.5 0-.2.2-.5.5-.5h11.5c.2 0 .5.2.5.5-.1.3-.3.5-.5.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

Doc.displayName = "Doc";
var _default = Doc;
exports["default"] = _default;