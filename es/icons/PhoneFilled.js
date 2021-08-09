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

function PhoneFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "phone-filled_svg__st0",
      d: "M13.2 11.8V1.3c0-.7-.6-1.3-1.3-1.3H4.1c-.7 0-1.3.6-1.3 1.3v10.5h10.4zm-10.4.7v2.1c0 .8.6 1.4 1.4 1.4h7.6c.8 0 1.4-.6 1.4-1.5v-2.1H2.8zM8 14.3c-.3 0-.6-.2-.6-.6 0-.3.2-.6.6-.6.3 0 .6.2.6.6 0 .4-.3.6-.6.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

PhoneFilled.displayName = "PhoneFilled";
export default PhoneFilled;