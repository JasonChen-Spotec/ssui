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
function ClockFastForwardOutlined(componentProps) {
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
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M11 4a8 8 0 106.223 13.028l.629-.777 1.554 1.258-.629.777A9.983 9.983 0 0111 22C5.477 22 1 17.523 1 12S5.477 2 11 2c5.134 0 9.365 3.87 9.935 8.851l.765-.765 1.414 1.414-2.706 2.707a1 1 0 01-1.415 0L16.287 11.5l1.414-1.414 1.275 1.274A8 8 0 0011 4zm1 2v5.465l3.387 2.258-1.11 1.664-3.832-2.555A1 1 0 0110 12V6h2z',
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
ClockFastForwardOutlined.displayName = 'ClockFastForwardOutlined';
export default ClockFastForwardOutlined;
