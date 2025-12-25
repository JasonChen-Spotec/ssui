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
function UserInfoData(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.085c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.423z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 11.561,
      cy: 6.001,
      transform: "rotate(6 11.56 6)",
      fill: "currentColor",
      r: 3.969
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.795 19.578l-1.31-4.89a.938.938 0 01.662-1.148l1.664-.446c.222-.06.332-.09.443-.092a.937.937 0 01.291.038c.106.032.206.09.404.204l.61.352 2.627-.704c.507-.135.76-.203.98-.157.194.042.37.143.502.29.15.167.219.42.355.928l.922 3.441c.136.507.203.76.157.98a.939.939 0 01-.29.503c-.167.15-.42.218-.927.354l-5.255 1.408c-.506.136-.76.204-.98.157a.937.937 0 01-.501-.29c-.15-.168-.218-.42-.354-.928z",
      fill: "#DC4946"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.484 14.688l1.31 4.89c.136.507.204.76.355.928a.937.937 0 00.502.29c.22.047.473-.021.98-.157l5.254-1.408c.506-.136.76-.204.927-.354a.939.939 0 00.29-.502c.046-.22-.021-.474-.157-.981l-.922-3.441c-.136-.507-.204-.76-.355-.928a.937.937 0 00-.502-.29c-.22-.046-.473.022-.98.157l-2.627.704m-4.075 1.092l4.075-1.092m-4.075 1.092a.938.938 0 01.663-1.148l1.664-.446c.222-.06.332-.09.443-.092a.937.937 0 01.291.038c.106.032.206.09.404.204l.61.352",
      stroke: "#DC4946",
      strokeWidth: 0.938,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.116 15.541l1.225.707-.707 1.225m-1.932.518l-1.225-.707.707-1.225",
      stroke: "#fff",
      strokeWidth: 0.75,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
UserInfoData.displayName = 'UserInfoData';
export default UserInfoData;