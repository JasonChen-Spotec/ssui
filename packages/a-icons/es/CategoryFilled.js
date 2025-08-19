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
function CategoryFilled(componentProps) {
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
        x: 2.33,
        y: 2,
        width: 8.67,
        height: 6.67,
        rx: 2.25,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('rect', {
        x: 13.67,
        y: 2,
        width: 8,
        height: 11.33,
        rx: 2.25,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('rect', {
        x: 13.67,
        y: 16,
        width: 8,
        height: 6,
        rx: 2.25,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('rect', {
        x: 2.33,
        y: 11.33,
        width: 8.67,
        height: 10.67,
        rx: 2.25,
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
CategoryFilled.displayName = 'CategoryFilled';
export default CategoryFilled;
