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
function MailFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M6.759 3H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.054.106.1.213.142.323l-9.431 6.38-.013.01c-.73.51-.884.598-1.02.632a1 1 0 01-.484 0c-.136-.034-.29-.122-1.017-.63L1.396 5.264l.04-.081a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 3 5.954 3 6.758 3z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1.01 7.443C1 7.833 1 8.27 1 8.76v6.482c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C5.29 21 5.954 21 6.758 21h10.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.758c0-.375 0-.719-.004-1.034l-8.594 5.814-.109.077c-.544.382-1.023.718-1.567.854a3 3 0 01-1.452 0c-.544-.136-1.022-.472-1.567-.854l-.12-.085L1.01 7.443z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
MailFilled.displayName = 'MailFilled';
export default MailFilled;