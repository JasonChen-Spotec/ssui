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
function FourDotFilled(componentProps) {
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
        d: 'M11 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM21 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM11 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM21 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z',
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
FourDotFilled.displayName = 'FourDotFilled';
export default FourDotFilled;
