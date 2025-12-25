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
function StampFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M19 22H5v-3h14v3zM12 1.412c2.823 0 5.117 2.201 5.117 4.91 0 1.863-1.059 3.386-2.558 4.233v1.947h3.882c1.412 0 2.559 1.1 2.559 2.455v2.455H3v-2.455c0-1.354 1.147-2.455 2.559-2.455H9.44v-1.947c-1.5-.847-2.558-2.455-2.558-4.233 0-2.709 2.293-4.91 5.117-4.91z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
StampFilled.displayName = 'StampFilled';
export default StampFilled;