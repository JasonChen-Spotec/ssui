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
function HomeFilled(componentProps) {
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
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M14.454 3.803l5.002 3.695A3.733 3.733 0 0121 10.5v6.688a3.903 3.903 0 01-3.988 3.79H6.998A3.903 3.903 0 013 17.189v-6.688a3.733 3.733 0 011.544-3.003l5.002-3.695a4.15 4.15 0 014.908 0zM7.737 16.972h8.526a.71.71 0 100-1.421H7.737a.71.71 0 100 1.42z',
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
HomeFilled.displayName = 'HomeFilled';
export default HomeFilled;
