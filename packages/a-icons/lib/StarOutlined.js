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
function StarOutlined(componentProps) {
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
        d: 'M11.354 1.776a1.5 1.5 0 011.292 0c.353.168.547.46.645.62.102.166.206.377.308.583l.015.032 2.14 4.335 4.822.705c.227.033.46.067.65.113.182.044.52.139.789.423a1.5 1.5 0 01.398 1.228c-.051.387-.27.663-.391.805-.127.148-.295.312-.46.472l-3.488 3.397.823 4.799c.04.226.08.458.095.652.014.187.029.538-.158.882a1.5 1.5 0 01-1.045.759c-.384.071-.713-.051-.887-.123a7.751 7.751 0 01-.591-.291L12 18.9l-4.31 2.267a7.754 7.754 0 01-.592.29c-.173.073-.503.195-.887.124a1.5 1.5 0 01-1.045-.76c-.187-.343-.172-.694-.158-.881.016-.194.056-.426.095-.652l.823-4.799-3.463-3.372-.025-.025c-.165-.16-.333-.324-.46-.472-.122-.142-.34-.418-.39-.805a1.5 1.5 0 01.397-1.228c.27-.284.607-.38.79-.423a7.751 7.751 0 01.683-.118l4.788-.7 2.14-4.335.016-.032c.101-.206.205-.417.307-.582.098-.16.292-.453.646-.621zM8.143 7.554zm.333-.242zm9.561 6.949zM12 4.259L9.993 8.326l-.013.027c-.048.099-.147.303-.303.471a1.5 1.5 0 01-.467.34 1.905 1.905 0 01-.571.146l-4.49.657 3.247 3.163.022.02c.08.077.243.234.355.435a1.5 1.5 0 01.179.55c.028.228-.013.451-.032.56a3.212 3.212 0 00-.005.029l-.767 4.468 4.014-2.111c.008-.004.017-.01.027-.014.096-.052.296-.16.522-.204a1.5 1.5 0 01.578 0c.226.044.426.152.522.204l.027.014 4.014 2.11-.767-4.467c0-.009-.003-.019-.005-.03a1.905 1.905 0 01-.032-.56 1.5 1.5 0 01.179-.549c.112-.201.276-.358.355-.434l.022-.021 3.248-3.163-4.49-.657a1.904 1.904 0 01-.571-.147 1.498 1.498 0 01-.468-.339 1.903 1.903 0 01-.316-.498L12 4.259z',
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
StarOutlined.displayName = 'StarOutlined';
exports['default'] = StarOutlined;
