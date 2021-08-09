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

import * as React from "react";
import Icon from "assui/lib/Icon";

function CouponFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M16 12.8v-2.4c0-.2-.1-.3-.3-.3-1-.3-1.7-1.3-1.6-2.4.1-.9.7-1.5 1.6-1.8.2 0 .3-.2.3-.3V3.2c0-.9-.7-1.6-1.6-1.6H1.6C.7 1.6 0 2.3 0 3.2v2.4c0 .2.1.3.3.3 1 .3 1.7 1.3 1.6 2.4-.1.9-.7 1.5-1.6 1.8-.2 0-.3.2-.3.3v2.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6zM5.6 6.9c-.5 0-.8-.4-.8-.9 0-.4.4-.7.8-.7h4.7c.4 0 .8.3.8.7 0 .5-.3.9-.8.9H5.6zm4.8 3.8H5.6c-.4 0-.8-.3-.8-.7 0-.5.3-.9.8-.9h4.8c.4 0 .8.3.8.7 0 .5-.3.9-.8.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CouponFilled.displayName = "CouponFilled";
export default CouponFilled;