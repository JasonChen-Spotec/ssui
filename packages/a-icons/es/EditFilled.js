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
function EditFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M9.292 10.463l.007 4.247 4.238-.008L21 7.24V18a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h10.755l-7.463 7.463z",
      fill: "currentCOlor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.9 3.512l-9.193 9.192-1.411.002-.003-1.416 9.192-9.192L21.9 3.512z",
      fill: "currentCOlor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
EditFilled.displayName = 'EditFilled';
export default EditFilled;