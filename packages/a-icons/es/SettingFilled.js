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
function SettingFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.06 1.398a1 1 0 011.157.51 2 2 0 003.566 0 1 1 0 011.158-.51 10.984 10.984 0 014.548 2.545 1 1 0 01.216 1.174A2 2 0 0021.5 8h.028a1 1 0 01.968.7 11.046 11.046 0 01.28 5.515 1 1 0 01-1.077.795 2 2 0 00-1.729 3.279 1 1 0 01-.043 1.338 10.997 10.997 0 01-4.784 2.917 1 1 0 01-1.237-.654 2.001 2.001 0 00-3.812 0 1 1 0 01-1.237.654 10.997 10.997 0 01-4.784-2.917 1 1 0 01-.043-1.338A2 2 0 002.3 15.01a1 1 0 01-1.078-.795 11.046 11.046 0 01.28-5.515 1 1 0 01.97-.7H2.5a2 2 0 001.795-2.883 1 1 0 01.216-1.174A10.984 10.984 0 019.06 1.398zM15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SettingFilled.displayName = 'SettingFilled';
export default SettingFilled;