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
function BoxFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M12.403 1.185a2 2 0 00-.806 0c-.307.063-.582.217-.8.34l-.06.032-7.4 4.112-.063.034c-.075.042-.156.086-.24.136l8.968 5.016 8.995-4.996c-.094-.058-.187-.109-.271-.156l-.063-.034-7.4-4.112-.06-.033c-.218-.122-.493-.276-.8-.34zM21.997 7.591L13 12.59v9.998c.072-.038.14-.076.203-.111l.06-.034 7.4-4.11.063-.036c.23-.127.521-.287.745-.53.193-.208.339-.457.428-.727.103-.313.102-.645.101-.908V7.869c0-.086 0-.18-.003-.278zM11 22.587v-10L2.004 7.554c-.005.111-.005.218-.004.315v8.262c-.001.264-.002.595.1.908a2 2 0 00.43.728c.222.242.513.402.744.53l.063.034 7.4 4.111.06.034c.063.035.13.073.203.11z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BoxFilled.displayName = 'BoxFilled';
export default BoxFilled;