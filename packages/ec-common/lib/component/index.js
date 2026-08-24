"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_intl_1 = require("react-intl");
var messages_1 = tslib_1.__importDefault(require("../intl/messages"));
exports["default"] = function (_ref) {
  var title = _ref.title;
  var _ref2 = (0, react_intl_1.useIntl)(),
    formatMessage = _ref2.formatMessage;
  return (0, jsx_runtime_1.jsxs)("h1", {
    children: [title, (0, jsx_runtime_1.jsx)("div", {
      children: formatMessage(messages_1["default"].female)
    })]
  });
};