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

function CloseCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.7 5.3c-.2-.3-.5-.3-.8 0L8 7.2 6.1 5.3c-.3-.3-.6-.3-.8 0-.3.2-.3.5 0 .8L7.2 8 5.3 9.9c-.3.3-.3.5 0 .8.3.3.5.3.8 0L8 8.8l1.9 1.9c.3.3.5.3.8 0 .3-.3.3-.5 0-.8L8.8 8l1.9-1.9c.3-.3.3-.6 0-.8z"
    })));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CloseCircleOutlined.displayName = "CloseCircleOutlined";
export default CloseCircleOutlined;