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

function CircleCancelOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6.5 8c0 1.5-.5 2.9-1.4 4L4 2.9C5.1 2 6.5 1.5 8 1.5c3.6 0 6.5 2.9 6.5 6.5zm-13 0c0-1.5.5-2.9 1.4-4l9.1 9.1c-1.1.9-2.5 1.4-4 1.4-3.6 0-6.5-2.9-6.5-6.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CircleCancelOutlined.displayName = "CircleCancelOutlined";
export default CircleCancelOutlined;