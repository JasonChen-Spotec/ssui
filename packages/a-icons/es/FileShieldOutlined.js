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
function FileShieldOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M20 15.627l-1.524-.544a1.412 1.412 0 00-.835-.036l-.118.036-1.523.544v1.798c0 .606.444 1.243 1.14 1.824.306.254.616.46.86.607.244-.147.554-.353.86-.607.696-.581 1.14-1.218 1.14-1.824v-1.798zM11 14v2H7v-2h4zm4-4v2H7v-2h8zm4-3.2c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 00-.875-.873c-.156-.08-.38-.145-.82-.18C16.639 3 16.058 3 15.2 3H8.8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 00-.873.875c-.08.156-.145.38-.18.82C5 5.361 5 5.942 5 6.8v10.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 00.875.873c.156.08.38.145.82.18C7.361 21 7.942 21 8.8 21h4.7v2H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1h6.4c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4.001 4.001 0 011.748 1.748c.248.485.346 1.002.392 1.564.045.55.044 1.228.044 2.052V11h-2V6.8zM17 6v2H7V6h10zm-.15 7.2a3.412 3.412 0 012.297 0h.001l2.189.781a1 1 0 01.663.942v2.502c0 1.539-1.056 2.69-1.86 3.36a9.124 9.124 0 01-1.544 1.033l-.115.06-.034.017-.01.004-.004.002-.001.001h-.001c-.238.114-.51.128-.757.043l-.105-.043h-.002l-.003-.003c-.003 0-.007-.002-.011-.005l-.034-.016-.115-.06a9.124 9.124 0 01-1.545-1.033c-.803-.67-1.859-1.821-1.859-3.36v-2.502a1 1 0 01.663-.942l2.187-.782z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
FileShieldOutlined.displayName = 'FileShieldOutlined';
export default FileShieldOutlined;