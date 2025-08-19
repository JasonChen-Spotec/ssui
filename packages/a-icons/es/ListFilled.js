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
function ListFilled(componentProps) {
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
      /*#__PURE__*/ React.createElement('rect', {
        x: 1.62,
        y: 3,
        width: 8,
        height: 8,
        rx: 2.25,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('rect', {
        x: 1.62,
        y: 13,
        width: 8,
        height: 8,
        rx: 2.25,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M13.62 6.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM13.62 9.75h8a.75.75 0 000-1.5h-8a.75.75 0 000 1.5zM13.62 16.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM21.62 18.25h-8a.75.75 0 000 1.5h8a.75.75 0 000-1.5z',
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
ListFilled.displayName = 'ListFilled';
export default ListFilled;
