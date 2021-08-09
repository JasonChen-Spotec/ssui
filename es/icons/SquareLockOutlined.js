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

function SquareLockOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.2 16h-5c-.5 0-.9-.4-.9-.9v-2.5c0-.5.4-.9.9-.9h.2v-.8c0-1.3 1-2.3 2.2-2.3 1.2 0 2.3.9 2.4 2.1 0 .2 0 .4-.2.5-.2.1-.4.1-.5 0s-.3-.3-.3-.5c0-.7-.6-1.2-1.3-1.2s-1.2.6-1.2 1.3v.8h3.8c.5 0 .9.4.9.9V15c-.2.6-.6 1-1 1zm-.3-2.9c0-.2-.2-.4-.4-.4h-4c-.2 0-.4.2-.4.4v1.4c0 .2.2.4.4.4h4c.2 0 .4-.2.4-.4v-1.4zM4.2 12h3.4c.2 0 .4.2.4.5s-.2.5-.5.5H3.7c-.4 0-.8-.3-.8-.8V3.6c0-.4.3-.8.8-.8H11c.4 0 .8.3.8.8v3.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5V4.1c0-.2-.1-.3-.3-.3H4.2c-.2 0-.3.1-.3.3v7.6c0 .2.1.3.3.3zm9.9-4.8c-.3 0-.6-.3-.6-.6V1.7c0-.2-.2-.4-.4-.4H1.6c-.2 0-.4.2-.4.4v12.6c0 .2.2.4.4.4h5.7c.4 0 .7.3.7.7 0 .3-.3.6-.6.6H1.1C.5 16 0 15.5 0 15V1c0-.6.5-1 1.1-1h12.6c.6 0 1.1.5 1.1 1v5.5c-.1.5-.4.7-.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SquareLockOutlined.displayName = "SquareLockOutlined";
export default SquareLockOutlined;