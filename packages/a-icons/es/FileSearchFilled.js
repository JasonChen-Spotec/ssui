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
function FileSearchFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12 17a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
      fill: "currentCOlor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 9h-6a2 2 0 01-2-2V1H8.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 5.29 3 5.954 3 6.758v10.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C7.29 23 7.954 23 8.758 23h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V9zM7.5 14.5a4.5 4.5 0 118.31 2.396l1.604 1.604L16 19.914l-1.604-1.604A4.5 4.5 0 017.5 14.5z",
      fill: "currentCOlor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.414 7L15 1.586V7h5.414z",
      fill: "currentCOlor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
FileSearchFilled.displayName = 'FileSearchFilled';
export default FileSearchFilled;