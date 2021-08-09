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

function InfoCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 3.5c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1c0-.5-.4-1-1-1zm1 3.9c0-.4-.4-.8-.8-.8h-.4c-.4 0-.8.4-.8.8v4.7c0 .4.3.8.8.8h.4c.4 0 .8-.3.8-.8V7.4z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

InfoCircleFilled.displayName = "InfoCircleFilled";
export default InfoCircleFilled;