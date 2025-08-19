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
function SphereFilled(componentProps) {
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
        d: 'M21.045 9.985a9.62 9.62 0 00-11.2 9.46 8.43 8.43 0 00.14 1.6 9.59 9.59 0 1111.06-11.06z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M21.175 12.585a8.45 8.45 0 01-8.46 8.46 7.325 7.325 0 01-1.41-.12 7.316 7.316 0 01-.13-1.4 8.47 8.47 0 018.46-8.47c.476-.003.952.04 1.42.13.08.462.12.93.12 1.4z',
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
SphereFilled.displayName = 'SphereFilled';
export default SphereFilled;
