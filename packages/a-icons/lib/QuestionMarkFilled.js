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
function QuestionMarkFilled(componentProps) {
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
        d: 'M12 3a9 9 0 100 18 9 9 0 000-18zM9.882 7.896c.588-.602 1.4-.896 2.436-.896.896 0 1.624.238 2.184.742.56.49.84 1.162.84 2.002 0 .686-.182 1.26-.532 1.708-.126.154-.518.518-1.176 1.092a2.325 2.325 0 00-.588.728 1.88 1.88 0 00-.224.924c0 .146-.118.238-.265.238h-.995a.238.238 0 01-.238-.238c0-.518.084-.966.28-1.33.182-.392.714-.966 1.582-1.736l.238-.266c.252-.322.392-.658.392-1.022 0-.49-.14-.868-.406-1.148-.28-.28-.686-.42-1.19-.42-.63 0-1.092.196-1.372.602a1.806 1.806 0 00-.305.698c-.089.396-.402.73-.808.73s-.744-.331-.679-.732c.111-.68.387-1.237.826-1.676zm1.456 7.574c.196-.196.448-.28.728-.28.294 0 .546.084.742.28a.93.93 0 01.294.714.993.993 0 01-.308.728c-.196.182-.448.28-.728.28-.28 0-.532-.098-.728-.294a.972.972 0 01-.294-.714.93.93 0 01.294-.714z',
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
QuestionMarkFilled.displayName = 'QuestionMarkFilled';
exports['default'] = QuestionMarkFilled;
