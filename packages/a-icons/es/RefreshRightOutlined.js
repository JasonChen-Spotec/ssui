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
function RefreshRightOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.477 6.477 2 12 2a9.972 9.972 0 017.073 2.931c.64.64 1.325 1.431 1.927 2.163V3h2v7a1 1 0 01-1 1h-7V9h4.97c-.693-.869-1.553-1.897-2.311-2.655a8 8 0 102.029 7.878l.277-.961 1.921.554-.277.961C20.405 18.948 16.56 22 12 22 6.477 22 2 17.523 2 12z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
RefreshRightOutlined.displayName = 'RefreshRightOutlined';
export default RefreshRightOutlined;