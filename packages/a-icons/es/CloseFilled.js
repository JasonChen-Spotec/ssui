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
function CloseFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M19.719 18.39L13.325 12l6.394-6.343a.946.946 0 00-.04-1.278.93.93 0 00-1.269-.058l-6.412 6.296-6.3-6.343a.93.93 0 00-1.319 0 .944.944 0 000 1.336l6.291 6.334-6.393 6.334a.944.944 0 000 1.336.931.931 0 00.663.273.931.931 0 00.655-.264l6.403-6.352 6.412 6.456a.932.932 0 001.59-.67.945.945 0 00-.281-.666z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CloseFilled.displayName = 'CloseFilled';
export default CloseFilled;