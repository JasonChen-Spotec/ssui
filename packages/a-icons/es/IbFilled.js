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
function IbFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm2.618 15.002v-9.52h1.56v9.52h-1.56zm3.425 0v-9.52h4.36c.946 0 1.693.226 2.226.68.493.426.747 1 .747 1.72 0 .533-.134.986-.387 1.36-.253.346-.613.6-1.093.786.627.12 1.093.374 1.413.76.307.374.467.894.467 1.534 0 .96-.334 1.666-.987 2.12-.56.373-1.36.56-2.373.56h-4.373zm3.973-8.24h-2.414v2.72h2.387c.667 0 1.133-.12 1.413-.334.267-.226.414-.586.414-1.08 0-.453-.147-.786-.414-.986-.293-.214-.746-.32-1.386-.32zm.213 4h-2.627v2.96h2.587c.587 0 1.053-.094 1.387-.28.427-.24.64-.614.64-1.147 0-.547-.16-.933-.467-1.173-.32-.24-.827-.36-1.52-.36z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
IbFilled.displayName = 'IbFilled';
export default IbFilled;