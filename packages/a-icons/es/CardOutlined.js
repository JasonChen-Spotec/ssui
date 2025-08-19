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
function CardOutlined(componentProps) {
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
        d: 'M7 4.5h10v2H7v-2zM8.732 10.64L9.865 12H9v2h2v1H9v2h2v2h2v-2h2v-2h-2v-1h2v-2h-.865l1.133-1.36-1.536-1.28L12 11.438 10.268 9.36l-1.536 1.28z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M5 1a3 3 0 00-3 3v3a3 3 0 003 3v10a3 3 0 003 3h8a3 3 0 003-3V10a3 3 0 003-3V4a3 3 0 00-3-3H5zM4 4a1 1 0 011-1h14a1 1 0 011 1v3a1 1 0 01-1 1h-1.5a.5.5 0 00-.5.5V20a1 1 0 01-1 1H8a1 1 0 01-1-1V8.5a.5.5 0 00-.5-.5H5a1 1 0 01-1-1V4z',
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
CardOutlined.displayName = 'CardOutlined';
export default CardOutlined;
