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

function LockFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.55 5.33h-.76V3.81a3.81 3.81 0 10-7.62 0v1.52h-.76a1.53 1.53 0 00-1.53 1.53v7.62A1.52 1.52 0 003.41 16h9.14a1.52 1.52 0 001.52-1.52V6.86a1.53 1.53 0 00-1.52-1.53zM8 12.19a1.53 1.53 0 111.5-1.52A1.52 1.52 0 018 12.19zm2.36-6.86H5.61V3.81a2.37 2.37 0 014.73 0z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

LockFilled.displayName = "LockFilled";
export default LockFilled;