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
function TreeFilled(componentProps) {
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
        d: 'M19.333 14.063a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.124zM19.333 6.73a2.062 2.062 0 100-4.126 2.062 2.062 0 000 4.125zM19.333 21.396a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zM4.667 14.063a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.124z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M18.417 12.688a.692.692 0 00.687-.688.693.693 0 00-.687-.688H11.77V7.418c0-1.449.614-2.063 2.062-2.063h4.584a.693.693 0 00.687-.687.693.693 0 00-.687-.688h-4.584c-2.218 0-3.437 1.22-3.437 3.438v3.896H5.583a.693.693 0 00-.687.687c0 .376.312.688.687.688h4.813v3.895c0 2.219 1.219 3.438 3.437 3.438h4.584a.693.693 0 00.687-.688.692.692 0 00-.687-.687h-4.584c-1.448 0-2.062-.614-2.062-2.063v-3.895h6.646z',
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
TreeFilled.displayName = 'TreeFilled';
exports['default'] = TreeFilled;
