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
function DiamondFileOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.759 1H14a1 1 0 01.707.293l6 6A1 1 0 0121 8v4.6h-2V9h-3.432c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.2 2 2 0 01-.874-.875 2.022 2.022 0 01-.201-.77C13 6.93 13 6.684 13 6.432V3H8.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C5 5.361 5 5.943 5 6.8v10.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C7.361 21 7.943 21 8.8 21H12v2H8.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 18.71 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1zM15 4.414L17.586 7H15.6a8.194 8.194 0 01-.589-.011v-.014A8.205 8.205 0 0115 6.4V4.414z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.39 14.51a.377.377 0 01.437.193.754.754 0 001.346 0 .377.377 0 01.436-.192c.65.18 1.236.514 1.716.96a.377.377 0 01.081.443.754.754 0 00.677 1.088l.011-.001a.377.377 0 01.365.264 4.148 4.148 0 01.106 2.08.377.377 0 01-.406.3.754.754 0 00-.652 1.237.377.377 0 01-.017.505 4.148 4.148 0 01-1.804 1.1.377.377 0 01-.467-.246.755.755 0 00-1.438 0 .377.377 0 01-.467.246 4.15 4.15 0 01-1.804-1.1.377.377 0 01-.017-.505.754.754 0 00-.652-1.237.377.377 0 01-.406-.3 4.164 4.164 0 01.106-2.08.377.377 0 01.365-.264h.01a.754.754 0 00.678-1.087.377.377 0 01.081-.444 4.146 4.146 0 011.716-.96zm2.43 4a1.32 1.32 0 11-2.64 0 1.32 1.32 0 012.64 0z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
DiamondFileOutlined.displayName = 'DiamondFileOutlined';
export default DiamondFileOutlined;