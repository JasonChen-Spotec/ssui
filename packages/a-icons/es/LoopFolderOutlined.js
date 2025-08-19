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
function LoopFolderOutlined(componentProps) {
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
      /*#__PURE__*/ React.createElement('rect', {
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M6 .586l2.707 2.707a1 1 0 010 1.414L6 7.414 4.586 6l.967-.967A3 3 0 003 8v1H1V8a5 5 0 014.601-4.984L4.586 2 6 .586zM9.22 6.25a7 7 0 118.529 8.529l-.968.249-.499-1.937.969-.25a5 5 0 10-6.093-6.093l-.25.969-1.937-.499.25-.968zM8 11a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0zm22-1v1a5 5 0 01-4.601 4.984L19.414 22 18 23.414l-2.707-2.707a1 1 0 010-1.414L18 16.586 19.414 18l-.967.967A3 3 0 0021 16v-1h2z',
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
LoopFolderOutlined.displayName = 'LoopFolderOutlined';
export default LoopFolderOutlined;
