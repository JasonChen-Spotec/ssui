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
function TreeCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: "100%",
      height: "100%",
      rx: 12,
      fill: "inherit"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.285 13.608a1.607 1.607 0 100-3.214 1.607 1.607 0 000 3.214zM17.285 7.895a1.607 1.607 0 100-3.214 1.607 1.607 0 000 3.214zM17.285 19.322a1.607 1.607 0 100-3.214 1.607 1.607 0 000 3.214zM5.858 13.608a1.607 1.607 0 100-3.214 1.607 1.607 0 000 3.214z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.57 12.538a.54.54 0 00.537-.536.54.54 0 00-.536-.536h-5.179V8.431c0-1.129.479-1.608 1.607-1.608h3.572a.54.54 0 00.536-.535.54.54 0 00-.536-.536h-3.572c-1.728 0-2.678.95-2.678 2.679v3.035H6.57a.54.54 0 00-.536.536.54.54 0 00.536.536h3.75v3.035c0 1.729.95 2.679 2.678 2.679h3.572a.54.54 0 00.536-.536.54.54 0 00-.536-.536h-3.572c-1.128 0-1.607-.478-1.607-1.607v-3.035h5.179z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
TreeCircleFilled.displayName = 'TreeCircleFilled';
export default TreeCircleFilled;