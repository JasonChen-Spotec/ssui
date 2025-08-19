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
function YoutubeFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 40 40',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('rect', {
        width: 40,
        height: 40,
        rx: 20,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M31.5 13.823a3.01 3.01 0 00-2.123-2.123c-1.87-.5-9.377-.5-9.377-.5s-7.502 0-9.377.5A3.01 3.01 0 008.5 13.823C8 15.694 8 19.6 8 19.6s0 3.906.5 5.777a3.01 3.01 0 002.123 2.123C12.498 28 20 28 20 28s7.506 0 9.377-.5a3.01 3.01 0 002.123-2.123c.5-1.87.5-5.777.5-5.777s0-3.906-.5-5.777z',
        fill: 'inherit',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M17.602 23.2l6.235-3.6-6.235-3.6v7.2z',
        fill: 'inherit',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M17.602 23.201l6.234-3.6L17.602 16v7.201z',
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
YoutubeFilled.displayName = 'YoutubeFilled';
export default YoutubeFilled;
