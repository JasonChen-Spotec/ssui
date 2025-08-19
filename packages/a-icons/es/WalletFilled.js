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
function WalletFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M18.314 11.22a.676.676 0 100 1.351H22V11.2h-.105l-3.58.02z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21.895 14.381h-3.58a2.486 2.486 0 010-4.971H22v-1.6A3.81 3.81 0 0018.19 4H5.81A3.81 3.81 0 002 7.81v8.171a3.81 3.81 0 003.81 3.81h12.38A3.81 3.81 0 0022 15.98v-1.62l-.105.02z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
WalletFilled.displayName = 'WalletFilled';
export default WalletFilled;