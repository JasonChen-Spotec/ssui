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
function ConfirmCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a9.966 9.966 0 017.071 2.929A9.966 9.966 0 0122 12a9.966 9.966 0 01-2.929 7.071A9.966 9.966 0 0112 22a9.966 9.966 0 01-7.071-2.929A9.966 9.966 0 012 12a9.966 9.966 0 012.929-7.071A9.966 9.966 0 0112 2zm5.121 5.293a1 1 0 00-1.338-.068l-.076.068-5.293 5.293-2.293-2.293a1 1 0 00-1.338-.068l-.076.068-1.414 1.414a1 1 0 000 1.414L9 16.828a2 2 0 002.828 0l6.707-6.707a1 1 0 000-1.414l-1.414-1.414z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinejoin: "round"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ConfirmCircleFilled.displayName = 'ConfirmCircleFilled';
export default ConfirmCircleFilled;