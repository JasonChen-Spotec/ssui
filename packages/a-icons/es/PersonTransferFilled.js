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
function PersonTransferFilled(componentProps) {
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
        d: 'M16.76 7.395a4.644 4.644 0 11-9.287 0 4.644 4.644 0 019.288 0zM11.825 13.727h-3.93a4.222 4.222 0 00-4.221 4.222v2.533h8.151a6.303 6.303 0 01-.975-3.377c0-1.242.358-2.4.975-3.378z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M17.183 12.461a4.644 4.644 0 100 9.287 4.644 4.644 0 000-9.287zm.5 1.9c-.692.113-1.386.343-1.942.784a2.628 2.628 0 00-1.01 1.998H14.292a.162.162 0 00-.148.104.171.171 0 00.032.173l1.105 1.41c.079.103.23.141.348.089a.34.34 0 00.144-.125l1.03-1.336.013-.017c.025-.033.051-.066.054-.109.015-.087-.054-.178-.143-.183-.098.003-.196.003-.294.003h-.167l.001-.017c.018-.392.035-.789.151-1.166.081-.27.21-.524.381-.748.246-.325.572-.58.919-.787.042-.022.01-.09-.033-.073zm1.406 1.014a.295.295 0 00-.366-.08.393.393 0 00-.143.14l-.02.028-.36.463c-.228.292-.455.584-.68.877-.072.091-.012.242.105.256.098.003.197.003.295.002h.169c.001.32-.003.643-.067.957-.057.29-.167.572-.33.82-.231.354-.56.633-.915.856l-.056.034a.93.93 0 00-.092.057c-.025.029.006.078.043.063a4.721 4.721 0 001.477-.473c.366-.196.697-.46.949-.79.332-.434.522-.974.536-1.519h.431a.165.165 0 00.16-.123c.018-.06-.008-.124-.04-.175l-.548-.696-.548-.697z',
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
PersonTransferFilled.displayName = 'PersonTransferFilled';
export default PersonTransferFilled;
