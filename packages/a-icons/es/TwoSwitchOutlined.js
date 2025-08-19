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
function TwoSwitchOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-2.829-1a4.5 4.5 0 110 7H5.5a3.5 3.5 0 110-7h9.171zm-1.415 2H5.5a1.5 1.5 0 100 3h7.756A4.49 4.49 0 0113 6.5c0-.526.09-1.03.256-1.5zM2 17.5A4.5 4.5 0 019.329 14H18.5a3.5 3.5 0 110 7H9.329A4.5 4.5 0 012 17.5zm8.744 1.5H18.5a1.5 1.5 0 000-3h-7.756c.166.47.256.974.256 1.5s-.09 1.03-.256 1.5zM6.5 15a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
TwoSwitchOutlined.displayName = 'TwoSwitchOutlined';
export default TwoSwitchOutlined;