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
function BindChainOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.515A6 6 0 1120.486 12l-2.122 2.121-1.414-1.414 2.122-2.121a4 4 0 00-5.657-5.657L11.293 7.05 9.88 5.636l2.122-2.121zM16.916 8.5L8.5 16.914 7.086 15.5l8.415-8.414L16.915 8.5zM7.05 11.293l-2.122 2.121a4 4 0 105.657 5.657l2.122-2.121 1.414 1.414L12 20.485A6 6 0 113.514 12l2.121-2.121 1.415 1.414z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BindChainOutlined.displayName = 'BindChainOutlined';
export default BindChainOutlined;