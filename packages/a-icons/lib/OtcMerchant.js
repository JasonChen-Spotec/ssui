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
function OtcMerchant(componentProps) {
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
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M1.1 8.1c2.2.9 4.8.8 6.9-.4.2-.1.5-.1.7 0 2.1 1.1 4.5 1.1 6.6 0 .2-.1.5-.1.7 0 2.1 1.1 4.6 1.3 6.8.3l.6-.3-2.6-4.1c-.3-.7-.9-1.1-1.6-1.1H4.7c-.7.1-1.4.6-1.6 1.2L.5 7.8l.6.3z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M15.5 9.2h.2c1.6.9 3.5 1.1 5.3 1v9.2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9.3c1.8.2 3.7 0 5.3-.8.1 0 .118-.056.2-.064.039-.004.1 0 .1 0l.1.064c2.1.9 4.5.9 6.6 0 0 0 .1-.1.2-.1z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M7.5 18.4c-1.6 0-2.5-.6-2.5-3s.9-3 2.5-3 2.5.6 2.5 3-.8 3-2.5 3zm0-1.1c1 0 1.3-.5 1.3-1.9s-.2-2-1.3-2c-1 0-1.2.5-1.2 2 0 1.4.2 1.9 1.2 1.9zM13.9 12.5c.3 0 .6.3.6.6s-.3.6-.6.6H13v4.1c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-4.1h-.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3zM17.6 18.4c-1.6 0-2.6-.6-2.6-3 0-2.3 1-3 2.7-3 .4 0 .7 0 1 .1.2 0 .3.2.3.5 0 .4-.4.6-.7.6h-.5c-1 0-1.4.5-1.4 1.9 0 1.5.4 1.9 1.4 1.9h.6c.4-.1.7.2.7.6 0 .2-.296.4-.296.4H17.6z',
        fill: '#fff',
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
OtcMerchant.displayName = 'OtcMerchant';
exports['default'] = OtcMerchant;
