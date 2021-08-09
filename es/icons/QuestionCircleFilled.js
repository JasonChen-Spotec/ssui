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

function QuestionCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M8 0C3.6 0 0 3.5 0 7.9V8c0 4.5 3.7 8 8 8 4.5 0 8-3.7 8-8s-3.5-8-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "question-circle-filled_svg__st0",
      d: "M9.7 7.4c.8-.7 1.4-1.3 1.4-2.3C11.1 3.4 9.7 2 8 2 6.3 2 4.9 3.4 4.9 5.1c0 .4.4.8.8.8.5 0 .8-.5.8-.8 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .2-.2.6-.8 1.3-.8.7-1.5 1.4-1.5 2.4v.9c0 .4.4.8.8.8s.8-.4.8-.8v-.9c0-.3.6-.9.9-1.4zM9.1 12.8c0-.7-.5-1.1-1.1-1.1-.7 0-1.1.5-1.1 1.1 0 .7.5 1.1 1.1 1.1.7 0 1.1-.4 1.1-1.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

QuestionCircleFilled.displayName = "QuestionCircleFilled";
export default QuestionCircleFilled;