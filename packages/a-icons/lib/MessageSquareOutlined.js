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
function MessageSquareOutlined(componentProps) {
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
        d: 'M20 13.2V7.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 00-.875-.873c-.156-.08-.38-.145-.819-.18C17.639 4 17.057 4 16.2 4H7.8c-.856 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 00-.873.875c-.08.156-.145.38-.18.82C4 6.361 4 6.942 4 7.8V14c0 .994.009 1.295.068 1.518a2 2 0 001.415 1.414c.222.06.523.068 1.517.068a1 1 0 011 1v1.919l2.06-1.649c.457-.364.79-.637 1.172-.832.321-.164.663-.284 1.016-.356.421-.086.852-.082 1.436-.082H16.2c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 00.873-.875c.08-.156.145-.38.181-.82.037-.45.037-1.031.037-1.888zM15.914 8l-2.5 2.5 2.5 2.5-1.414 1.414-2.5-2.5-2.5 2.5L8.086 13l2.5-2.5-2.5-2.5L9.5 6.586l2.5 2.5 2.5-2.5L15.914 8zM22 13.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4.001 4.001 0 01-1.747 1.748c-.486.248-1.003.346-1.565.392-.55.045-1.228.044-2.052.044h-2.516c-.664 0-.858.005-1.034.041a1.997 1.997 0 00-.507.178c-.16.081-.315.2-.833.614l-2.385 1.908c-.193.154-.39.314-.564.428-.157.104-.462.29-.859.291a1.5 1.5 0 01-1.174-.565c-.247-.31-.293-.664-.31-.852-.02-.206-.018-.46-.018-.707v-1.347c-.392-.013-.728-.043-1.035-.126a4 4 0 01-2.828-2.828C1.992 15.495 2 14.865 2 14V7.8c0-.824 0-1.502.044-2.052.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2h8.4c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.565.392a4 4 0 011.747 1.748c.248.485.346 1.002.392 1.564.045.55.044 1.228.044 2.052v5.4z',
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
MessageSquareOutlined.displayName = 'MessageSquareOutlined';
exports['default'] = MessageSquareOutlined;
