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
function CoinOverlapFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#coin-overlap-filled_svg__clip0_2038_3184)",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2.4 6.764c0 2.444 4.276 4.364 9.6 4.364s9.6-2.008 9.6-4.364C21.6 4.32 17.324 2.4 12 2.4S2.4 4.408 2.4 6.764z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13.134c-4.102 0-7.505-1.134-8.99-2.792-.435.61-.61 1.047-.61 1.57 0 2.357 4.276 4.364 9.6 4.364s9.6-1.92 9.6-4.363c0-.611-.262-1.048-.61-1.571-1.484 1.57-4.888 2.792-8.99 2.792z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.01 15.578c-.435.437-.61 1.047-.61 1.571 0 2.356 4.276 4.364 9.6 4.364s9.6-1.92 9.6-4.364c0-.61-.262-1.047-.61-1.57-1.484 1.57-4.888 2.792-8.99 2.792-4.19 0-7.505-1.135-8.99-2.793z"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "coin-overlap-filled_svg__clip0_2038_3184"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      transform: "translate(2.4 2.4)",
      d: "M0 0h19.2v19.2H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CoinOverlapFilled.displayName = 'CoinOverlapFilled';
export default CoinOverlapFilled;