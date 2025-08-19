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
exports.Cookies = void 0;
var universal_cookie_1 = __importDefault(require('universal-cookie'));
exports.Cookies = universal_cookie_1['default'];
var cookieUtils = new universal_cookie_1['default']();
exports['default'] = cookieUtils;
