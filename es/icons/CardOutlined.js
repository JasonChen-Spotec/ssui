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

function CardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14.1 1.3H1.9c-1 0-1.9.8-1.9 1.8v9.8c0 1 .8 1.8 1.9 1.8h12.2c1 0 1.9-.8 1.9-1.8V3.1c0-1-.8-1.8-1.9-1.8zm-12.2.9h12.2c.5 0 1 .4 1 .9v1.5H.9V3.1c0-.5.5-.9 1-.9zm12.2 11.6H1.9c-.5 0-1-.4-1-.9V7.5H15v5.4c.1.5-.4.9-.9.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.2 9.7H4.1c-.4 0-.7.3-.7.7v.3c0 .4.3.7.7.7h1.1c.4 0 .7-.3.7-.7v-.3c0-.4-.3-.7-.7-.7z"
    })));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CardOutlined.displayName = "CardOutlined";
export default CardOutlined;