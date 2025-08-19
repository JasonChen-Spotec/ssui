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
function TransferFileFilled(componentProps) {
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
        d: 'M14.454 9.545h4.91v6.743c0 .659 0 1.203-.037 1.645-.037.46-.118.883-.32 1.28a3.272 3.272 0 01-1.43 1.43c-.397.203-.82.283-1.28.32-.443.037-.986.037-1.645.037H9.348c-.659 0-1.202 0-1.645-.036-.46-.038-.883-.118-1.28-.32a3.273 3.273 0 01-1.43-1.43c-.202-.398-.283-.82-.32-1.28-.037-.444-.037-.987-.037-1.646V7.712c0-.659 0-1.203.037-1.645.037-.46.118-.883.32-1.28a3.273 3.273 0 011.43-1.43c.397-.203.82-.283 1.28-.32C8.146 3 8.689 3 9.348 3h3.47v4.91c0 .903.733 1.635 1.636 1.635zm-2.247 1.582l3.056 2.064a.65.65 0 01-.363 1.189H8.45v-1.3h4.326l-1.297-.876.728-1.077zm-.414 7.287L8.737 16.35A.65.65 0 019.1 15.16h6.45v1.3h-4.326l1.297.876-.728 1.077z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M14.454 3.48l4.43 4.43h-4.43V3.48z',
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
TransferFileFilled.displayName = 'TransferFileFilled';
exports['default'] = TransferFileFilled;
