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
function BoardFilled(componentProps) {
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
        d: 'M12.72 4.927a1.25 1.25 0 00-1.441 0l-7.347 5.186-.865-1.226 7.347-5.186a2.75 2.75 0 013.172 0l7.346 5.186-.865 1.226-7.346-5.186z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M2.75 10c0-.966.784-1.75 1.75-1.75h15c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 01-1.75 1.75h-15A1.75 1.75 0 012.75 20V10zm1.75-.25a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h15a.25.25 0 00.25-.25V10a.25.25 0 00-.25-.25h-15z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M3.5 10a1 1 0 011-1h15a1 1 0 011 1v10a1 1 0 01-1 1h-15a1 1 0 01-1-1V10zm3.75 7a.75.75 0 01.75-.75h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zM7 12.25a.75.75 0 000 1.5h10a.75.75 0 000-1.5H7z',
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
BoardFilled.displayName = 'BoardFilled';
export default BoardFilled;
