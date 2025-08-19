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
function FourDotOutlined(componentProps) {
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
        d: 'M2.5 6.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM6.75 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM17.25 2.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM15 6.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM17.25 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM15 17.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM4.5 17.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z',
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
FourDotOutlined.displayName = 'FourDotOutlined';
export default FourDotOutlined;
