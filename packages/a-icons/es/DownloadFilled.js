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
function DownloadFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M14 8h3.793a.5.5 0 01.353.854l-5.792 5.792a.5.5 0 01-.708 0L5.854 8.854A.5.5 0 016.207 8H10V2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V8z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.646 16.646L9 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-5l-2.646 2.646a.5.5 0 01-.708 0z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
DownloadFilled.displayName = 'DownloadFilled';
export default DownloadFilled;