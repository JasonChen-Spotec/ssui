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
function UserInfoTime(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12 20.25a9 9 0 100-18 9 9 0 000 18zm-3.852-6.102l3.177-3.178V7.2a.675.675 0 111.35 0v4.05c0 .179-.071.35-.198.477l-3.375 3.375a.675.675 0 11-.954-.954z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.578 17.19c-.355-1.774-.533-2.66-.229-3.295.304-.634.971-.768 2.306-1.035l4.063-.814c1.334-.268 2.002-.401 2.527.067.525.468.702 1.355 1.058 3.129l.342 1.708c.356 1.774.533 2.661.23 3.296-.305.634-.972.767-2.306 1.035l-4.064.814c-1.334.267-2.001.401-2.526-.067-.525-.468-.703-1.355-1.058-3.13l-.343-1.708z",
      fill: "#DC4946"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.426 14.827l5.03-1.008.124.616-5.03 1.008-.124-.616zM14.975 17.279l4.977-.997.123.615-4.977.998-.123-.616zM15.457 19.744l2.468-.495.124.616-2.469.494-.123-.615z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
UserInfoTime.displayName = 'UserInfoTime';
export default UserInfoTime;