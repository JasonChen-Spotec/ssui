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
function ComputerFilled(componentProps) {
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
        d: 'M13.16 15.32a1.64 1.64 0 00-2.32 0l-2.31 2.31a1.64 1.64 0 001.16 2.8h4.62a1.64 1.64 0 001.16-2.8l-2.31-2.31z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M19 4.32H5a2.17 2.17 0 00-2 2.3v6.9a2.17 2.17 0 002 2.3h.55a5.9 5.9 0 004.18-1.73l.81-.8a2.06 2.06 0 012.92 0l.81.8a5.9 5.9 0 004.18 1.73H19a2.17 2.17 0 002-2.3v-6.9a2.17 2.17 0 00-2-2.3z',
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
ComputerFilled.displayName = 'ComputerFilled';
export default ComputerFilled;
