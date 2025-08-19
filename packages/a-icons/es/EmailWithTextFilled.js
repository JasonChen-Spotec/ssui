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
function EmailWithTextFilled(componentProps) {
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
        d: 'M16 5H8C5.6 5 4 6.235 4 9.118v5.764C4 17.765 5.6 19 8 19h8c2.4 0 4-1.235 4-4.118V9.118C20 6.235 18.4 5 16 5zm.376 5.015l-2.504 2.06c-.528.436-1.2.65-1.872.65-.672 0-1.352-.214-1.872-.65l-2.504-2.06a.647.647 0 01-.096-.873.587.587 0 01.84-.098l2.504 2.058c.608.503 1.64.503 2.248 0l2.504-2.058a.58.58 0 01.84.098.637.637 0 01-.088.873z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cx: 18.5,
        cy: 16.5,
        r: 4.5,
        fill: 'inhrite',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M15.625 15.5c0-.207.168-.375.375-.375h3a.375.375 0 010 .75h-3a.375.375 0 01-.375-.375zM15.625 17.5c0-.207.168-.375.375-.375h5a.375.375 0 010 .75h-5a.375.375 0 01-.375-.375z',
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
EmailWithTextFilled.displayName = 'EmailWithTextFilled';
export default EmailWithTextFilled;
