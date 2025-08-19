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
function UnbindChainOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 1v4H8V1h2zm3.414 2.515a5 5 0 017.071 7.07l-2.828 2.83L16.243 12 19.07 9.17a3 3 0 10-4.243-4.242L12 7.757l-1.414-1.414 2.828-2.828zM3.5 2.085l2.828 2.83-1.414 1.413L2.086 3.5 3.5 2.086zM16.914 8.5L8.5 16.914 7.086 15.5 15.5 7.086 16.914 8.5zM1 8h4v2H1V8zm6.757 4L4.93 14.828a3 3 0 004.243 4.243L12 16.243l1.414 1.414-2.828 2.828a5 5 0 01-7.071-7.07l2.828-2.83L7.757 12zM19 14h4v2h-4v-2zm.086 3.672l2.828 2.828-1.414 1.414-2.828-2.828 1.414-1.414zM16 19v4h-2v-4h2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
UnbindChainOutlined.displayName = 'UnbindChainOutlined';
export default UnbindChainOutlined;