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
function LayerFilled(componentProps) {
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
        fill: 'currentColor',
        d: 'M2.35 9.55l7.92 4a3 3 0 002.55 0l8.79-4a1 1 0 000-1.75l-8.79-4a3 3 0 00-2.55.05l-7.92 4a1 1 0 000 1.7z',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fill: 'currentColor',
        d: 'M21.29 12l-8.85 3.69a2 2 0 01-1.71 0L2.89 12a.76.76 0 00-1 .37.75.75 0 00.37 1L10.08 17a3.56 3.56 0 001.56.36c.483 0 .96-.101 1.4-.3l8.82-3.67a.751.751 0 00-.57-1.39z',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fill: 'currentColor',
        d: 'M21.29 15.08l-8.85 3.69a2 2 0 01-1.71 0l-7.84-3.68a.754.754 0 00-.63 1.37l7.82 3.62a3.57 3.57 0 001.56.37 3.4 3.4 0 001.4-.31l8.82-3.67a.75.75 0 10-.57-1.39z',
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
LayerFilled.displayName = 'LayerFilled';
export default LayerFilled;
