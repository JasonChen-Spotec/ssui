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
function CirculationFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12.754 1.477l4.891 4.892-4.891 4.892V8.444h-2.075c-4.965.127-7.381 1.384-8.303 4.152.923-5.535 3.69-8.303 8.302-8.302h2.075V1.476zm-1.447 21.028l-4.892-4.892 4.891-4.89.002 2.814h2.074c4.904 0 7.381-1.383 8.303-4.151-.923 5.535-3.691 8.303-8.302 8.302l-2.076.001v2.816z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CirculationFilled.displayName = 'CirculationFilled';
export default CirculationFilled;