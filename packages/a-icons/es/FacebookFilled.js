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
function FacebookFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/ React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 40 40',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      /*#__PURE__*/ React.createElement('rect', {
        width: 40,
        height: 40,
        rx: 20,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'M25.632 21.5l.724-4.599h-4.463v-2.989c0-1.258.623-2.486 2.616-2.486h2.057V7.509a24.962 24.962 0 00-3.622-.309c-3.673 0-6.072 2.206-6.072 6.195V16.9h-4.071v4.6h4.071v11.124h5.021V21.5h3.739z',
        fill: 'inherit',
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
FacebookFilled.displayName = 'FacebookFilled';
export default FacebookFilled;
