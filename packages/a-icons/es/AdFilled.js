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
function AdFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.452 4.066c-.436.856-.436 1.976-.436 4.216V15.6c0 2.24 0 3.36.436 4.216A4 4 0 004.2 21.564C5.055 22 6.175 22 8.416 22h7.317c2.24 0 3.36 0 4.216-.436a4 4 0 001.749-1.748c.436-.856.436-1.976.436-4.216V8.282c0-2.24 0-3.36-.436-4.216a4 4 0 00-1.748-1.748c-.856-.436-1.976-.436-4.216-.436H8.415c-2.24 0-3.36 0-4.216.436a4 4 0 00-1.748 1.748zM10.669 16h2.155L9.625 8h-2l-2 5-.001.002L4.425 16h2.154l.4-1h3.29l.4 1zm-2.044-5.115L7.778 13H9.47l-.845-2.115zM19.226 8h-2v2h-1a3 3 0 100 6h3V8zm-2 4h-1a1 1 0 100 2h1v-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
AdFilled.displayName = 'AdFilled';
export default AdFilled;