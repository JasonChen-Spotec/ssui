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
function NoteFilled(componentProps) {
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
        d: 'M9.75 14.63a.75.75 0 01-.29 1 .76.76 0 01-1.02-.29L7.15 13a.75.75 0 011.31-.73l1.29 2.36z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M14.16 10.15h4.78a.5.5 0 01.5.5v6.92a4 4 0 01-4 4H8.55a4 4 0 01-4-4V6.42a4 4 0 014-4h2.67a.51.51 0 01.5.5v4.77a2.45 2.45 0 002.44 2.46zm-2.288 10.022a.38.38 0 00.198-.362l.06-1.98a1.708 1.708 0 00-.21-.8l-2.63-4.8a1.8 1.8 0 00-2.29-1 1.81 1.81 0 00-.4 2.49l2.62 4.82c.133.247.33.455.57.6l1.67 1a.38.38 0 00.412.032z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M12.77 3v4.57c0 .817.663 1.48 1.48 1.48h4.63a.56.56 0 00.39-1L13.72 2.6a.56.56 0 00-.95.4z',
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
NoteFilled.displayName = 'NoteFilled';
export default NoteFilled;
