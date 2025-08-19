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
function LinkedinFilled(componentProps) {
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
        d: 'M14.938 28V15.583h-4.287V28h4.288zm-2.142-14.11c1.495 0 2.425-.954 2.425-2.145-.028-1.219-.93-2.145-2.397-2.145-1.467 0-2.426.926-2.426 2.145 0 1.191.93 2.144 2.37 2.144h.027zM17.312 28h4.287v-6.933c0-.37.028-.742.14-1.007.31-.741 1.016-1.51 2.2-1.51 1.552 0 2.172 1.14 2.172 2.808V28h4.287v-7.118c0-3.813-2.114-5.588-4.935-5.588-2.313 0-3.328 1.244-3.893 2.092h.029v-1.8h-4.287c.056 1.164 0 12.415 0 12.415z',
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
LinkedinFilled.displayName = 'LinkedinFilled';
export default LinkedinFilled;
