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
function UserInfoGift(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M7.808 11.167c.458 0 .834.375.834.833v2.616a1.678 1.678 0 001.667 1.676c.316 0 .633-.092.908-.275l.79-.517.735.492a1.641 1.641 0 001.699.09 1.66 1.66 0 00.892-1.473V12c0-.458.375-.833.833-.833h1.668c.458 0 .833.375.833.833v5a3.334 3.334 0 01-3.334 3.334H8.666A3.334 3.334 0 015.333 17v-5c0-.458.375-.833.833-.833h1.642z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.67 11.167c.457 0 .83.364.83.81v2.532c0 .648-.738 1.037-1.285.673l-.747-.487a.846.846 0 00-.911 0l-.78.503c-.547.356-1.277-.033-1.277-.673v-2.548c0-.446.373-.81.83-.81h3.34zM14.357 4.654c.321-.206.85-.206 1.17 0l1.233.79c.312.2.32.517.025.723h1.136c1.16 0 1.58.75 1.58 1.666v.833c0 .917-.42 1.667-1.58 1.667H6.08c-1.208 0-1.58-.75-1.58-1.667v-.833c0-.917.372-1.666 1.58-1.666h1.098c-.245-.206-.238-.523.022-.724l1.027-.79a.848.848 0 01.974 0l1.966 1.514h.834l2.356-1.513z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 18.5,
      cy: 16.5,
      r: 4.5,
      fill: "#DC4946"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.488 14.733c.8-.8 2.1-.8 2.9 0 .799.8.799 2.1 0 2.9l-.973.972c-.46.46-1.202.46-1.662 0a1.174 1.174 0 010-1.662l.617-.618a.3.3 0 01.425.425l-.618.617a.574.574 0 000 .813.574.574 0 00.814 0l.972-.972a1.452 1.452 0 000-2.05 1.452 1.452 0 00-2.05 0l-1.06 1.06a1.203 1.203 0 000 1.698.3.3 0 11-.426.423 1.803 1.803 0 01.001-2.546l1.06-1.06z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
UserInfoGift.displayName = 'UserInfoGift';
export default UserInfoGift;