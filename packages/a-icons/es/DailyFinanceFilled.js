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
function DailyFinanceFilled(componentProps) {
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
        d: 'M16.9 3.57h.1a5 5 0 015 5v9a5 5 0 01-5 5H7a5 5 0 01-5-5v-9a5 5 0 015-5h.1V1.75a.75.75 0 011.5 0v1.82h6.8V1.75a.75.75 0 011.5 0v1.82zM7.5 9.66h9a.75.75 0 000-1.5h-9a.75.75 0 000 1.5z',
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
DailyFinanceFilled.displayName = 'DailyFinanceFilled';
export default DailyFinanceFilled;
