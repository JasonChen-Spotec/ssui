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
function FunnelFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M4.899 2h14.18a2.9 2.9 0 012.05 4.95l-4.77 4.77a3 3 0 00-.85 2.06v4.39a2.91 2.91 0 01-1.16 2.32l-1.24.94a2.9 2.9 0 01-4.64-2.33v-5.32a3 3 0 00-.85-2.06l-4.77-4.77A2.9 2.9 0 014.899 2z',
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
FunnelFilled.displayName = 'FunnelFilled';
export default FunnelFilled;
