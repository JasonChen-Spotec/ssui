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
function AddFilled(componentProps) {
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
        d: 'M6.6 3h10.8A3.6 3.6 0 0121 6.6v10.8a3.6 3.6 0 01-3.6 3.6H6.6A3.6 3.6 0 013 17.4V6.6A3.6 3.6 0 016.6 3zm6.075 9.675H15.6a.675.675 0 100-1.35h-2.925V8.4a.675.675 0 10-1.35 0v2.925H8.4a.675.675 0 100 1.35h2.925V15.6a.675.675 0 001.35 0v-2.925z',
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
AddFilled.displayName = 'AddFilled';
export default AddFilled;
