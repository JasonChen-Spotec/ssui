var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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
import * as React from 'react';
import Icon from 'a-base-icon/lib/icon';
function HandCoinsFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.473 1c1.266 0 2.41.523 3.227 1.364a4.5 4.5 0 11-1.428 7.261A4.5 4.5 0 1111.472 1zm4.5 4.5a4.483 4.483 0 01-1.07 2.913 2.5 2.5 0 10.85-4.31c.142.44.22.91.22 1.397zM4.432 12h-.864c-.252 0-.498 0-.706.017a2.022 2.022 0 00-.77.201 2 2 0 00-.874.874 2.022 2.022 0 00-.201.77C1 14.07 1 14.316 1 14.568v5.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 00.874.874c.271.138.541.182.77.201.208.017.454.017.706.017h.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 00.874-.874 2.022 2.022 0 00.205-.82H8.61c.261 0 .52.03.77.092h.003l2.757.67c.74.18 1.509.198 2.255.053l3.05-.593a5.205 5.205 0 002.633-1.373l2.157-2.099a2.503 2.503 0 000-3.602 2.61 2.61 0 00-3.347-.234l-1.483 1.082a2.544 2.544 0 00-1.955-2.334l-2.386-.58a6.03 6.03 0 00-1.42-.17c-.676 0-1.503.26-2.056.458a15.735 15.735 0 00-1.046.42l-.01.004-1.592.666a1.8 1.8 0 00-.158-.456 2 2 0 00-.874-.874 2.02 2.02 0 00-.77-.201C4.93 12 4.684 12 4.432 12zm4.178 7.087H7v-3.396l2.318-.97.03-.013h.002l.011-.006.05-.022a12.259 12.259 0 01.852-.34c.562-.2 1.09-.34 1.38-.34.32 0 .639.038.95.114l2.385.58c.27.065.43.29.43.515v.307c0 .27-.232.534-.577.534h-1.545a1 1 0 000 2h2.428c.66 0 1.305-.207 1.839-.598l2.513-1.834a.61.61 0 01.775.052.504.504 0 010 .735l-2.158 2.099a3.206 3.206 0 01-1.621.843l-3.05.593c-.463.09-.941.079-1.399-.033l-1.133-.275-1.623-.395h-.001c-.408-.1-.826-.15-1.246-.15z",
      fill: "currentCOlor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
HandCoinsFilled.displayName = 'HandCoinsFilled';
export default HandCoinsFilled;