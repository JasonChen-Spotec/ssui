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
function UploadSendOutlined(componentProps) {
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
        d: 'M17.102 19.041c.567 0 1.028.448 1.028 1s-.46 1-1.028 1H6.82c-.567 0-1.028-.448-1.028-1s.46-1 1.028-1h10.282zm-5.86-15.75a1.05 1.05 0 011.45 0l5.994 5.83a.981.981 0 01.03 1.41c-.193.19-.456.295-.73.295-.274 0-.537-.106-.73-.295l-4.267-4.12v10.63c0 .552-.46 1-1.028 1-.568 0-1.028-.448-1.028-1V6.411l-4.236 4.12a1.05 1.05 0 01-1.396-.053.98.98 0 01-.054-1.357l5.994-5.83z',
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
UploadSendOutlined.displayName = 'UploadSendOutlined';
export default UploadSendOutlined;
