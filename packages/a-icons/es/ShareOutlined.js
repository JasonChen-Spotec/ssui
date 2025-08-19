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
function ShareOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 3a2 2 0 100 4 2 2 0 000-4zm-2.842 4.815a4 4 0 10-1.008-1.727L8.842 9.185a4 4 0 100 5.63l5.309 3.093A4.003 4.003 0 0018 23a4 4 0 10-2.839-6.818l-5.31-3.095a4.003 4.003 0 000-2.175l5.307-3.097zM7.7 10.945a.973.973 0 00.056.096c.155.285.244.612.244.959a1.99 1.99 0 01-.3 1.055A1.999 1.999 0 014 12a2 2 0 013.7-1.055zm8.515 7.151a1.012 1.012 0 00.123-.209 2 2 0 11-.122.209z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ShareOutlined.displayName = 'ShareOutlined';
export default ShareOutlined;