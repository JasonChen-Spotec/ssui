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
function DragUpAndDownOutlined(componentProps) {
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
        d: 'M2 11h20v2H2v-2z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M11 4.414V11.5h2V4.414l3 3L17.415 6l-4.708-4.707a1 1 0 00-1.414 0L6.586 6 8 7.414l3-3zM12.707 22.707a1 1 0 01-1.414 0L6.586 18 8 16.586l3 3V12.5h2v7.086l3-3L17.414 18l-4.707 4.707z',
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
DragUpAndDownOutlined.displayName = 'DragUpAndDownOutlined';
export default DragUpAndDownOutlined;
