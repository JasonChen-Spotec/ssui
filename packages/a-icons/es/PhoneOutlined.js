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
function PhoneOutlined(componentProps) {
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
        d: 'M8.161 1h7.678c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v13.677c0 .528 0 .982-.03 1.357-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H8.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 014 18.838V5.162c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C7.18 1 7.635 1 8.161 1zM14 3h-4v.4a8.205 8.205 0 00.011.589h.014c.116.01.278.011.575.011h2.8a8.194 8.194 0 00.589-.011v-.014C14 3.86 14 3.697 14 3.4V3zM8 3V3.432c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 00.874.874c.271.138.541.182.77.201.208.017.454.017.706.017h2.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 00.874-.874c.138-.271.182-.541.201-.77C16 3.93 16 3.684 16 3.432V3c.465 0 .783.004 1.032.024.272.022.372.06.422.085a1 1 0 01.437.437c.025.05.063.15.085.422C18 4.25 18 4.623 18 5.2v13.6c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 01-.437.437c-.05.025-.15.063-.422.085C16.75 21 16.377 21 15.8 21H8.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 01-.437-.437c-.025-.05-.063-.15-.085-.422C6 19.75 6 19.377 6 18.8V5.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 01.437-.437c.05-.025.15-.063.422-.085C7.217 3.004 7.535 3 8 3z',
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
PhoneOutlined.displayName = 'PhoneOutlined';
export default PhoneOutlined;
