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
function ArrowsRightLeftFilled(componentProps) {
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
        d: 'M15.56 2.58H8.44a6 6 0 00-6 6v7.12a6 6 0 006 6h7.12a6 6 0 006-6V8.58a6 6 0 00-6-6zM14.24 16H8.69l1.92 1.92a.75.75 0 010 1.07.74.74 0 01-.53.21.77.77 0 01-.53-.21l-3.2-3.21a.63.63 0 01-.16-.24.73.73 0 010-.58.63.63 0 01.16-.24l3.2-3.2a.75.75 0 011.06 1.06l-1.92 1.87h5.55a.75.75 0 010 1.5V16zm3.41-6.62a.63.63 0 00.16-.24v-.05a.73.73 0 000-.58.63.63 0 00-.16-.24l-3.2-3.2a.75.75 0 10-1.06 1.06l1.92 1.97H9.76a.75.75 0 100 1.5h5.55l-1.92 1.92a.74.74 0 000 1.06.71.71 0 00.53.22.74.74 0 00.53-.22l3.2-3.2z',
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
ArrowsRightLeftFilled.displayName = 'ArrowsRightLeftFilled';
exports['default'] = ArrowsRightLeftFilled;
