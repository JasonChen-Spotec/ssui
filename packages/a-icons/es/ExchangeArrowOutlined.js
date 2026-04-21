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
function ExchangeArrowOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M14.414 17l-1 1H18.8c.576 0 .949-.001 1.232-.024.272-.023.373-.06.422-.085a.999.999 0 00.437-.437c.025-.05.062-.15.085-.422.023-.283.024-.656.024-1.232V11H3v4.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024H8v2H5.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 01-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 16.812 1 16.343 1 15.8V8.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 011.31-1.31c.379-.194.772-.265 1.168-.298C4.188 4 4.657 4 5.2 4h5.386l-1-1L11 1.586l2.707 2.707a1 1 0 010 1.414L11 8.414 9.586 7l1-1H5.2c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 00-.437.437c-.025.05-.062.15-.085.422C3.001 7.25 3 7.624 3 8.2V9h18v-.8c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a.999.999 0 00-.437-.437c-.05-.025-.15-.062-.422-.085A16.943 16.943 0 0018.8 6H16V4h2.8c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 011.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v7.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 01-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03h-5.386l1 1L13 22.414l-2.707-2.707a1 1 0 010-1.414L13 15.586 14.414 17z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ExchangeArrowOutlined.displayName = 'ExchangeArrowOutlined';
export default ExchangeArrowOutlined;