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
function DownloadFilled(componentProps) {
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
        d: 'M9 14l2.646 2.646a.5.5 0 00.708 0L15 14h5a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h5z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M17.793 8H14V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V8H6.207a.5.5 0 00-.353.854l5.792 5.792a.5.5 0 00.708 0l5.792-5.792A.5.5 0 0017.793 8z',
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
DownloadFilled.displayName = 'DownloadFilled';
export default DownloadFilled;
