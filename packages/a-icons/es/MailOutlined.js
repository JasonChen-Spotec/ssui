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
function MailOutlined(componentProps) {
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
        d: 'M6.759 3H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564a8.995 8.995 0 01.014.21c.03.5.03 1.097.03 1.8v6.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 16.71 1 16.046 1 15.242V8.758a32.624 32.624 0 01.032-1.84 9.09 9.09 0 01.012-.17c.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 3 5.954 3 6.758 3zM3 8.904V15.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C5.361 19 5.943 19 6.8 19h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V8.904l-6.591 4.63a42.26 42.26 0 00-.116.082c-.544.382-1.023.718-1.567.854a3 3 0 01-1.452 0c-.544-.136-1.022-.472-1.567-.854a42.313 42.313 0 00-.116-.081L3 8.905zM20.914 6.52a1.498 1.498 0 00-.132-.428 2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 5 18.057 5 17.2 5H6.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874 1.5 1.5 0 00-.132.428l7.652 5.376c.729.51.884.599 1.02.633a1 1 0 00.484 0c.136-.034.29-.123 1.019-.632l7.653-5.377z',
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
MailOutlined.displayName = 'MailOutlined';
export default MailOutlined;
