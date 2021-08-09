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

function GuilderFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.6.7v8c0 .6-.1 1.2-.3 1.8-.3.5-.6 1.1-.9 1.5-.3.5-.8.9-1.2 1.3-.5.4-.9.8-1.3 1.1-.4.3-.8.6-1.3.8-.4.3-.7.4-.9.5-.2.1-.3.2-.4.2-.2.1-.3.1-.4.1-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.2s-.5-.3-.9-.5c-.5-.2-.9-.5-1.3-.8-.4-.3-.8-.6-1.3-1.1-.5-.4-.9-.9-1.2-1.3-.3-.5-.6-1-.9-1.6-.2-.5-.4-1.1-.4-1.7v-8c0-.2.1-.3.2-.5.2-.1.3-.2.5-.2h12c.2 0 .3.1.5.2.1.1.2.3.2.5zm-2 8V2H7.9v11.8c.8-.4 1.6-.9 2.2-1.4 1.7-1.3 2.5-2.5 2.5-3.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

GuilderFilled.displayName = "GuilderFilled";
export default GuilderFilled;