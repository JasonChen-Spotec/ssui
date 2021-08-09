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

function CFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.3 0H4.5c-.4 0-.7.3-.7.7v5.8H.7c-.4 0-.7.3-.7.7v6C0 14.7 1.3 16 2.8 16h10.3c1.6 0 2.8-1.3 2.8-2.8V.7c.1-.4-.2-.7-.6-.7zM3.8 13.7c0 .5-.4.9-.9.9-.8 0-1.5-.7-1.5-1.5V7.9h2.4v5.8zm8.8-1.9H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.1H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.2H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CFileFilled.displayName = "CFileFilled";
export default CFileFilled;