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
function OppositeArrowsFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M8.36 11.82h2a1.5 1.5 0 000-3H4.74a1.42 1.42 0 00-.55.11 1.48 1.48 0 00-.82.81 1.62 1.62 0 00-.1.54v5.6a1.5 1.5 0 003 0v-2l3.86 3.87a1.53 1.53 0 001.06.44 1.5 1.5 0 001.06-2.56l-3.89-3.81z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.76 13.68v-5.6a1.5 1.5 0 00-3 0v2L13.9 6.19a1.5 1.5 0 00-2.12 2.12l3.86 3.87h-2a1.5 1.5 0 000 3h5.59c.189 0 .376-.037.55-.11a1.48 1.48 0 00.82-.81c.095-.18.15-.377.16-.58z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
OppositeArrowsFilled.displayName = 'OppositeArrowsFilled';
export default OppositeArrowsFilled;