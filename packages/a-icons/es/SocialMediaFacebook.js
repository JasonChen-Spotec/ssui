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
function SocialMediaFacebook(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#social-media-facebook_svg__clip0_4109_4252)"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 12,
      fill: "#000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.688 12.953l.449-2.76H13.37V8.4c0-.755.386-1.492 1.621-1.492h1.276v-2.35a15.98 15.98 0 00-2.246-.185c-2.277 0-3.764 1.323-3.764 3.716v2.104H7.732v2.76h2.525v6.675h3.113v-6.675h2.318z",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "social-media-facebook_svg__clip0_4109_4252"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h24v24H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaFacebook.displayName = 'SocialMediaFacebook';
export default SocialMediaFacebook;