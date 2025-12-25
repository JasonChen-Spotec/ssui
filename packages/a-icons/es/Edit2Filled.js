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
function Edit2Filled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M18.58 2.944a2 2 0 00-2.828 0L14.107 4.59l5.303 5.303 1.645-1.645a2 2 0 000-2.828L18.58 2.944zM17.996 11.307l-5.303-5.303-8.722 8.722a.5.5 0 00-.14.27l-.932 5.53a.5.5 0 00.576.576l5.529-.933a.5.5 0 00.27-.14l8.722-8.722z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
Edit2Filled.displayName = 'Edit2Filled';
export default Edit2Filled;