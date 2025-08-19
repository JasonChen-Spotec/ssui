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
function SignalDiffusionFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 24,
      height: 24,
      rx: 4,
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13.724c.956 0 1.73-.772 1.73-1.724s-.774-1.724-1.73-1.724c-.955 0-1.729.772-1.729 1.724s.774 1.724 1.73 1.724z",
      fill: "inherit"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.956 8.537c-2.029 1.891-2.029 4.958 0 6.85M15.044 15.386c2.03-1.891 2.03-4.957 0-6.849M6.62 6.636a7.57 7.57 0 000 10.728M17.382 17.365a7.57 7.57 0 000-10.73",
      stroke: "inherit",
      strokeWidth: 1.522,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SignalDiffusionFilled.displayName = 'SignalDiffusionFilled';
export default SignalDiffusionFilled;