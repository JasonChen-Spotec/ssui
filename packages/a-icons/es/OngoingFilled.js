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
function OngoingFilled(componentProps) {
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
      /*#__PURE__*/ React.createElement('circle', {
        cx: 12,
        cy: 12,
        r: 9,
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 8,
        cy: 12.1,
        r: 1.1,
        fill: 'inherit',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 12,
        cy: 12.1,
        r: 1.1,
        fill: 'inherit',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 16,
        cy: 12.1,
        r: 1.1,
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
OngoingFilled.displayName = 'OngoingFilled';
export default OngoingFilled;
