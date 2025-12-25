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
function CloseCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.535 5.05a1 1 0 00-1.414 0L12 9.17 9.879 7.05A1 1 0 008.54 6.98l-.075.069L7.05 8.465a1 1 0 000 1.414L9.17 12l-2.12 2.121a1 1 0 000 1.414l1.415 1.415a1 1 0 001.414 0L12 14.828l2.121 2.122a1 1 0 001.414 0l1.415-1.415a1 1 0 000-1.414L14.828 12l2.122-2.121a1 1 0 000-1.414L15.535 7.05z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinejoin: "round"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CloseCircleFilled.displayName = 'CloseCircleFilled';
export default CloseCircleFilled;