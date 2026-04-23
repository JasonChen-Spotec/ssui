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
function GarbageCanOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      width: 24,
      height: 24,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M11 17.5H9v-7h2v7zM15 17.5h-2v-7h2v7z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 7h-2v10.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H9.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3.999 18.702 4 18.024 4 17.2V7H2V5h20v2zM6 17.2c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 00.875.873c.156.08.38.145.82.18C8.361 21 8.942 21 9.8 21h4.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 00.873-.875c.08-.156.145-.38.18-.82.038-.45.038-1.031.038-1.888V7H6v10.2z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.83 4h-8V2h8v2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
GarbageCanOutlined.displayName = 'GarbageCanOutlined';
export default GarbageCanOutlined;