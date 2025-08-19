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
function StopOutlined(componentProps) {
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
        d: 'M4.968 6.382a9 9 0 0012.65 12.65L4.968 6.382zM3.547 4.961A10.955 10.955 0 001 12c0 6.075 4.925 11 11 11 2.678 0 5.132-.957 7.04-2.547l.03.031.578-.578c.087-.084.174-.17.258-.258l.578-.578-.03-.03A10.956 10.956 0 0023 12c0-6.075-4.925-11-11-11-2.678 0-5.132.957-7.04 2.547l-.03-.031-.578.578c-.087.084-.174.17-.258.258l-.578.578.03.03zm2.835.007l12.65 12.65a9 9 0 00-12.65-12.65z',
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
StopOutlined.displayName = 'StopOutlined';
export default StopOutlined;
