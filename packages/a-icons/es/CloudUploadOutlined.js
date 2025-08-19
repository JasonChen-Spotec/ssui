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
function CloudUploadOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.5 4a6.5 6.5 0 00-4.605 11.088l.706.708-1.417 1.412-.705-.709A8.5 8.5 0 1116.715 6.003a6.5 6.5 0 013.922 11.51l-.771.638-1.274-1.542.771-.637A4.5 4.5 0 0016.5 8a1.62 1.62 0 01-1.395-.795A6.497 6.497 0 009.5 4z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 22v-9.586l3 3L17.414 14l-4.707-4.707a1 1 0 00-1.414 0L6.586 14 8 15.414l3-3V22h2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CloudUploadOutlined.displayName = 'CloudUploadOutlined';
export default CloudUploadOutlined;