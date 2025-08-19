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
function OctagonPromptFilled(componentProps) {
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
        d: 'M20.1 6.47l-3.3-3.3A4 4 0 0013.97 2H9.3a4 4 0 00-2.83 1.17l-3.3 3.3A4 4 0 002 9.3v4.67a4 4 0 001.17 2.82l3.3 3.31a4 4 0 002.83 1.17h4.67a4 4 0 002.83-1.17l3.3-3.31a4 4 0 001.17-2.82V9.3a4 4 0 00-1.17-2.83zm-9.22 1.8a.75.75 0 011.5 0v3.1a.75.75 0 01-1.5 0v-3.1zm.76 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
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
OctagonPromptFilled.displayName = 'OctagonPromptFilled';
export default OctagonPromptFilled;
