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

function EditFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8.8 3.4L12.3 7l-8.8 9H0v-3.6l8.8-9zm1-1l2-2.1c.4-.4 1-.4 1.4 0l2.1 2.2c.4.4.4 1 0 1.4l-2 2.1-3.5-3.6zM8.4 14H15c.6 0 1 .4 1 1s-.4 1-1 1H7.4c-.3 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l.7-.7c.2-.2.4-.3.7-.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

EditFilled.displayName = "EditFilled";
export default EditFilled;