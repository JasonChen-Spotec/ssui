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

function SafetyCertificateFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0c2.6 1.2 4.6 1.9 6.2 2 .3 0 .6.3.6.6v6C14.2 12.2 12 14.7 8 16c-4-1.3-6.3-3.8-6.8-7.4v-6c0-.3.3-.6.6-.6 1.6-.1 3.7-.8 6.2-2zm3.6 5.2c-.2-.2-.6-.2-.8 0L7.1 8.9 5.2 7c-.2-.3-.6-.3-.8 0-.2.2-.2.6 0 .8l2.3 2.3c.1.1.3.2.4.2.1 0 .3-.1.4-.2L11.6 6c.3-.2.3-.6 0-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SafetyCertificateFilled.displayName = "SafetyCertificateFilled";
export default SafetyCertificateFilled;