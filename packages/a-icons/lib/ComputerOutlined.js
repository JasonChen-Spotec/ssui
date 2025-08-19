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
function ComputerOutlined(componentProps) {
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
        d: 'M6.759 2H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C23 6.29 23 6.954 23 7.758v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H13v2h4v2H7v-2h4v-2H6.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 13.71 1 13.046 1 12.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 2 5.954 2 6.758 2zM17.2 16c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V7.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 4 18.057 4 17.2 4H6.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C3 6.361 3 6.943 3 7.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C5.361 16 5.943 16 6.8 16h10.4z',
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
ComputerOutlined.displayName = 'ComputerOutlined';
exports['default'] = ComputerOutlined;
