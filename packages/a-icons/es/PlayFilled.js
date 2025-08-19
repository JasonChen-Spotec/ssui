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
function PlayFilled(componentProps) {
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
        d: 'M17.36 9.7l-7.25-4.19a3 3 0 00-4.5 2.6v8.37a3 3 0 004.5 2.6l7.25-4.19a3 3 0 000-5.19z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M16.46 13.34l-7.25 4.18a1.19 1.19 0 01-.6.17 1.21 1.21 0 01-1.21-1.21V8.11c0-.668.542-1.21 1.21-1.21.212.003.419.061.6.17l7.25 4.18a1.2 1.2 0 01.6 1.05 1.19 1.19 0 01-.6 1.04z',
        fill: 'inherit',
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
PlayFilled.displayName = 'PlayFilled';
export default PlayFilled;
