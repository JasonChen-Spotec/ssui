'use strict';

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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {
          enumerable: true,
          value: v,
        });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
      }
    __setModuleDefault(result, mod);
    return result;
  };
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
var React = __importStar(require('react'));
var icon_1 = __importDefault(require('a-base-icon/lib/icon'));
function DoubleChainFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      React.createElement('path', {
        d: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM8.18 16.77h-.07c-.97-.09-1.88-.54-2.56-1.26-1.6-1.68-1.6-4.41 0-6.09l2.19-2.3a4.05 4.05 0 012.95-1.28c1.12 0 2.17.45 2.95 1.28 1.6 1.68 1.6 4.41 0 6.09l-1.09 1.15c-.29.3-.76.31-1.06.03a.755.755 0 01-.03-1.06l1.09-1.15c1.06-1.11 1.06-2.92 0-4.02-.99-1.04-2.73-1.04-3.73 0l-2.19 2.3c-1.06 1.11-1.06 2.92 0 4.02.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 01-.74.67zm10.27-2.18l-2.19 2.3a4.05 4.05 0 01-2.95 1.28c-1.12 0-2.17-.45-2.95-1.28-1.6-1.68-1.6-4.41 0-6.09l1.09-1.15c.29-.3.76-.31 1.06-.03.3.29.31.76.03 1.06l-1.09 1.15c-1.06 1.11-1.06 2.92 0 4.02.99 1.04 2.73 1.05 3.73 0l2.19-2.3c1.06-1.11 1.06-2.92 0-4.02-.43-.46-1.01-.74-1.62-.8a.75.75 0 01-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26 1.59 1.67 1.59 4.41-.01 6.09z',
        fill: 'currentColor',
      }),
    );
  };
  return React.createElement(
    icon_1['default'],
    __assign({}, componentProps, {
      component: IconNode,
    }),
  );
}
DoubleChainFilled.displayName = 'DoubleChainFilled';
exports['default'] = DoubleChainFilled;
