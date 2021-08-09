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

function CheckCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      className: "check-circle-filled_svg__st0",
      d: "M12.5 4.4c-.2-.2-.5-.2-.7 0l-5 5c-.2.2-.5.2-.7 0l-2-2c-.1-.2-.4-.2-.6 0l-.7.8c-.2.2-.2.5 0 .7l3.3 3.3c.2.2.6.2.8 0l6.3-6.3c.2-.2.2-.5 0-.7l-.7-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CheckCircleFilled.displayName = "CheckCircleFilled";
export default CheckCircleFilled;