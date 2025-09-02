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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
var ahooks_1 = require('ahooks');
var antd_1 = require('antd');
var lodash_1 = require('lodash');
var react_1 = __importStar(require('react'));
var ConditionSelect = function ConditionSelect(_a) {
  var option = _a.option,
    value = _a.value,
    onChange = _a.onChange,
    id = _a.id,
    selectProps = _a.selectProps;
  var _b = __read(
      (0, ahooks_1.useControllableValue)({
        value: value,
        onChange: onChange,
      }),
      2,
    ),
    setComponentValue = _b[1];
  var _c = __read((0, react_1.useState)(option[0]), 2),
    current = _c[0],
    setCurrent = _c[1];
  var DynamicComponent =
    current === null || current === void 0 ? void 0 : current.component;
  var componentProps = (0, lodash_1.omit)(
    current === null || current === void 0 ? void 0 : current.componentProps,
    'parseValue',
  );
  var fieldProps =
    current === null || current === void 0 ? void 0 : current.componentProps;
  var handleTypeChange = function handleTypeChange(val) {
    var _a;
    setCurrent(
      option.find(function (item) {
        return item.value === val;
      }),
    );
    setComponentValue(((_a = {}), (_a[id] = val), _a));
  };
  var handleInputChange = function handleInputChange(v) {
    var _a;
    setComponentValue(
      ((_a = {}),
      (_a[id] = current === null || current === void 0 ? void 0 : current.value),
      (_a[
        componentProps === null || componentProps === void 0
          ? void 0
          : componentProps.name
      ] = v),
      _a),
    );
  };
  var firstSpan = DynamicComponent ? 10 : 24;
  return react_1['default'].createElement(
    antd_1.Row,
    {
      gutter: 10,
    },
    react_1['default'].createElement(
      antd_1.Col,
      {
        span: firstSpan,
      },
      react_1['default'].createElement(
        antd_1.Select,
        __assign(
          {
            onChange: handleTypeChange,
            value: current === null || current === void 0 ? void 0 : current.value,
            allowClear: true,
          },
          selectProps,
        ),
        option.map(function (item) {
          return react_1['default'].createElement(
            antd_1.Select.Option,
            {
              key: item.value,
              value: item.value,
            },
            item.label,
          );
        }),
      ),
    ),
    DynamicComponent &&
      react_1['default'].createElement(
        antd_1.Col,
        {
          span: 14,
        },
        react_1['default'].createElement(
          DynamicComponent,
          __assign(__assign({}, componentProps), {
            onChange: function onChange(v) {
              var parseValue =
                fieldProps === null || fieldProps === void 0
                  ? void 0
                  : fieldProps.parseValue;
              if (parseValue) {
                var parseValueResult = parseValue(v);
                handleInputChange(parseValueResult);
                return;
              }
              handleInputChange(v);
            },
          }),
        ),
      ),
  );
};
exports['default'] = ConditionSelect;
