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
function PencilOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M16.275 2.203a2.136 2.136 0 011.158.046c.305.1.541.268.733.43.183.156.384.359.597.571l1.976 1.977c.214.213.417.415.572.598.143.168.29.37.391.623l.04.112.046.162c.091.381.076.783-.046 1.158-.099.305-.268.541-.43.733-.156.183-.359.385-.572.598L8.39 21.561a1 1 0 01-.707.294H3.138a1 1 0 01-1-1V16.31a1 1 0 01.293-.707L14.785 3.248c.212-.211.412-.414.594-.568.192-.163.428-.332.733-.43l.163-.047zM4.138 16.723v3.132h3.13l8.09-8.091-3.13-3.13-8.09 8.09zM16.746 4.149a.956.956 0 00-.072.057c-.106.09-.242.224-.478.46L13.642 7.22l3.13 3.13 2.553-2.551.009-.01h.001c.23-.232.363-.365.452-.47a.867.867 0 00.056-.072.134.134 0 000-.055.878.878 0 00-.056-.072 9.486 9.486 0 00-.462-.478L17.35 4.664a9.424 9.424 0 00-.477-.46c-.037-.03-.061-.047-.074-.056a.134.134 0 00-.052 0z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PencilOutlined.displayName = 'PencilOutlined';
export default PencilOutlined;