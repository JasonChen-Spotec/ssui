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
function PeopleLockFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "fill",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.086c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.422z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 11.561,
      cy: 6.001,
      transform: "rotate(6 11.56 6)",
      fill: "currentColor",
      r: 3.969
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16.287,
      cy: 17.313,
      fill: "inherit",
      r: 5.313
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.002 15.966l-.33.084-.171-.665a1.538 1.538 0 00-1.88-1.116 1.539 1.539 0 00-1.11 1.882l.17.665-.33.085a.343.343 0 00-.247.415l.683 2.664a.343.343 0 00.415.246l3.651-.935a.344.344 0 00.25-.417l-.682-2.663a.344.344 0 00-.42-.245zm-.83.212l-1.991.51-.17-.665a1.032 1.032 0 01.739-1.254 1.032 1.032 0 011.251.744l.17.665z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleLockFilled.displayName = 'PeopleLockFilled';
export default PeopleLockFilled;