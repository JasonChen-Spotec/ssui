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
function EarthOutlined(componentProps) {
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
        d: 'M12.447 11.106a1 1 0 00-1.375.523l-1 2.5a1 1 0 00-.02.687l1 3A1 1 0 0012 18.5h3a1 1 0 00.832-.445l2-3a1 1 0 00-.385-1.45l-5-2.5zm-.382 3.425l.46-1.15 3.015 1.507-1.075 1.612H12.72l-.656-1.969z',
        fill: 'currentColor',
      }),
      /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 002.465-17.658l-.473 3.782a1 1 0 01-.545.77L9.644 9.796 7.78 12.125a1 1 0 01-1.31.223l-3.307-2.066A9 9 0 0012 21zm0-18c.165 0 .328.004.49.013l-.416 3.332-3.521 1.76a1 1 0 00-.334.27L6.775 10.18 3.787 8.313A9.002 9.002 0 0112 3z',
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
EarthOutlined.displayName = 'EarthOutlined';
export default EarthOutlined;
