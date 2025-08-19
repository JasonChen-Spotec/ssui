'use strict';

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
var react_1 = __importDefault(require('react'));
var react_intl_1 = require('react-intl');
var messages_1 = __importDefault(require('../intl/messages'));
exports['default'] = function (_a) {
  var title = _a.title;
  var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
  return react_1['default'].createElement(
    'h1',
    null,
    title,
    react_1['default'].createElement(
      'div',
      null,
      formatMessage(messages_1['default'].female),
    ),
  );
};
