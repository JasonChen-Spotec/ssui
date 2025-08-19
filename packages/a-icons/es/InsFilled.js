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
function InsFilled(componentProps) {
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
      /*#__PURE__*/ React.createElement(
        'g',
        {
          clipPath: 'url(#ins-filled_svg__clip0_1993_12525)',
        },
        /*#__PURE__*/ React.createElement('path', {
          d: 'M0 20a20 20 0 1040 0 20 20 0 00-40 0z',
          fill: 'currentColor',
        }),
        /*#__PURE__*/ React.createElement('path', {
          d: 'M20 14c-3.23 0-6 2.616-6 6 0 3.231 2.615 6 6 6 3.23 0 6-2.615 6-6 0-3.23-2.77-6-6-6zm0 9.846A3.809 3.809 0 0116.154 20 3.809 3.809 0 0120 16.154 3.809 3.809 0 0123.846 20 3.809 3.809 0 0120 23.846zm6.154-11.384c-.77 0-1.385.615-1.385 1.385 0 .769.616 1.384 1.385 1.384.77 0 1.384-.615 1.384-1.384 0-.77-.615-1.385-1.384-1.385z',
          fill: 'inherit',
        }),
        /*#__PURE__*/ React.createElement('path', {
          d: 'M25.385 8.461h-.616c-1.846-.154-7.692-.154-9.538 0-3.539-.154-6.616 2.615-6.77 6.154v.615c-.153 1.846-.153 7.693 0 9.539-.153 3.538 2.616 6.615 6.154 6.769h.616c1.846.154 7.692.154 9.538 0 3.539.154 6.616-2.615 6.77-6.154V15.23c.153-3.538-2.616-6.615-6.154-6.769zm3.692 18.308c-.462 1.077-1.23 1.846-2.154 2.154-4.461.615-9.077.615-13.692 0-1.077-.462-1.846-1.231-2.154-2.154-.462-2.308-.615-4.616-.462-6.77-.153-2.307 0-4.615.462-6.769.462-1.077 1.23-1.846 2.154-2.154 4.461-.615 9.077-.615 13.692 0 1.077.462 1.846 1.231 2.154 2.154.461 2.308.615 4.616.461 6.77.154 2.307 0 4.615-.461 6.769z',
          fill: 'inherit',
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'defs',
        null,
        /*#__PURE__*/ React.createElement(
          'clipPath',
          {
            id: 'ins-filled_svg__clip0_1993_12525',
          },
          /*#__PURE__*/ React.createElement('path', {
            fill: 'inherit',
            d: 'M0 0h40v40H0z',
          }),
        ),
      ),
    );
  };
  return /*#__PURE__*/ React.createElement(
    Icon,
    __assign({}, componentProps, {
      component: IconNode,
    }),
  );
}
InsFilled.displayName = 'InsFilled';
export default InsFilled;
