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
function CircleRLetterOutlined(componentProps) {
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
        d: 'M12.5 7a3.5 3.5 0 011.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7h4.5zm0 2H10v3h2.5a1.5 1.5 0 001.493-1.355L14 10.5A1.5 1.5 0 0012.5 9z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M23 12c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zM3.2 12c0-4.862 3.938-8.8 8.8-8.8s8.8 3.938 8.8 8.8-3.938 8.8-8.8 8.8A8.798 8.798 0 013.2 12z',
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
CircleRLetterOutlined.displayName = 'CircleRLetterOutlined';
export default CircleRLetterOutlined;
