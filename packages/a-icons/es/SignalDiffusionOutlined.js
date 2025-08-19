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
function SignalDiffusionOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.343 4.929l-.707.707a9 9 0 000 12.728l.707.707-1.414 1.414-.707-.707c-4.296-4.296-4.296-11.26 0-15.556l.707-.707 1.414 1.414zm12.728-1.414l.707.707c4.296 4.296 4.296 11.26 0 15.556l-.707.707-1.414-1.414.707-.707a9 9 0 000-12.728l-.707-.707 1.414-1.414zm-9.9 4.242l-.707.707a5 5 0 000 7.072l.708.707-1.415 1.414-.707-.707a7 7 0 010-9.9l.707-.707 1.415 1.414zm7.072-1.414l.707.707a7 7 0 010 9.9l-.707.707-1.415-1.414.708-.707a5 5 0 000-7.072l-.708-.707 1.415-1.414zM12 11a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SignalDiffusionOutlined.displayName = 'SignalDiffusionOutlined';
export default SignalDiffusionOutlined;