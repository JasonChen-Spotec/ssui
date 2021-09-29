"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FormOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.62 14.06H1.94a.52.52 0 01-.52-.52V4a.52.52 0 01.52-.52h4.89a.52.52 0 01.52.52.52.52 0 01-.52.52H2.46V13h9.64V9.49a.52.52 0 01.52-.49.52.52 0 01.52.52v4a.52.52 0 01-.52.52z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M5.88 11.18a.54.54 0 01-.36-.18.56.56 0 01-.15-.48l.42-2.25A.49.49 0 015.94 8l6.29-6.22a.53.53 0 01.74 0l1.75 1.75a.53.53 0 010 .74l-6.3 6.22a.47.47 0 01-.25.13L6 11.17zm.91-2.52L6.54 10l1.25-.29 5.82-5.75-1-1-5.82 5.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

FormOutlined.displayName = "FormOutlined";
var _default = FormOutlined;
exports["default"] = _default;