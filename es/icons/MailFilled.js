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

function MailFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.2 1.1H2.8C1.3 1.1 0 2.4 0 3.9V12c0 1.6 1.3 2.8 2.8 2.8h10.3c1.6 0 2.8-1.3 2.8-2.8V3.9c.1-1.5-1.2-2.8-2.7-2.8zm.8 4.7L9.2 8.5c-.7.4-1.6.4-2.3 0L2 5.8c-.4-.2-.5-.6-.4-.9.1-.3.5-.5.9-.4.1 0 .1 0 .1.1l4.9 2.7c.3.2.7.2 1 0l4.9-2.7c.3-.2.7-.1.9.2.2.4.1.8-.3 1 .1 0 0 0 0 0z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

MailFilled.displayName = "MailFilled";
export default MailFilled;