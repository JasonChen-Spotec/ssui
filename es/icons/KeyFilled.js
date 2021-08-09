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

function KeyFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.4 1.7c-1-1-2.3-1.6-3.8-1.6-1.4 0-2.8.6-3.8 1.6C5.2 3.4 4.9 6 6 8.1L4.5 9.6l-.1-.1-1-1.1c-.2-.2-.5-.3-.8-.3-.3 0-.6.1-.8.3-.4.4-.4 1.2 0 1.6l1.1 1.1.1.1-.4.4-.7-.6c-.2-.2-.5-.3-.8-.3-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8 0 .3.1.6.3.8l.6.6c-.6.6-.6 1.6 0 2.2.3.3.7.5 1.1.5s.8-.2 1.1-.5l5.1-5.1c.7.4 1.5.6 2.4.6 1.4 0 2.8-.6 3.8-1.6 2.1-2.1 2.1-5.5 0-7.6zm-2.3 5.2c-.8.8-2 .8-2.7 0-.8-.8-.8-2 0-2.7.8-.8 2-.8 2.7 0 .7.7.7 1.9 0 2.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

KeyFilled.displayName = "KeyFilled";
export default KeyFilled;