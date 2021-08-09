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

function DocFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.8 0c.5 0 1 .2 1.4.6l2.2 2.2c.4.3.6.8.6 1.4V14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h7.8zM8.3 11H4.8c-.5 0-.8.3-.8.7 0 .4.3.8.7.8h3.5c.4 0 .8-.3.8-.7 0-.5-.3-.8-.7-.8zm3-3.5H4.8c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h6.5c.4 0 .7-.3.7-.8 0-.4-.3-.7-.7-.7zm0-3.5H4.8c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.5c.4 0 .8-.3.8-.7-.1-.5-.4-.8-.8-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

DocFilled.displayName = "DocFilled";
export default DocFilled;