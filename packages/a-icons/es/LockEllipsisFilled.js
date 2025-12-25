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
function LockEllipsisFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2a6 6 0 00-6 6v1.15a3.364 3.364 0 00-.816.286 4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 13.29 3 13.954 3 14.758v1.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C7.29 22 7.954 22 8.758 22h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01v-1.483c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748A3.364 3.364 0 0018 9.15V8a6 6 0 00-6-6zM8.759 9C8.49 9 8.238 9 8 9.002V8a4 4 0 118 0v1.002C15.762 9 15.51 9 15.241 9H8.76zM7 14.41h2v2H7v-2zm4 2v-2h2v2h-2zm6-2h-2v2h2v-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
LockEllipsisFilled.displayName = 'LockEllipsisFilled';
export default LockEllipsisFilled;