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

function CloudOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12 13.78H3.79A3.6 3.6 0 010 10.41a3.57 3.57 0 013.46-3.69 4.55 4.55 0 014.31-4.49 4.58 4.58 0 014.88 3.9 3.86 3.86 0 013.35 4.1 3.92 3.92 0 01-4 3.55zm-7.73-1.29H12a2.65 2.65 0 002.28-1.28 2.5 2.5 0 000-2.56A2.64 2.64 0 0012 7.36a.69.69 0 01-.47-.18.66.66 0 01-.19-.46 3.24 3.24 0 00-3.29-3.2 3.25 3.25 0 00-3.3 3.2v.14a3.55 3.55 0 012.64 3.39.63.63 0 01-.33.55.65.65 0 01-.66 0 .63.63 0 01-.33-.55A2.28 2.28 0 003.8 8a2.25 2.25 0 100 4.49h.47z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CloudOutlined.displayName = "CloudOutlined";
export default CloudOutlined;