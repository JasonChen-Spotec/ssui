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

function AdFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.5 5H12L9.3 2.3c.4-.7.2-1.6-.5-2.1S7.1 0 6.7.7c-.3.5-.3 1.1 0 1.6L4 5H.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5zm-8-2.1c.3.1.7.1 1 0L10.6 5H5.4l2.1-2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M6.6 8.5H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.7c.3 0 .6.3.6.6 0 .4-.3.6-.6.6zM13.1 11.3H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6zM13.1 14H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

AdFilled.displayName = "AdFilled";
export default AdFilled;