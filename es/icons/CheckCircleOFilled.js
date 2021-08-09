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

import * as React from "react";
import Icon from "assui/lib/Icon";

function CheckCircleOFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 80 80"
    }, props), /*#__PURE__*/React.createElement("g", {
      transform: "translate(7 6)",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      stroke: "#000",
      strokeWidth: 5.583,
      cx: 33.5,
      cy: 33.5,
      r: 30.708
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M27.917 40.348l18.407-18.407a1.707 1.707 0 011.309-.567c.523 0 .96.189 1.308.567.35.349.524.778.524 1.287 0 .508-.175.952-.524 1.33L29.225 44.23a1.707 1.707 0 01-1.308.568c-.524 0-.96-.19-1.309-.568l-7.764-7.72a1.898 1.898 0 01-.524-1.33c0-.51.175-.938.524-1.287a1.707 1.707 0 011.308-.567c.524 0 .96.189 1.309.567l6.456 6.455z",
      fillRule: "nonzero"
    })));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CheckCircleOFilled.displayName = "CheckCircleOFilled";
export default CheckCircleOFilled;