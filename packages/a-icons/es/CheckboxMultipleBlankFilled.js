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
function CheckboxMultipleBlankFilled(componentProps) {
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
      /*#__PURE__*/ React.createElement(
        'g',
        {
          clipPath: 'url(#checkbox-multiple-blank-filled_svg__clip0_18321_25536)',
        },
        /*#__PURE__*/ React.createElement('path', {
          d: 'M7 7V3a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 012 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3z',
          fill: 'currentColor',
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'defs',
        null,
        /*#__PURE__*/ React.createElement(
          'clipPath',
          {
            id: 'checkbox-multiple-blank-filled_svg__clip0_18321_25536',
          },
          /*#__PURE__*/ React.createElement('path', {
            fill: '#fff',
            d: 'M0 0h24v24H0z',
          }),
        ),
      ),
    );
  };
  return /*#__PURE__*/ React.createElement(
    Icon,
    __assign({}, componentProps, {
      component: IconNode,
    }),
  );
}
CheckboxMultipleBlankFilled.displayName = 'CheckboxMultipleBlankFilled';
export default CheckboxMultipleBlankFilled;
