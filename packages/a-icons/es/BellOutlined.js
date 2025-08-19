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
function BellOutlined(componentProps) {
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
        d: 'M7.05 3.05A7 7 0 0119 8c0 2.913.732 4.844 1.5 6.077l.011.019c.358.574.64 1.028.83 1.359.096.165.183.325.247.466.032.071.068.158.096.252.024.079.068.246.051.45-.01.136-.039.37-.173.611a1.482 1.482 0 01-.428.47c-.25.186-.538.229-.634.243h-.004a4.619 4.619 0 01-.483.04c-.336.013-.8.013-1.377.013H5.364c-.577 0-1.041 0-1.376-.013a4.618 4.618 0 01-.484-.04H3.5a1.405 1.405 0 01-.634-.242 1.48 1.48 0 01-.428-.47 1.482 1.482 0 01-.173-.613c-.017-.203.027-.37.05-.449.029-.094.065-.18.097-.251a5.66 5.66 0 01.247-.467c.19-.33.472-.785.83-1.359l.012-.019C4.268 12.844 5 10.913 5 8a7 7 0 012.05-4.95zM12 3a5 5 0 00-5 5c0 3.268-.827 5.568-1.801 7.134-.213.342-.39.627-.536.865L5.39 16H18.61l.726-.001c-.145-.238-.323-.523-.536-.865C17.827 13.568 17 11.268 17 8a5 5 0 00-5-5zM7.553 19.658l.894.447a7.944 7.944 0 007.106 0l.894-.447.895 1.79-.895.446a9.944 9.944 0 01-8.894 0l-.895-.447.895-1.789z',
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
BellOutlined.displayName = 'BellOutlined';
export default BellOutlined;
