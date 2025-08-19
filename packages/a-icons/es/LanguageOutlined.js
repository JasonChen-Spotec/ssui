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
function LanguageOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 1h3v2H6V1zm5.986 3H1v2h9.132l-.91 1.363L7.5 9.086 5 6.586 3.586 8l2.5 2.5-3.5 3.5L4 15.414l3.5-3.5 2.5 2.5L11.414 13l-2.5-2.5 1.793-1.793c.047-.046.088-.098.125-.152L12.535 6H15V4h-3.014zm3.862 5.308a1.5 1.5 0 011.304 0c.359.173.553.475.65.637.1.17.205.387.306.6l5.226 10.926-1.805.863L19.457 18h-5.914l-2.072 4.334-1.805-.863 5.21-10.893.016-.032c.101-.214.205-.43.306-.6.097-.163.291-.465.65-.638zM14.5 16h4l-2-4.182-2 4.182z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
LanguageOutlined.displayName = 'LanguageOutlined';
export default LanguageOutlined;