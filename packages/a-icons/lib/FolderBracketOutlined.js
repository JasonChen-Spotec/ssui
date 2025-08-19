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
function FolderBracketOutlined(componentProps) {
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
      React.createElement(
        'g',
        {
          clipPath: 'url(#folder-bracket-outlined_svg__clip0_21387_15904)',
        },
        React.createElement('path', {
          d: 'M21 11.8c0-.857 0-1.44-.037-1.89-.036-.438-.101-.662-.18-.818a2 2 0 00-.875-.875c-.156-.08-.38-.144-.82-.18C18.639 8 18.058 8 17.2 8H3v8.2c0 .856 0 1.439.037 1.889.036.438.101.663.18.819a2 2 0 00.875.874c.156.08.38.145.82.18C5.361 20 5.942 20 6.8 20h10.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.181a2 2 0 00.873-.874c.08-.157.145-.381.18-.82.038-.45.038-1.032.038-1.888v-4.4zm-9.586-.3l-2.5 2.5 2.5 2.5L10 17.914l-3.207-3.207a1 1 0 010-1.414L10 10.086l1.414 1.414zm5.793 1.793a1 1 0 010 1.414L14 17.914 12.586 16.5l2.5-2.5-2.5-2.5L14 10.086l3.207 3.207zM5.2 4c-.576 0-.949.001-1.232.024-.272.022-.373.06-.422.085a1 1 0 00-.437.437c-.025.05-.062.15-.085.421-.02.25-.023.568-.023 1.033h8.38l-.39-.784c-.354-.707-.436-.842-.527-.931a1.001 1.001 0 00-.374-.23C9.97 4.012 9.812 4 9.022 4H5.2zM23 16.2c0 .823.001 1.501-.044 2.052-.046.562-.144 1.079-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502 0-2.052-.044-.562-.046-1.08-.145-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 17.702 1 17.023 1 16.2v-10c0-.544-.001-1.012.03-1.396.033-.395.104-.788.297-1.167a3 3 0 011.31-1.31c.379-.193.772-.265 1.168-.297C4.188 1.999 4.657 2 5.2 2h3.822c.646 0 1.207-.013 1.72.164a3 3 0 011.121.692c.388.38.628.888.916 1.465L13.62 6H17.2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.391a4.001 4.001 0 011.748 1.748c.248.486.346 1.003.392 1.565.045.55.044 1.228.044 2.052v4.4z',
          fill: 'currentColor',
        }),
      ),
      React.createElement(
        'defs',
        null,
        React.createElement(
          'clipPath',
          {
            id: 'folder-bracket-outlined_svg__clip0_21387_15904',
          },
          React.createElement('path', {
            fill: 'currentColor',
            d: 'M0 0h24v24H0z',
          }),
        ),
      ),
    );
  };
  return React.createElement(
    icon_1['default'],
    __assign({}, componentProps, {
      component: IconNode,
    }),
  );
}
FolderBracketOutlined.displayName = 'FolderBracketOutlined';
exports['default'] = FolderBracketOutlined;
