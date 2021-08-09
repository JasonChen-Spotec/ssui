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

function ListFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.7 0h-11C2 0 1.4.6 1.4 1.3V15c0 .4.5.6.8.4l.9-.9c.2-.2.5-.2.7 0l1.4 1.3c.2.2.4.2.6 0l2.1-1.5c.2-.1.4-.1.5 0l2.1 1.5c.2.1.4.1.6 0l1.4-1.3c.2-.2.5-.2.7 0l.9.8c.3.3.8.1.8-.4V1.3C15 .6 14.4 0 13.7 0zm-11 3.3c0-.4.3-.7.7-.7h4.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7zM9.6 6c0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h5.5c.3 0 .7.4.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

ListFilled.displayName = "ListFilled";
export default ListFilled;