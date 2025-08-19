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
function RectForkFilled(componentProps) {
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
        d: 'M5.1 21.6a2.7 2.7 0 01-2.7-2.7V5.1a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v13.8a2.7 2.7 0 01-2.7 2.7h-3zM15.9 21.6a2.7 2.7 0 01-2.7-2.7v-3a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v3a2.7 2.7 0 01-2.7 2.7h-3zM15.9 10.8a2.7 2.7 0 01-2.7-2.7v-3a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v3a2.7 2.7 0 01-2.7 2.7h-3z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M9.6 18v-1.2h4.8V18H9.6zM9.6 7.2V6h4.8v1.2H9.6z',
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
RectForkFilled.displayName = 'RectForkFilled';
export default RectForkFilled;
