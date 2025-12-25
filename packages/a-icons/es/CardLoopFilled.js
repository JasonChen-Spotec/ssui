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
function CardLoopFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#card-loop-filled_svg__clip0_4109_3995)",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4a3 3 0 00-3 3v2h22V7a3 3 0 00-3-3H4zM1 17v-6h22v3.225A5.5 5.5 0 0013.875 20H4a3 3 0 01-3-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.845 14l3.264 2.507A1 1 0 0122.5 18.3H15v-2h4.556l-.93-.714L19.846 14zM18.655 23.6l-3.264-2.507a1 1 0 01.61-1.793h7.5v2h-4.557l.93.714-1.218 1.586z"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "card-loop-filled_svg__clip0_4109_3995"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M0 0h24v24H0z"
    }))));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CardLoopFilled.displayName = 'CardLoopFilled';
export default CardLoopFilled;