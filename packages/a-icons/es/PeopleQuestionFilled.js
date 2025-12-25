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
import * as React from 'react';
import Icon from 'a-base-icon/lib/icon';
function PeopleQuestionFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM11.655 14H7a5 5 0 00-5 5v3h9.655a7.464 7.464 0 01-1.155-4c0-1.47.423-2.842 1.155-4z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm5.5-3.9a2.15 2.15 0 00-2.15 2.15h1.3a.85.85 0 11.85.85.65.65 0 00-.65.65v1h1.3v-.45a2.151 2.151 0 00-.65-4.2zm.75 5.65v1.5h-1.5v-1.5h1.5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleQuestionFilled.displayName = 'PeopleQuestionFilled';
export default PeopleQuestionFilled;