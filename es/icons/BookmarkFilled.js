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

function BookmarkFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.9 15.9l-4.1-2.2c-.5-.3-1.1-.3-1.5 0l-4.2 2.2c-.3.2-.7 0-.8-.2 0-.1-.1-.2-.1-.3V1.9C2.2.9 3.1 0 4.1 0h7.7c1.1 0 1.9.9 1.9 1.9v13.5c0 .3-.3.6-.6.6 0 0-.1 0-.2-.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

BookmarkFilled.displayName = "BookmarkFilled";
export default BookmarkFilled;