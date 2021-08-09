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

function DocTFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.8 0H4.2C2.6 0 1.4 1.3 1.4 2.8v10.3c0 1.6 1.3 2.8 2.8 2.8h7.6c1.6 0 2.8-1.3 2.8-2.8V2.8c0-1.5-1.2-2.8-2.8-2.8zM8 12.2H4.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7H8c.4 0 .7.3.7.7s-.3.7-.7.7zm3.3-3.5H4.7c-.3 0-.6-.3-.6-.7s.3-.7.7-.7h6.5c.4 0 .7.3.7.7s-.4.7-.7.7zm0-3.5H4.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h6.5c.4 0 .7.3.7.7 0 .4-.3.7-.6.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

DocTFilled.displayName = "DocTFilled";
export default DocTFilled;