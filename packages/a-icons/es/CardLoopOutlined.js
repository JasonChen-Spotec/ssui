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
function CardLoopOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.161 4H18.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V12h-2v-1H3v4.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C4.25 18 4.623 18 5.2 18H12v2H5.161c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167C1 16.82 1 16.365 1 15.838V8.162c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C4.18 4 4.635 4 5.161 4zM3 9h18v-.8c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 00-.437-.437c-.05-.025-.15-.063-.422-.085C19.75 6 19.377 6 18.8 6H5.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 00-.437.437c-.025.05-.063.15-.085.422C3 7.25 3 7.623 3 8.2V9z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.076 13l3.674 2.88v1.526h-8.502v-2h4.655l-1.061-.832L19.076 13zm-4.826 5.402h8.502v2h-4.655l1.061.832-1.234 1.574-3.674-2.88v-1.526z",
      fill: "currentColor",
      fillOpacity: 0.9
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CardLoopOutlined.displayName = 'CardLoopOutlined';
export default CardLoopOutlined;