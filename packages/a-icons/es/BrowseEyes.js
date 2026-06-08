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
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      fill: "#47A92A"
    }), /*#__PURE__*/React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      stroke: "#fff",
      strokeWidth: 1.111
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5.5a6.253 6.253 0 00-5.955 4.348L3.996 10l.049.152a6.253 6.253 0 0011.91 0l.048-.152-.048-.152A6.253 6.253 0 0010 5.5zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BrowseEyes.displayName = 'BrowseEyes';
export default BrowseEyes;