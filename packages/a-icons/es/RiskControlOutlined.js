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
function RiskControlOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.714 1.089a2 2 0 01.572 0c.219.031.422.108.584.169l.043.016 5.362 2.011.13.049c.618.23 1.16.433 1.578.801a3 3 0 01.82 1.184c.199.52.198 1.1.197 1.76V12c0 2.827-1.537 5.183-3.199 6.914-1.673 1.743-3.587 2.974-4.6 3.565l-.04.024a2.42 2.42 0 01-.742.317 2.13 2.13 0 01-.838 0 2.42 2.42 0 01-.742-.317l-.04-.024c-1.013-.59-2.927-1.822-4.6-3.565C4.537 17.184 3 14.827 3 12V7.218v-.14c-.001-.66-.002-1.238.196-1.759a3 3 0 01.82-1.184c.418-.368.96-.57 1.579-.801l.13-.049 5.362-2.01.043-.017c.162-.061.365-.138.584-.17zm.283 1.982c-.04.014-.096.034-.208.076l-5.361 2.01c-.826.31-.984.387-1.09.479a1 1 0 00-.273.394C5.015 6.16 5 6.336 5 7.218V12c0 2.082 1.14 3.964 2.642 5.53 1.491 1.553 3.228 2.675 4.164 3.221a10.13 10.13 0 00.194.11l.06-.032.134-.078c.936-.546 2.673-1.668 4.164-3.222C17.86 15.964 19 14.082 19 12V7.218c0-.882-.016-1.057-.065-1.188a1 1 0 00-.274-.394c-.105-.092-.263-.169-1.088-.478L12.21 3.147a6.03 6.03 0 00-.208-.076H12h-.003zM14.414 7.5l-2.726 2.726 2.76 1.38a1 1 0 01.26 1.601L11 16.914 9.586 15.5l2.726-2.726-2.76-1.38a1 1 0 01-.26-1.601L13 6.086 14.414 7.5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
RiskControlOutlined.displayName = 'RiskControlOutlined';
export default RiskControlOutlined;