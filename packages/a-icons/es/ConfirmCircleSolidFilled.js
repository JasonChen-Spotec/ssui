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
function ConfirmCircleSolidFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.778 19.778A10.966 10.966 0 0112 23a10.966 10.966 0 01-7.778-3.222A10.966 10.966 0 011 12c0-3.038 1.231-5.788 3.222-7.778A10.966 10.966 0 0112 1c3.037 0 5.788 1.231 7.778 3.222A10.966 10.966 0 0123 12c0 3.038-1.231 5.788-3.222 7.778z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.828 9.414l-6.707 6.707a1 1 0 01-1.414 0L6 12.414 7.414 11l3 3 6-6 1.414 1.414z",
      fill: "inherit"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ConfirmCircleSolidFilled.displayName = 'ConfirmCircleSolidFilled';
export default ConfirmCircleSolidFilled;