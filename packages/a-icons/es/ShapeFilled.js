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
function ShapeFilled(componentProps) {
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
        d: 'M15.44 3.69v-.17c0-.84-.681-1.52-1.52-1.52H9.38c-.84 0-1.52.68-1.52 1.52v.14A4.21 4.21 0 004 7.88v10.64a4.22 4.22 0 004.23 4.22h6.85a4.22 4.22 0 004.23-4.22V7.88a4.22 4.22 0 00-3.87-4.19zm-6.062-.17h4.56v1.19h-4.56V3.52zm2.323 5.62h-3.12a.75.75 0 000 1.5h3.12a.75.75 0 000-1.5zm2.19 7.55h-5.31a.75.75 0 010-1.5h5.31a.75.75 0 010 1.5zm-5.31-2.93h6.14a.75.75 0 000-1.5h-6.14a.75.75 0 000 1.5z',
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
ShapeFilled.displayName = 'ShapeFilled';
export default ShapeFilled;
