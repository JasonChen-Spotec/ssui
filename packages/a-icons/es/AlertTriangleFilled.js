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
function AlertTriangleFilled(componentProps) {
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
        d: 'M20.855 15.504l-5.64-10.44a4 4 0 00-7 0l-5.73 10.43a4 4 0 003.51 5.91h11.34a4 4 0 003.52-5.9zm-10-5.76a.75.75 0 011.5 0v3.09a.75.75 0 01-1.5 0v-3.09zm.76 6.75a.75.75 0 00.75-.75l-.01-.01a.74.74 0 00-.74-.74.76.76 0 00-.75.75c0 .414.336.75.75.75z',
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
AlertTriangleFilled.displayName = 'AlertTriangleFilled';
export default AlertTriangleFilled;
