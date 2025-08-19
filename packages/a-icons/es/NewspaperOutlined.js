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
function NewspaperOutlined(componentProps) {
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
        d: 'M14 7H6v2h8V7zM14 11H6v2h8v-2zM6 15h5v2H6v-2z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M2 6a4 4 0 014-4h8a4 4 0 014 4v2h1.91c1.154 0 2.09.936 2.09 2.09V19a3 3 0 01-3 3H6a4 4 0 01-4-4V6zm18 13a1 1 0 01-2 0v-9h1.91c.05 0 .09.04.09.09V19zM16 6v14H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2z',
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
NewspaperOutlined.displayName = 'NewspaperOutlined';
export default NewspaperOutlined;
