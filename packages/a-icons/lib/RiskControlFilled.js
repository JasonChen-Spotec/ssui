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
function RiskControlFilled(componentProps) {
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
        d: 'M12.5 1.457l8.75 4.134v7.094c0 3.798-3.118 7.787-8.079 9.199l-.207.058-.464.12-.47-.122c-4.92-1.316-8.091-5.182-8.272-8.957l-.006-.162-.002-7.23 8.75-4.134zm0 1.66L5.25 6.54l.002 6.261c.077 3.037 2.643 6.313 6.757 7.572l.2.06.204.055.086.023.083-.021c4.291-1.148 6.998-4.433 7.16-7.513l.006-.146.002-.147V6.541L12.5 3.116z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M4.5 6.5l8-4 8 3.5v8l-3 5-5.5 2.5L7.5 19 5 15l-.5-8.5z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M12.823 7.323a.75.75 0 01.354 1l-1.488 3.117H14.5a.75.75 0 01.664 1.1l-2 3.809a.75.75 0 11-1.328-.698l1.423-2.71H10.5a.75.75 0 01-.677-1.074l2-4.19a.75.75 0 011-.354z',
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
RiskControlFilled.displayName = 'RiskControlFilled';
exports['default'] = RiskControlFilled;
