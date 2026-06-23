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
function BrowseEyes(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      x: 0.5,
      y: 0.5,
      width: 23,
      height: 23,
      rx: 11.5,
      fill: "#EFFDF4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: 0.5,
      y: 0.5,
      width: 23,
      height: 23,
      rx: 11.5,
      stroke: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.2 12a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0z",
      fill: "#377C51"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 6.6a7.503 7.503 0 00-7.147 5.218L4.795 12l.058.182a7.503 7.503 0 0014.293 0l.058-.182-.058-.182A7.503 7.503 0 0011.999 6.6zM12 9a3 3 0 110 6 3 3 0 010-6z",
      fill: "#377C51"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BrowseEyes.displayName = 'BrowseEyes';
export default BrowseEyes;