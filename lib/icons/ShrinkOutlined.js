"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ShrinkOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      className: "shrink-outlined_svg__icon",
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M646.38 408.9l1.92 1.792a39.674 39.674 0 0026.556 9.79h296.405a41.018 41.018 0 0041.082-40.826 40.954 40.954 0 00-41.082-40.762H765.723l247.451-270.68a40.57 40.57 0 00-2.687-57.592 41.018 41.018 0 00-57.912 2.752l-237.66 260.25V83.444a41.018 41.018 0 10-82.1 0v294.932c0 11.199 4.543 22.461 13.565 30.46zm-388.103-70.07H52.803a40.954 40.954 0 00-41.082 40.762 40.954 40.954 0 0041.082 40.826h296.405a39.866 39.866 0 0028.54-11.646 40.698 40.698 0 0013.438-30.46V83.316a40.954 40.954 0 00-41.082-40.634 40.89 40.89 0 00-40.954 40.826V273.56L71.36 13.438a41.018 41.018 0 00-57.847-2.688 40.506 40.506 0 00-2.687 57.592l247.451 270.552zm150.634 307.475a40.698 40.698 0 00-30.46-13.438H83.456a40.954 40.954 0 00-40.762 41.018c0 22.717 18.301 40.954 40.826 40.954H273.57L13.513 952.629a41.018 41.018 0 00-2.687 57.847 40.506 40.506 0 0057.591 2.687l270.616-247.451v205.601a40.954 40.954 0 0040.762 41.082 40.954 40.954 0 0040.826-41.082V674.845a39.866 39.866 0 00-9.79-26.492l-1.92-1.984zm601.512 306.26L750.365 714.902h190.052a41.018 41.018 0 100-82.1H645.42a40.698 40.698 0 00-32.25 15.486 39.674 39.674 0 00-9.791 26.492v296.468c0 22.589 18.3 41.082 40.762 41.082a40.954 40.954 0 0040.826-41.082V765.648l270.616 247.451a40.954 40.954 0 0054.904-60.599z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ShrinkOutlined.displayName = "ShrinkOutlined";
var _default = ShrinkOutlined;
exports["default"] = _default;