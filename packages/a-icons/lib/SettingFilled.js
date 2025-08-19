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
function SettingFilled(componentProps) {
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
      React.createElement('circle', {
        cx: 11.8,
        cy: 11.81,
        r: 1.96,
        fill: 'currentColor',
      }),
      React.createElement('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M19.226 8.73c.19.465.642.769 1.144.77a1.24 1.24 0 011.24 1.24v2.14a1.24 1.24 0 01-1.24 1.24 1.24 1.24 0 00-.87 2.12 1.26 1.26 0 010 1.76L18 19.5a1.26 1.26 0 01-1.76 0 1.24 1.24 0 00-2.12.87 1.24 1.24 0 01-1.24 1.24h-2.14a1.24 1.24 0 01-1.24-1.24 1.24 1.24 0 00-2.12-.87 1.26 1.26 0 01-1.76 0L4.12 18a1.26 1.26 0 010-1.76 1.24 1.24 0 00-.88-2.12A1.24 1.24 0 012 12.88v-2.14c0-.685.555-1.24 1.24-1.24a1.24 1.24 0 00.87-2.12 1.26 1.26 0 010-1.76l1.5-1.5a1.26 1.26 0 011.76 0 1.24 1.24 0 002.12-.88c0-.685.555-1.24 1.24-1.24h2.15a1.24 1.24 0 011.24 1.24 1.24 1.24 0 002.12.88 1.26 1.26 0 011.76 0l1.5 1.5a1.26 1.26 0 010 1.76 1.24 1.24 0 00-.274 1.35zM8.34 11.81a3.46 3.46 0 106.92 0 3.46 3.46 0 00-6.92 0z',
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
SettingFilled.displayName = 'SettingFilled';
exports['default'] = SettingFilled;
