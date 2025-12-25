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
function PersonLeftArrowFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 7a5 5 0 11-10 0 5 5 0 0110 0zM22.707 17.293L19 13.586 17.586 15l2 2H15v2h4.586l-2 2L19 22.414l3.707-3.707a1 1 0 000-1.414zM6 14a5 5 0 00-5 5v3h12v-8H6zM17 7a3.001 3.001 0 01-2 2.83v2.07a5.002 5.002 0 000-9.8v2.07c1.165.413 2 1.524 2 2.83z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PersonLeftArrowFilled.displayName = 'PersonLeftArrowFilled';
export default PersonLeftArrowFilled;