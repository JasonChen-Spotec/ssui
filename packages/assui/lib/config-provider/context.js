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
var react_1 = require('react');
var zh_CN_1 = __importDefault(require('../messages/zh_CN'));
var LocaleContext = (0, react_1.createContext)(zh_CN_1['default'].lang);
exports['default'] = LocaleContext;
