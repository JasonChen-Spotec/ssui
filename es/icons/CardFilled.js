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

function CardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.5 4.5h-1c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V4.9c0-.2-.2-.4-.5-.4zm1.5-3H2c-1.1 0-2 .8-2 1.9v9.1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3.4c0-1.1-.9-1.9-2-1.9zM8.5 12.6h-6c-.3 0-.6-.2-.6-.4 0-.3.2-.6.4-.6h6.1c.3 0 .5.2.6.4 0 .3-.1.5-.4.6 0-.1 0-.1-.1 0zm0-2h-6c-.3 0-.5-.1-.6-.4 0-.3.1-.5.4-.6h6.1c.4-.1.6.1.7.4 0 .3-.1.5-.4.6h-.2zm5.5-3c0 .6-.5 1-1 1h-2c-.5 0-1-.4-1-1V4.5c0-.5.4-1 1-1h2c.5 0 1 .4 1 1v3.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CardFilled.displayName = "CardFilled";
export default CardFilled;