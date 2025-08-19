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
function DotsOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 20 20',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M9.999 5a.833.833 0 100-1.666.833.833 0 000 1.667zM9.999 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM9.999 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM15.832 5a.833.833 0 100-1.666.833.833 0 000 1.667zM15.832 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM15.832 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM4.165 5a.833.833 0 100-1.666.833.833 0 000 1.667zM4.165 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM4.165 16.667a.833.833 0 100-1.666.833.833 0 000 1.666z',
        stroke: 'currentColor',
        strokeWidth: 1.667,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
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
DotsOutlined.displayName = 'DotsOutlined';
export default DotsOutlined;
