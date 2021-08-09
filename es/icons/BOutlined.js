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

function BOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M5.94.56v1.23h-1.5a1 1 0 00-1 1v10.36a1 1 0 001 .95h1.5v1.24a.61.61 0 00.61.61.61.61 0 00.62-.61V14.1h1.24v1.24A.61.61 0 009 16a.61.61 0 00.61-.61V14.1h.86a3.39 3.39 0 001.68-6.36A3.39 3.39 0 009.94 1.8h-.3V.56A.61.61 0 009 0a.6.6 0 00-.61.61v1.18H7.18V.56A.61.61 0 006.56 0a.61.61 0 00-.62.56zM5.17 3h4.72a2.18 2.18 0 012.2 2.1 2.15 2.15 0 01-2.16 2.24H4.71V3.47A.46.46 0 015.17 3zm-.46 5.57h5.81a2.17 2.17 0 012.19 2.1 2.14 2.14 0 01-2.16 2.21H5.17a.45.45 0 01-.46-.45z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

BOutlined.displayName = "BOutlined";
export default BOutlined;