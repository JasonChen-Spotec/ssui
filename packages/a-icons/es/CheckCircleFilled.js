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
function CheckCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M11.998 1c3.038 0 5.788 1.232 7.778 3.223A10.965 10.965 0 0122.998 12c0 3.038-1.231 5.788-3.222 7.778A10.966 10.966 0 0111.998 23a10.965 10.965 0 01-7.777-3.222A10.967 10.967 0 01.998 12c0-3.037 1.232-5.787 3.223-7.777A10.965 10.965 0 0111.998 1z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.914 9l-6.707 6.707a1 1 0 01-1.414 0L6.086 12 7.5 10.586l3 3 6-6L17.914 9z",
      fill: "inherit"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CheckCircleFilled.displayName = 'CheckCircleFilled';
export default CheckCircleFilled;