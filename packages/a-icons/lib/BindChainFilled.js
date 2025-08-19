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
function BindChainFilled(componentProps) {
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
        d: 'M8.276 2h7.448A6.276 6.276 0 0122 8.276v7.448A6.276 6.276 0 0115.724 22H8.276A6.276 6.276 0 012 15.724V8.276A6.276 6.276 0 018.276 2zm6.37 4a3.38 3.38 0 00-2.378.95l-.919.914a.736.736 0 001.037 1.044l.907-.903A1.912 1.912 0 0116.53 9.37c.004.5-.187.981-.533 1.342l-1.584 1.585a1.91 1.91 0 01-2.883-.207.735.735 0 10-1.178.882 3.383 3.383 0 005.101.365l1.589-1.59.008-.009A3.387 3.387 0 0014.647 6zm-3.465 3.68a3.38 3.38 0 00-2.634.984l-1.589 1.59-.009.009A3.387 3.387 0 009.354 18a3.38 3.38 0 002.38-.95l.914-.916a.736.736 0 00-1.04-1.04l-.9.901a1.911 1.911 0 01-3.237-1.364c-.004-.5.187-.981.533-1.342l1.584-1.585a1.911 1.911 0 012.883.207.735.735 0 101.178-.882A3.383 3.383 0 0011.18 9.68z',
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
BindChainFilled.displayName = 'BindChainFilled';
exports['default'] = BindChainFilled;
