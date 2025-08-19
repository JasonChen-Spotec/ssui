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
function TwoPeopleRectOutlined(componentProps) {
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
        d: 'M17 6a1 1 0 110-2 1 1 0 010 2zm0 2a3 3 0 100-6 3 3 0 000 6zM7 3a4 4 0 00-4 4v2h2V7a2 2 0 012-2h3V3H7zm10 18a4 4 0 004-4v-2h-2v2a2 2 0 01-2 2h-3v2h3zm-9-8a1 1 0 10-2 0 1 1 0 002 0zm2 0a3 3 0 11-6 0 3 3 0 016 0zm7-2a2 2 0 00-2 2h-2a4 4 0 018 0h-2a2 2 0 00-2-2zM5 21a2 2 0 114 0h2a4 4 0 00-8 0h2z',
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
TwoPeopleRectOutlined.displayName = 'TwoPeopleRectOutlined';
export default TwoPeopleRectOutlined;
