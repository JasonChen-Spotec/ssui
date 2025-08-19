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
function ChevronUpFilled(componentProps) {
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
      /*#__PURE__*/ React.createElement('rect', {
        fill: 'currentColor',
        width: 19.12,
        height: 19.12,
        rx: 2,
        transform: 'matrix(0 -1 -1 0 21.52 21.6)',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M7.19 8.9a.75.75 0 00-.53.22.74.74 0 000 1.06l4.77 4.78a.75.75 0 001.06 0l4.77-4.78a.74.74 0 000-1.06.75.75 0 00-1.06 0l-4.24 4.25-4.24-4.25a.79.79 0 00-.53-.22z',
        fill: '#fff',
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
ChevronUpFilled.displayName = 'ChevronUpFilled';
export default ChevronUpFilled;
