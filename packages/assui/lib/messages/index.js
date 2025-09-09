"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.langTypeEnum = void 0;
exports["default"] = formatMessage;
var langTypeEnum;
(function (langTypeEnum) {
  langTypeEnum["labelCustomizeRangePicker"] = "labelCustomizeRangePicker";
  langTypeEnum["global"] = "global";
})(langTypeEnum || (exports.langTypeEnum = langTypeEnum = {}));
function formatMessage(message, displayName, key) {
  return message[displayName][key];
}