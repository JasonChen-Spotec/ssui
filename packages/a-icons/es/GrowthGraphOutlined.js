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
function GrowthGraphOutlined(componentProps) {
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
        d: 'M2.032 2.154v16.692a3 3 0 003 3h16.936v-2H5.032a1 1 0 01-1-1V2.154h-2z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M16.913 12.726l4.602-4.913-1.46-1.367-4.498 4.802-3.123-1.622a3.744 3.744 0 01-.037-.02c-.134-.07-.412-.22-.722-.247a1.5 1.5 0 00-.758.13c-.283.129-.495.361-.598.473a2.69 2.69 0 01-.028.031l-4.603 4.912 1.46 1.368 4.499-4.802 3.123 1.622.037.02c.134.07.411.22.72.247a1.5 1.5 0 00.76-.13c.282-.129.495-.361.597-.473l.029-.031z',
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
GrowthGraphOutlined.displayName = 'GrowthGraphOutlined';
export default GrowthGraphOutlined;
