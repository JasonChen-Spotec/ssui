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
function LoopOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 .586l3.707 3.707a1 1 0 010 1.414L11 9.414 9.586 8l2-2H9a6 6 0 00-2.57 11.423l.902.43-.858 1.806-.903-.43A8 8 0 019 4h2.585l-2-1.999L11 .586zm6.526 3.755l.903.43A8 8 0 0115 20h-2.585l2 1.999L13 23.414l-3.707-3.707a1 1 0 010-1.414L13 14.586 14.414 16l-2 2H15a6 6 0 002.57-11.423l-.902-.43.858-1.806z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
LoopOutlined.displayName = 'LoopOutlined';
export default LoopOutlined;