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

function TrashOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.4 2.6h-3.8v-.8c0-1-.8-1.8-1.8-1.8H6.2c-1 0-1.8.8-1.8 1.8v.8H.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.5v10.9c0 .8.7 1.5 1.5 1.5h8.8c.8 0 1.5-.7 1.5-1.5V3.6h1.5c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.5-.5zm-10-.8c0-.5.4-.8.8-.8h3.6c.4 0 .8.4.8.8v.8H5.4v-.8zm7.5 12.7c0 .3-.2.5-.5.5H3.6c-.3 0-.5-.2-.5-.5V3.6h9.8v10.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.2 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5-.2 0-.5.2-.5.5v8.5c0 .2.2.4.5.4zM8.2 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v8.5c0 .2.2.4.5.4zM10.8 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v8.5c0 .2.2.4.5.4z"
    })));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

TrashOutlined.displayName = "TrashOutlined";
export default TrashOutlined;