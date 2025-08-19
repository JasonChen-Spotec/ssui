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
function ForbidFireFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.905 4.896L11.275 2s1.42 2.038 2.72 4.086a5.789 5.789 0 01.542 5.226 5.705 5.705 0 00-2.398 10.636 6.536 6.536 0 01-3.454-.503l-.26-.114c-2.567-1.116-4.226-3.728-4.2-6.609v-.186a5.616 5.616 0 011.62-3.9l.18-.175a20.308 20.308 0 003.88-5.565zm7.45 6.915c.305.14.596.306.87.496v-2.084a9.01 9.01 0 01-.87 1.588zM10.226 17a4.756 4.756 0 013.789-4.656l-.007.01a4.754 4.754 0 11-.334 9.207l-.017.006A4.756 4.756 0 0110.227 17zm4.795 3.328a3.328 3.328 0 002.803-5.122l-4.598 4.597a3.313 3.313 0 001.795.525zm-2.803-1.533l4.598-4.598a3.328 3.328 0 00-4.598 4.598z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ForbidFireFilled.displayName = 'ForbidFireFilled';
export default ForbidFireFilled;