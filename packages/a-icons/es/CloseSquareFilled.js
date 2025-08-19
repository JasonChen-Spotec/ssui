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
function CloseSquareFilled(componentProps) {
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
        d: 'M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm9.48 13.48a.75.75 0 000-1.06L13.06 12l2.42-2.42a.75.75 0 00-1.06-1.06L12 10.94 9.58 8.52a.75.75 0 00-1.06 1.06L10.94 12l-2.42 2.42a.75.75 0 000 1.06.79.79 0 00.53.22.77.77 0 00.53-.22L12 13.06l2.42 2.42a.77.77 0 00.53.22.79.79 0 00.53-.22z',
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
CloseSquareFilled.displayName = 'CloseSquareFilled';
export default CloseSquareFilled;
