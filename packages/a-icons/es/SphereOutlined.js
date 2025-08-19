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
function SphereOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 3.055a9.001 9.001 0 105.45 16.77l-5.259-7.237A1 1 0 0111 12V3.055zm2 0V11h7.944A9 9 0 0013 3.056zM20.944 13h-6.981l4.103 5.648A9.001 9.001 0 0020.944 13zM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a10.965 10.965 0 017.843 3.287A10.965 10.965 0 0123 12z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SphereOutlined.displayName = 'SphereOutlined';
export default SphereOutlined;