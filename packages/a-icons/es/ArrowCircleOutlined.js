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
function ArrowCircleOutlined(componentProps) {
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
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M14.414 1.6L13.41 2.604c4.578.681 8.09 4.628 8.09 9.396a9.488 9.488 0 01-3.911 7.683l-.808.589-1.178-1.617.808-.589a7.503 7.503 0 00-2.956-13.425l.96.959L13 7.014l-2.707-2.707a1 1 0 010-1.414L13 .186 14.414 1.6zM8.397 5.345l-.808.589a7.502 7.502 0 002.956 13.425l-.96-.959L11 16.986l2.707 2.707a1 1 0 010 1.414L11 23.814 9.586 22.4l1.004-1.004C6.012 20.715 2.5 16.767 2.5 12a9.488 9.488 0 013.911-7.683l.808-.589 1.178 1.617z',
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
ArrowCircleOutlined.displayName = 'ArrowCircleOutlined';
export default ArrowCircleOutlined;
