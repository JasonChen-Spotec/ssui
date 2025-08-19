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
function ShieldTickAsteriskFilled(componentProps) {
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
        d: 'M18.052 6.353L11.91 4.33a.59.59 0 00-.367 0L5.41 6.383a.546.546 0 00-.379.515l.015 6.287c.18 3.69 6.256 5.937 6.514 6.03a.582.582 0 00.4 0c.258-.095 6.323-2.37 6.488-6.084l-.015-6.263a.545.545 0 00-.381-.514z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M15.857 9.76l-5.21 4.383-2.504-2.371.759-.719 1.789 1.694L15.144 9l.713.76z',
        fill: 'inherit',
      }),
      React.createElement('path', {
        d: 'M10.273 18.558c-.287-1.432-.431-2.148-.076-2.681.355-.534 1.07-.677 2.5-.963l4.743-.95c1.43-.287 2.144-.43 2.677-.075.533.355.677 1.071.964 2.503.287 1.432.43 2.148.075 2.681-.355.534-1.07.677-2.5.963l-4.743.95c-1.43.287-2.144.43-2.677.075-.533-.355-.677-1.071-.963-2.503z',
        fill: '#DC4946',
      }),
      React.createElement('path', {
        d: 'M13.238 16.332l.504-.108.647 3.024-.504.108-.647-3.024z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M14.438 16.352l.432.28-1.681 2.596-.433-.28 1.681-2.596z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M12.654 16.733l-.28.433 2.596 1.681.28-.432-2.596-1.682zM17.361 15.3l.504-.107.647 3.025-.504.107-.647-3.024z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M18.56 15.321l.433.28-1.681 2.596-.433-.28 1.681-2.596z',
        fill: 'currentColor',
      }),
      React.createElement('path', {
        d: 'M16.777 15.702l-.28.433 2.596 1.681.28-.432-2.596-1.682z',
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
ShieldTickAsteriskFilled.displayName = 'ShieldTickAsteriskFilled';
exports['default'] = ShieldTickAsteriskFilled;
