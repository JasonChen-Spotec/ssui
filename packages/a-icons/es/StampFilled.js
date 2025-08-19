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
function StampFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 24 24',
          fill: 'currentColor',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('rect', {
        x: 4,
        y: 13,
        width: 16,
        height: 5,
        rx: 2,
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M10 10h4v4h-4z',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 12,
        cy: 7,
        r: 4,
      }),
      /*#__PURE__*/ React.createElement('rect', {
        x: 5,
        y: 19,
        width: 14,
        height: 2,
        rx: 1,
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
StampFilled.displayName = 'StampFilled';
export default StampFilled;
