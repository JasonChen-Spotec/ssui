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
function CardFilled(componentProps) {
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
        d: 'M5.33 2h13.34a2.668 2.668 0 012.669 2.668v2.224A2.668 2.668 0 0118.67 9.56H12V8.003h6.67c.614 0 1.112-.497 1.112-1.111V4.668c0-.614-.498-1.112-1.112-1.112H5.33c-.614 0-1.112.498-1.112 1.112v2.224c0 .614.498 1.111 1.112 1.111h1.667V9.56H5.33a2.668 2.668 0 01-2.668-2.668V4.668A2.668 2.668 0 015.33 2z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M6.886 5.78a1 1 0 00-1 1V20.9a1 1 0 001 1h1.223V5.78h1.556V21.9h7.45a1 1 0 001-1V6.78a1 1 0 00-1-1H6.884zm6.226 11.005a1 1 0 011-1h1.335a1 1 0 011 1v2.447a1 1 0 01-1 1h-1.335a1 1 0 01-1-1v-2.447z',
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
CardFilled.displayName = 'CardFilled';
export default CardFilled;
