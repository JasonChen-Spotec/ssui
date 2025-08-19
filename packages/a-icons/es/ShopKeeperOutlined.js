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
function ShopKeeperOutlined(componentProps) {
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
        d: 'M5.234 7.73A7.993 7.993 0 0112 4a7.994 7.994 0 016.767 3.73l1.69-1.07A9.994 9.994 0 0012 2a9.994 9.994 0 00-8.456 4.66l1.69 1.07zM12 20a7.993 7.993 0 01-6.766-3.73l-1.69 1.07A9.994 9.994 0 0012 22a9.994 9.994 0 008.457-4.66l-1.69-1.07A7.994 7.994 0 0112 20zm0-12a1 1 0 110 2 1 1 0 010-2zm0 4a3 3 0 100-6 3 3 0 000 6zm0 3a2 2 0 00-2 2H8a4 4 0 018 0h-2a2 2 0 00-2-2zm-9-4a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm20 0a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z',
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
ShopKeeperOutlined.displayName = 'ShopKeeperOutlined';
export default ShopKeeperOutlined;
