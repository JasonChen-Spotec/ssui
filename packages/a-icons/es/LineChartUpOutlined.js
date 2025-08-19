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
function LineChartUpOutlined(componentProps) {
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
        d: 'M8 4a3 3 0 013-3h8a3 3 0 013 3v11a3 3 0 01-3 3h-1v2a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h2V4zm11 12h-1V8a3 3 0 00-3-3h-5V4a1 1 0 011-1h8a1 1 0 011 1v11a1 1 0 01-1 1zm-4-9H6a1 1 0 00-1 1v6.225l3.434-2.08a1 1 0 011.214.137l2.542 2.463L16 12.437V8a1 1 0 00-1-1zm1 7.775l-3.434 2.08a1 1 0 01-1.214-.137L8.81 14.255 5 16.563V20a1 1 0 001 1h9a1 1 0 001-1v-5.225z',
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
LineChartUpOutlined.displayName = 'LineChartUpOutlined';
export default LineChartUpOutlined;
