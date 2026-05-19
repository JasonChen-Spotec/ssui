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
function TwoWayFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      x: 1,
      y: 1,
      width: 22,
      height: 22,
      rx: 3.667,
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.976 5.372v2.651h-5.302v2.651h5.302v2.652l4.64-3.977-4.64-3.977zM8.023 18.629v-2.652h5.302v-2.651H8.023v-2.652l-4.64 3.978 4.64 3.977z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
TwoWayFilled.displayName = 'TwoWayFilled';
export default TwoWayFilled;