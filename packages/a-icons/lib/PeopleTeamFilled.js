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
function PeopleTeamFilled(componentProps) {
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
        d: 'M12.18 11.35a3 3 0 003-2.95V7.28a2.48 2.48 0 00-2.52-2.48h-.95a2.48 2.48 0 00-2.47 2.48V8.4a3 3 0 002.94 2.95zM22.78 16.51L22.66 15a1.6 1.6 0 00-1.55-1.33h-4.32a.645.645 0 00-.2 0 2 2 0 00-1.51-.67H9.29a2 2 0 00-1.57.75 1.479 1.479 0 00-.51-.09H2.89A1.6 1.6 0 001.34 15l-.12 1.56a1.66 1.66 0 001.56 2h4.55c.09.01.18.01.27 0a2.1 2.1 0 001.55.69h6.07a2.08 2.08 0 001.51-.66h4.49a1.66 1.66 0 001.56-2.08zM19 12.11a2.2 2.2 0 002.2-2.2v-.85a1.85 1.85 0 00-1.9-1.85h-.7a1.85 1.85 0 00-1.85 1.85v.85a2.2 2.2 0 002.25 2.2zM5.05 12.11a2.2 2.2 0 002.2-2.2v-.85A1.85 1.85 0 005.4 7.21h-.7a1.85 1.85 0 00-1.85 1.85v.85a2.2 2.2 0 002.2 2.2z',
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
PeopleTeamFilled.displayName = 'PeopleTeamFilled';
exports['default'] = PeopleTeamFilled;
