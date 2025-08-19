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
function ImacFilled(componentProps) {
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
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M18.5 4h-13a3.15 3.15 0 00-3 3.27v5.46a3.15 3.15 0 003 3.27h3.76a12 12 0 01-.48 1.88l-.34.94A.86.86 0 009.15 20h5.71a.85.85 0 00.7-1.18l-.33-.94c-.22-.61-.38-1.24-.48-1.88h3.75a3.15 3.15 0 003-3.27V7.27a3.15 3.15 0 00-3-3.27zm-7.07 10.08a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM5 12.47h14v.03a.75.75 0 000-1.5H5a.75.75 0 100 1.47z',
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
ImacFilled.displayName = 'ImacFilled';
export default ImacFilled;
