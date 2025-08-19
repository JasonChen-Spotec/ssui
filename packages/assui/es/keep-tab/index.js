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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
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
import useUrlState from '@ahooksjs/use-url-state';
import qsHelp from 'aa-utils/es/qsHelp';
import useControllableValue from 'ahooks/es/useControllableValue';
import Badge from 'antd/es/badge';
import Tabs from 'antd/es/tabs';
import find from 'lodash/find';
import * as React from 'react';
var TabPane = Tabs.TabPane;
var defaultBadgeProps = {};
var KeepTab = function KeepTab(props) {
  var _a;
  var _b = props.items,
    items = _b === void 0 ? [] : _b,
    defaultActiveKey = props.defaultActiveKey,
    _c = props.saveActiveKeyName,
    saveActiveKeyName = _c === void 0 ? 'active' : _c,
    onChange = props.onChange,
    _d = props.badgeProps,
    badgeProps = _d === void 0 ? defaultBadgeProps : _d,
    restProps = __rest(props, [
      'items',
      'defaultActiveKey',
      'saveActiveKeyName',
      'onChange',
      'badgeProps',
    ]);
  var defaultUrlParams = qsHelp.getQueryObject();
  var _e = __read(
      useUrlState(
        ((_a = {}),
        (_a[saveActiveKeyName] = defaultUrlParams[saveActiveKeyName] || defaultActiveKey),
        _a),
      ),
      2,
    ),
    urlParams = _e[0],
    setUrlParams = _e[1];
  var _f = __read(
      useControllableValue(props, {
        valuePropName: 'activeKey',
        defaultValue: defaultUrlParams[saveActiveKeyName] || defaultActiveKey,
      }),
      2,
    ),
    tabActiveKey = _f[0],
    setTabActiveKey = _f[1];
  React.useEffect(
    function () {
      var _a;
      if (!('activeKey' in props) && items) {
        var resultActiveTab = find(items, {
          key: urlParams[saveActiveKeyName],
        });
        if (!resultActiveTab || resultActiveTab.disabled) {
          setUrlParams(((_a = {}), (_a[saveActiveKeyName] = items[0].key), _a));
          setTabActiveKey(items[0].key);
        }
      }
    },
    [tabActiveKey],
  );
  var handleTabChange = function handleTabChange(nextActiveKey) {
    var _a;
    setUrlParams(((_a = {}), (_a[saveActiveKeyName] = nextActiveKey), _a));
    setTabActiveKey(nextActiveKey);
  };
  var resultItems = items.map(function (item) {
    var count = item === null || item === void 0 ? void 0 : item.count;
    if (count) {
      return __assign(__assign({}, item), {
        label: /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'tab-badge',
          },
          /*#__PURE__*/ React.createElement('div', null, item.label),
          /*#__PURE__*/ React.createElement(
            Badge,
            __assign(
              {
                count: count,
              },
              badgeProps,
            ),
          ),
        ),
      });
    }
    return item;
  });
  return /*#__PURE__*/ React.createElement(
    Tabs,
    __assign(
      {
        animated: false,
        onChange: handleTabChange,
        destroyInactiveTabPane: true,
        activeKey: tabActiveKey,
      },
      restProps,
      {
        items: resultItems,
      },
    ),
  );
};
KeepTab.displayName = 'KeepTab';
KeepTab.TabPane = TabPane;
export default KeepTab;
