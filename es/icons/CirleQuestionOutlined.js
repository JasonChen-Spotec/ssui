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

function CirleQuestionOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.1 12.9c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 1.1C4.2 1.1 1.1 4.2 1.1 8c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 10.9c-.3 0-.6-.3-.6-.6v-1c0-.9.7-1.6 1.3-2.3.5-.5.9-.9.9-1.3C9.7 4.8 8.9 4 8 4c-1 0-1.7.8-1.7 1.7 0 .3-.3.6-.6.6s-.6-.3-.6-.6c0-1.6 1.3-2.8 2.9-2.8s2.9 1.3 2.9 2.9c0 .9-.6 1.5-1.3 2.1-.5.5-1 1-1 1.5v1c0 .2-.3.5-.6.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CirleQuestionOutlined.displayName = "CirleQuestionOutlined";
export default CirleQuestionOutlined;