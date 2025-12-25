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
function DoubleDocumentFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M21 8.045h-5c-.92 0-1.667-.732-1.667-1.636V1.5H10.8c-.67 0-1.225 0-1.676.036-.468.038-.899.118-1.303.32a3.304 3.304 0 00-1.457 1.43c-.206.398-.288.82-.326 1.28C6 5.01 6 5.554 6 6.213v8.576c0 .659 0 1.203.037 1.645.038.46.12.883.326 1.28.32.616.83 1.116 1.457 1.43.404.203.835.283 1.303.32.451.037 1.005.037 1.676.037H16.2c.67 0 1.224 0 1.675-.036.469-.038.9-.118 1.304-.32a3.304 3.304 0 001.457-1.43c.206-.398.288-.82.326-1.28.037-.444.037-.987.037-1.646V8.045z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.512 6.41L16 1.98v4.43h4.512zM2.5 10v8a5 5 0 005 5H14v-2H7.5a3 3 0 01-3-3v-8h-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
DoubleDocumentFilled.displayName = 'DoubleDocumentFilled';
export default DoubleDocumentFilled;