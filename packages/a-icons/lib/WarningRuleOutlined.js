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
function WarningRuleOutlined(componentProps) {
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
        d: 'M11.688 12.14l2.726-2.726L13 8l-3.707 3.707a1 1 0 00.26 1.602l2.759 1.38-2.726 2.725L11 18.828l3.707-3.707a1 1 0 00-.26-1.601l-2.759-1.38z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M9.568 1c-.252 0-.498 0-.706.017a2.022 2.022 0 00-.77.201 2 2 0 00-.874.874 2.022 2.022 0 00-.201.77 4.101 4.101 0 00-.01.146c-.394.013-.733.045-1.042.128a4 4 0 00-2.829 2.829C3 6.476 3 7.067 3 7.862v9.38c0 .804 0 1.469.044 2.01.046.562.145 1.079.392 1.564a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C7.29 23 7.954 23 8.758 23h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01v-9.38c0-.795 0-1.386-.136-1.897a4 4 0 00-2.829-2.829c-.31-.083-.648-.115-1.043-.128-.002-.05-.005-.1-.009-.146a2.022 2.022 0 00-.2-.77 2 2 0 00-.875-.874 2.022 2.022 0 00-.77-.201A9.18 9.18 0 0014.432 1H9.568zM6.482 5.068c.12-.032.264-.05.527-.058l.008.128c.019.229.063.499.201.77a2 2 0 00.874.874c.272.138.541.182.77.201C9.07 7 9.316 7 9.568 7h4.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 00.874-.874c.138-.271.183-.541.201-.77l.008-.128c.264.009.407.026.527.058a2 2 0 011.414 1.414c.06.223.068.524.068 1.518v9.2c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 01-.874.874c-.156.08-.38.145-.819.18C16.64 21 16.057 21 15.2 21H8.8c-.856 0-1.439 0-1.889-.038-.438-.035-.662-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.819C5 18.639 5 18.057 5 17.2V8c0-.994.009-1.295.068-1.518a2 2 0 011.414-1.414zm8.508-2.043c.01.116.01.278.01.575v.8c0 .297 0 .459-.01.575l-.001.014h-.014C14.86 5 14.697 5 14.4 5H9.6c-.296 0-.459 0-.575-.01l-.013-.001-.002-.014A8.185 8.185 0 019 4.4v-.8c0-.297 0-.459.01-.575l.002-.014h.013C9.14 3 9.304 3 9.6 3h4.8c.297 0 .459 0 .575.01l.014.001v.014z',
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
WarningRuleOutlined.displayName = 'WarningRuleOutlined';
exports['default'] = WarningRuleOutlined;
