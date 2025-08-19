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
function SettingSquareFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement(
      'svg',
      __assign(
        {
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        props,
      ),
      React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M17.5 3H7a4 4 0 00-4 4v10.5a4 4 0 004 4h10.5a4 4 0 004-4V7a4 4 0 00-4-4zm.84 9.91a.76.76 0 01-.77.77.78.78 0 00-.55 1.32.77.77 0 010 1.09l-.93.93a.77.77 0 01-1.09 0 .78.78 0 00-1.32.55.76.76 0 01-.77.77h-1.32a.76.76 0 01-.77-.77.78.78 0 00-1.32-.55.77.77 0 01-1.09 0l-.93-.93a.77.77 0 010-1.09.78.78 0 00-.55-1.32.76.76 0 01-.77-.77v-1.32a.76.76 0 01.77-.77.78.78 0 00.55-1.32.77.77 0 010-1.09l.93-.93a.77.77 0 011.09 0 .78.78 0 001.32-.55.76.76 0 01.77-.77h1.32a.76.76 0 01.77.77.78.78 0 001.32.55.77.77 0 011.09 0l.93.93a.77.77 0 010 1.09.78.78 0 00.55 1.32.76.76 0 01.77.77v1.32zm-6.09-2.81a2.15 2.15 0 100 4.3 2.15 2.15 0 000-4.3zm0 2.8a.65.65 0 110-1.3.65.65 0 010 1.3z',
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
SettingSquareFilled.displayName = 'SettingSquareFilled';
exports['default'] = SettingSquareFilled;
