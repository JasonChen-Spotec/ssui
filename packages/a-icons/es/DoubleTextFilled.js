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
function DoubleTextFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 4.5a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-3-3v-12zm3 0h9v2H9v-2zm9 4H9v2h9v-2zm-9 4h5v2H9v-2z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 10v8a5 5 0 005 5H14v-2H7.5a3 3 0 01-3-3v-8h-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
DoubleTextFilled.displayName = 'DoubleTextFilled';
export default DoubleTextFilled;