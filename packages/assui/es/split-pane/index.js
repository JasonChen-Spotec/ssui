var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import React from 'react';
import RcSplitPane from 'react-split-pane';
var SplitPane = function SplitPane(props) {
  return /*#__PURE__*/React.createElement(RcSplitPane, __assign({}, props));
};
export default SplitPane;