var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
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
import Icon from 'a-base-icon/lib/icon';
import * as React from 'react';
function UserCheckOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M13 16H8c-.945 0-1.604.001-2.12.036-.507.035-.803.1-1.028.192a3 3 0 00-1.623 1.624c-.094.225-.158.521-.193 1.028C3.001 19.396 3 20.055 3 21v1H1v-1c0-.918 0-1.657.04-2.257.042-.608.13-1.146.34-1.656a5 5 0 012.707-2.706c.51-.211 1.048-.3 1.656-.341C6.343 14 7.082 14 8 14h5v2zM23.414 16l-4.707 4.707a1 1 0 01-1.414 0L14.586 18 16 16.586l2 2 4-4L23.414 16z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M9.5 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M15 2.1a5.002 5.002 0 010 9.8V9.83a3.001 3.001 0 000-5.66V2.1z',
        fill: 'currentColor',
      }),
    );
  };
  return /*#__PURE__*/ React.createElement(
    Icon,
    __assign({}, componentProps, {
      component: IconNode,
    }),
  );
}
UserCheckOutlined.displayName = 'UserCheckOutlined';
export default UserCheckOutlined;
