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
function TwoPersonConfirmFilled(componentProps) {
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
        d: 'M8.732 11h.08a4 4 0 004-4V5.43a3.37 3.37 0 00-3.4-3.36h-1.32a3.37 3.37 0 00-3.36 3.36V7a4 4 0 004 4zM17.313 10.25a3 3 0 003-3V6.1a2.52 2.52 0 00-2.5-2.52h-1a2.52 2.52 0 00-2.5 2.52v1.15a3 3 0 003 3zM22.202 14.42l-.16-.79a2.27 2.27 0 00-2.23-1.88h-6.1a2.22 2.22 0 00-1.85 1h-7.05a2.76 2.76 0 00-1.9.76 3 3 0 00-.89 1.51v.4l-.21.8a3 3 0 002.8 3.71h8.28c.213 0 .424-.027.63-.08h.13c.15-.043.298-.096.44-.16l.16-.09c.12-.067.233-.144.34-.23l.16-.13c.099-.092.192-.188.28-.29 0-.05.09-.09.13-.15a2.83 2.83 0 00.29-.47c.043-.09.08-.184.11-.28.04-.091.073-.185.1-.28 0-.1.05-.2.07-.3v-.15h4.28a2.33 2.33 0 002.19-2.9z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 18.5,
        cy: 16.5,
        r: 4.5,
        fill: 'inherit',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M16.5 16.546l1.082 1.082c.088.088.132.132.183.148a.222.222 0 00.137 0c.05-.016.095-.06.183-.148l2.415-2.415',
        stroke: '#fff',
        strokeWidth: 0.75,
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
TwoPersonConfirmFilled.displayName = 'TwoPersonConfirmFilled';
export default TwoPersonConfirmFilled;
