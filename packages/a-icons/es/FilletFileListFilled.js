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
function FilletFileListFilled(componentProps) {
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
        d: 'M8 2h8.28a4 4 0 014 4v12.62a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4zm6.53 6.08h-6.7a.73.73 0 100 1.46h6.7a.73.73 0 100-1.46zm-1.91 9.46H7.83a.73.73 0 110-1.46h4.79a.73.73 0 110 1.46zm-4.79-4h8.62a.73.73 0 100-1.46H7.83a.73.73 0 100 1.46z',
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
FilletFileListFilled.displayName = 'FilletFileListFilled';
export default FilletFileListFilled;
