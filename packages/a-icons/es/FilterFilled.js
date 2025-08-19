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
function FilterFilled(componentProps) {
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
        d: 'M4 7.39h6a1 1 0 100-2H4a1 1 0 000 2zM4 13.28h2a2.23 2.23 0 100-2H4a1 1 0 100 2zM13.72 8.46a2.21 2.21 0 001.89-1.07H20a1 1 0 100-2h-4.22a2.23 2.23 0 10-2.06 3.07zM10 17.49H4a1 1 0 100 2h6a1 1 0 000-2zM20 17.49h-3.94a2.24 2.24 0 10-.16 2H20a1 1 0 100-2zM20 11.28h-8a1 1 0 100 2h8a1 1 0 100-2z',
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
FilterFilled.displayName = 'FilterFilled';
export default FilterFilled;
