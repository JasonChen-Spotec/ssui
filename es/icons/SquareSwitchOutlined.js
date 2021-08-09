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

function SquareSwitchOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M3.9 11.3h3.2c.2 0 .4.2.4.4s-.2.4-.4.4H3.5c-.4 0-.7-.3-.7-.7v-8c0-.4.3-.7.7-.7h6.9c.4 0 .7.3.7.7v3.1c0 .2-.2.4-.4.4s-.4-.2-.4-.4V3.8c0-.2-.1-.3-.3-.3H4c-.2 0-.3.1-.3.3V11c0 .2.1.3.2.3zm9.4-4.5c-.3 0-.6-.3-.6-.6V1.6c0-.2-.2-.4-.4-.4H1.6c-.2 0-.4.2-.4.4v11.9c0 .2.2.4.4.4H7c.3 0 .6.3.6.6s-.3.6-.6.6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h11.9c.6 0 1 .4 1 1v5.2c0 .4-.3.6-.6.6z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.5 11.8H9.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5l-1.1-1.1c-.2-.2-.2-.5 0-.7.1-.1.2-.1.3-.1s.3 0 .4.1l1.8 1.8c.1.2.2.3.2.5 0 .1 0 .3-.1.3-.1.1-.3.2-.4.2zm-6.1 1.3h6.1c.3 0 .5.2.5.5s-.2.4-.5.4h-5l1.1 1.1c.2.2.2.5 0 .7-.1.1-.2.2-.3.2-.2 0-.3-.1-.4-.1L9.1 14v-.1c-.1-.1-.2-.3-.1-.5 0-.2.2-.3.4-.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SquareSwitchOutlined.displayName = "SquareSwitchOutlined";
export default SquareSwitchOutlined;