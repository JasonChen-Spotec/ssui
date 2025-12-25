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
function BiscuitFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.946 2.094a3 3 0 00-3.892 0L8.706 3.243a1 1 0 01-.569.236l-1.765.14A3 3 0 003.62 6.371l-.14 1.766a1 1 0 01-.237.569l-1.148 1.348a3 3 0 000 3.891l1.148 1.349a1 1 0 01.236.569l.141 1.765a3 3 0 002.752 2.752l1.765.14a1 1 0 01.57.237l1.347 1.148a3 3 0 003.892 0l1.348-1.148a1 1 0 01.57-.236l1.765-.141a3 3 0 002.752-2.752l.14-1.765a1 1 0 01.236-.57l1.149-1.347a3 3 0 000-3.892l-1.149-1.348a1 1 0 01-.236-.57l-.14-1.765a3 3 0 00-2.752-2.752l-1.766-.14a1 1 0 01-.569-.236l-1.348-1.149zm-5.835 8.138a1.5 1.5 0 102.121-2.121 1.5 1.5 0 00-2.121 2.121zm8.131-1.06l-1.414-1.415-7.07 7.071 1.413 1.415 7.071-7.072zm-2.475 6.717a1.5 1.5 0 102.122-2.121 1.5 1.5 0 00-2.121 2.12z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BiscuitFilled.displayName = 'BiscuitFilled';
export default BiscuitFilled;