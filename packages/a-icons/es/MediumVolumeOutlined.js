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
function MediumVolumeOutlined(componentProps) {
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
        d: 'M10 5.414L7.176 8.238l-.036.037c-.134.134-.303.304-.51.43a2 2 0 01-.577.24C5.817 9 5.578 9 5.388 9H3.6a8.184 8.184 0 00-.589.011v.014C3 9.14 3 9.303 3 9.6v4.8a8.187 8.187 0 00.011.588l.014.002c.116.01.278.01.575.01h1.788c.19 0 .43-.001.665.055.204.05.399.13.578.24.206.126.375.296.509.43l.036.037L10 18.585V5.414zm.382-2.702a1.5 1.5 0 011.259.52c.279.328.323.721.34.912.02.214.019.48.019.75V19.106c0 .27 0 .536-.019.75-.017.19-.061.584-.34.911a1.5 1.5 0 01-1.259.521c-.428-.034-.738-.28-.885-.403a9.17 9.17 0 01-.543-.517l-3.192-3.192a6.13 6.13 0 00-.175-.171l-.002-.002H5.58A6.13 6.13 0 005.337 17H3.568c-.252 0-.498 0-.706-.017a2.02 2.02 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 14.93 1 14.684 1 14.432V9.6v-.032c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C3.07 7 3.316 7 3.568 7H5.337a6.184 6.184 0 00.248-.003l.002-.002c.035-.032.082-.078.175-.17l3.165-3.166.027-.027c.19-.191.379-.379.543-.517.147-.123.457-.37.885-.403zm9.594.892l.584.812A12.946 12.946 0 0123 12c0 2.829-.905 5.45-2.44 7.584l-.584.812-1.624-1.168.584-.812A10.945 10.945 0 0021 12c0-2.396-.765-4.61-2.064-6.416l-.584-.812 1.624-1.168zm-3.983 3.004l.572.82A7.968 7.968 0 0118 12c0 1.698-.53 3.276-1.434 4.572l-.573.82-1.64-1.144.572-.82A5.968 5.968 0 0016 12a5.968 5.968 0 00-1.075-3.428l-.572-.82 1.64-1.144z',
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
MediumVolumeOutlined.displayName = 'MediumVolumeOutlined';
export default MediumVolumeOutlined;
