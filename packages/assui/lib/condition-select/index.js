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
var useControllableValue_1 = __importDefault(require('ahooks/lib/useControllableValue'));
var col_1 = __importDefault(require('antd/lib/grid/col'));
var row_1 = __importDefault(require('antd/lib/grid/row'));
var select_1 = __importDefault(require('antd/lib/select'));
var omit_1 = __importDefault(require('lodash/omit'));
var react_1 = __importDefault(require('react'));
var ConditionSelect = function ConditionSelect(_a) {
  var option = _a.option,
    value = _a.value,
    onChange = _a.onChange,
    selectProps = _a.selectProps,
    selectName = _a.selectName;
  var _b = __read(
      (0, useControllableValue_1['default'])({
        value: value,
        onChange: onChange,
      }),
      2,
    ),
    componentValue = _b[0],
    setComponentValue = _b[1];
  var current = react_1['default'].useMemo(
    function () {
      if (!componentValue || !componentValue[selectName]) {
        return null;
      }
      var result = option.find(function (item) {
        return item.value === componentValue[selectName];
      });
      if (result) {
        return result;
      }
      throw new Error('can not find this option');
    },
    [componentValue],
  );
  var DynamicComponent =
    current === null || current === void 0 ? void 0 : current.component;
  var componentProps = (0, omit_1['default'])(
    current === null || current === void 0 ? void 0 : current.componentProps,
    'parseValue',
  );
  var fieldProps =
    current === null || current === void 0 ? void 0 : current.componentProps;
  var handleTypeChange = function handleTypeChange(val) {
    var _a;
    setComponentValue(((_a = {}), (_a[selectName] = val), _a));
  };
  var handleInputChange = function handleInputChange(v) {
    var _a;
    setComponentValue(
      __assign(
        __assign({}, componentValue),
        ((_a = {}), (_a[componentProps.name] = v), _a),
      ),
    );
  };
  var firstSpan = DynamicComponent ? 10 : 24;
  return react_1['default'].createElement(
    row_1['default'],
    {
      gutter: 10,
    },
    react_1['default'].createElement(
      col_1['default'],
      {
        span: firstSpan,
      },
      react_1['default'].createElement(
        select_1['default'],
        __assign(
          {
            onChange: handleTypeChange,
            value:
              componentValue === null || componentValue === void 0
                ? void 0
                : componentValue[selectName],
            allowClear: true,
          },
          selectProps,
        ),
        option.map(function (item) {
          return react_1['default'].createElement(
            select_1['default'].Option,
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
        col_1['default'],
        {
          span: 14,
        },
        react_1['default'].createElement(
          DynamicComponent,
          __assign(__assign({}, componentProps), {
            value: componentValue[componentProps.name],
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
