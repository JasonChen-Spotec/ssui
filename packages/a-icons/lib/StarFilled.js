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
function StarFilled(componentProps) {
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
        d: 'M11.354 1.775a1.5 1.5 0 011.292 0c.353.168.547.46.645.62.102.167.206.378.308.583l.015.032 2.14 4.336 4.822.705c.227.033.46.067.65.112.182.044.52.14.789.423a1.5 1.5 0 01.398 1.228c-.051.388-.27.663-.391.806-.127.147-.295.312-.46.472l-3.488 3.397.823 4.798c.04.226.08.458.095.652.014.187.029.538-.158.882a1.5 1.5 0 01-1.045.759c-.384.071-.713-.05-.887-.123a7.751 7.751 0 01-.591-.29L12 18.898l-4.31 2.267a7.754 7.754 0 01-.592.291c-.173.072-.503.194-.887.123a1.5 1.5 0 01-1.045-.759c-.187-.344-.172-.695-.158-.882.016-.194.056-.426.095-.652l.823-4.798-3.463-3.373-.025-.024a7.756 7.756 0 01-.46-.472c-.122-.143-.34-.418-.39-.806a1.5 1.5 0 01.397-1.228c.27-.284.607-.379.79-.423.189-.045.422-.08.649-.112l.034-.006 4.788-.7 2.14-4.335.016-.032c.101-.205.205-.416.307-.582.098-.16.292-.453.646-.621z',
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
StarFilled.displayName = 'StarFilled';
exports['default'] = StarFilled;
