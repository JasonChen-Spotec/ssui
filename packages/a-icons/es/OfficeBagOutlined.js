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
function OfficeBagOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 3v2H4a3 3 0 00-3 3v11a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3h-3V3a2 2 0 00-2-2H9a2 2 0 00-2 2zm8 0H9v2h6V3zm5 4a1 1 0 011 1v4h-6v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H3V8a1 1 0 011-1h16zM9 14H3v5a1 1 0 001 1h16a1 1 0 001-1v-5h-6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2zm2 1v-3h2v3h-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
OfficeBagOutlined.displayName = 'OfficeBagOutlined';
export default OfficeBagOutlined;