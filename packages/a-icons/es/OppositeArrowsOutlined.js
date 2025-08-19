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
function OppositeArrowsOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#opposite-arrows-outlined_svg__clip0_417_193)"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.192 7.464v6.657a1 1 0 01-1 1h-6.656v-2h4.242L8.464 2.808 9.88 1.393l10.313 10.314V7.464h2zM9.464 10.88H5.222l10.314 10.313-1.415 1.415L3.808 12.293v4.242h-2V9.88a1 1 0 011-1h6.656v2z",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "opposite-arrows-outlined_svg__clip0_417_193"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M0 0h24v24H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
OppositeArrowsOutlined.displayName = 'OppositeArrowsOutlined';
export default OppositeArrowsOutlined;