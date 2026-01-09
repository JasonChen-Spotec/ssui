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
function InternalTransferFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#internal-transfer-filled_svg__clip0_20026_31801)"
    }, /*#__PURE__*/React.createElement("rect", {
      x: 0.667,
      y: 0.667,
      width: 14.667,
      height: 14.667,
      rx: 2.444,
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.977 9.002c.066-.338.087-1.142.066-1.505C11.895 4.87 9.617 3.583 8 4.12c1.217.553 2.455 2.06 2.464 3.843.001.22-.012.434-.037.645l-1.307-.18.847 1.285.847 1.287 1.093-.914L13 9.173l-1.023-.171zM4.248 6.941c-.09.331-.133 1.128-.117 1.487C4.25 11.033 7.01 12.383 9 11.905c-1.477-.588-2.956-2.12-2.925-3.886.004-.217.025-.43.06-.636l1.595.219-1.005-1.3L5.72 5l-1.36.868-1.36.87 1.248.203z",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "internal-transfer-filled_svg__clip0_20026_31801"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h16v16H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
InternalTransferFilled.displayName = 'InternalTransferFilled';
export default InternalTransferFilled;