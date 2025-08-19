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
function CameraOutlined(componentProps) {
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
        d: 'M9.558 1H14.442a3 3 0 012.999 2.162l.008.022c.046.139.056.168.065.189a1 1 0 00.867.625c.023.002.057.002.213.002h.056c.315 0 .547 0 .744.02a4 4 0 013.587 3.586c.02.197.02.42.019.72v7.915c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 17.71 1 17.046 1 16.242V8.376v-.052c0-.3 0-.522.02-.72A4 4 0 014.606 4.02C4.804 4 5.035 4 5.35 4h.056c.156 0 .19 0 .213-.002a1 1 0 00.867-.625 4.16 4.16 0 00.065-.19l.008-.021c.035-.105.065-.196.099-.281A3 3 0 019.26 1.005C9.352 1 9.448 1 9.558 1zm.023 2c-.147 0-.177 0-.2.002a1 1 0 00-.867.625 4.16 4.16 0 00-.073.211c-.035.105-.065.196-.099.281A3 3 0 015.74 5.995 5.26 5.26 0 015.43 6h-.025c-.395 0-.518.001-.603.01A2 2 0 003.01 7.803c-.009.086-.01.2-.01.574V16.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.82.18C5.361 20 5.942 20 6.8 20h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V8.377a7.07 7.07 0 00-.01-.574 2 2 0 00-1.793-1.793 7.666 7.666 0 00-.603-.01h-.025c-.117 0-.217 0-.309-.005a3 3 0 01-2.701-2.157l-.008-.022a4.104 4.104 0 00-.065-.189 1 1 0 00-.867-.625 4.144 4.144 0 00-.2-.002H9.58zM12 9.5a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z',
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
CameraOutlined.displayName = 'CameraOutlined';
export default CameraOutlined;
