var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import * as React from 'react';
import Icon from 'a-base-icon/lib/icon';
function LightbulbOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 22h5M10 10h4m-2 0v6m3-.674a7 7 0 10-6 0V16c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.082C10.602 19 11.068 19 12 19c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C15 17.398 15 16.932 15 16v-.674z",
      stroke: "currentCOlor",
      strokeWidth: 2,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
LightbulbOutlined.displayName = 'LightbulbOutlined';
export default LightbulbOutlined;