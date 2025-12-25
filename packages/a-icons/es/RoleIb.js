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
function RoleIb(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M14.217 8.438h-2.654v2.992h2.625c.733 0 1.247-.132 1.555-.367.293-.25.455-.645.455-1.188 0-.498-.162-.865-.455-1.085-.323-.235-.822-.352-1.526-.352zM14.452 12.838h-2.89v3.256h2.846c.646 0 1.159-.103 1.526-.308.469-.264.704-.675.704-1.261 0-.602-.177-1.027-.514-1.291-.352-.264-.91-.396-1.672-.396z",
      fill: "#47A92A"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.2 1A2.2 2.2 0 001 3.2v17.6A2.2 2.2 0 003.2 23h17.6a2.2 2.2 0 002.2-2.2V3.2A2.2 2.2 0 0020.8 1H3.2zm2.88 16.502V7.03h1.716v10.472H6.08zm3.767 0V7.03h4.796c1.041 0 1.863.25 2.45.748.542.47.82 1.1.82 1.892 0 .587-.146 1.085-.425 1.496-.279.381-.674.66-1.203.865.69.132 1.203.41 1.555.836.337.41.514.983.514 1.687 0 1.056-.367 1.833-1.086 2.332-.616.41-1.496.616-2.61.616H9.847z",
      fill: "#47A92A"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
RoleIb.displayName = 'RoleIb';
export default RoleIb;