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
function InformationFilled(componentProps) {
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
        d: 'M12 21.638a.992.992 0 00.528-.009l8.779-2.544a2 2 0 001.443-1.921V4.662a2 2 0 00-2.557-1.92L12 5.115 3.807 2.74A2 2 0 001.25 4.662v12.502a2 2 0 001.443 1.921l8.779 2.544a.992.992 0 00.528.009zM5.013 8.71a.75.75 0 11.474-1.423L8.82 8.4a.75.75 0 11-.474 1.423L5.013 8.71zm14.113.112a.75.75 0 10-.474-1.423l-3.334 1.11a.75.75 0 10.475 1.424l3.333-1.111zm0 3.333a.75.75 0 10-.474-1.423l-3.334 1.111a.75.75 0 10.475 1.423l3.333-1.111zm.474 2.384a.75.75 0 01-.474.95l-3.333 1.11a.75.75 0 11-.474-1.423l3.333-1.11a.75.75 0 01.948.473zM4.539 11.096a.75.75 0 00.475.949l3.333 1.11a.75.75 0 10.474-1.422l-3.333-1.111a.75.75 0 00-.949.474zm.475 4.282a.75.75 0 11.474-1.423l3.333 1.111a.75.75 0 01-.474 1.423l-3.333-1.11zM12 7.25a.75.75 0 01.75.75v11a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75z',
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
InformationFilled.displayName = 'InformationFilled';
exports['default'] = InformationFilled;
