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
function SignBankCardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#sign-bank-card-filled_svg__clip0_1348_27454)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 18.654C1 19.95 2.008 21 3.25 21h17.487c1.24 0 2.25-1.05 2.25-2.346v-8.043H1v8.043zM20.737 4H3.25C2.01 4 1 5.05 1 6.346v1.432h21.986V6.346C22.986 5.05 21.978 4 20.736 4z",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "sign-bank-card-filled_svg__clip0_1348_27454"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      transform: "translate(1 4)",
      d: "M0 0h22v17H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SignBankCardFilled.displayName = 'SignBankCardFilled';
export default SignBankCardFilled;