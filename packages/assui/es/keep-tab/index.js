var _excluded = ["items", "defaultActiveKey", "saveActiveKeyName", "onChange", "badgeProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import find from 'lodash/find';
import qsHelp from "aa-utils/es/qsHelp";
import Badge from "antd/es/badge";
import Tabs from "antd/es/tabs";
import useUrlState from '@ahooksjs/use-url-state';
import useControllableValue from "ahooks/es/useControllableValue";
var TabPane = Tabs.TabPane;
var defaultBadgeProps = {};
var KeepTab = function KeepTab(props) {
  var _useUrlState2;
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    defaultActiveKey = props.defaultActiveKey,
    _props$saveActiveKeyN = props.saveActiveKeyName,
    saveActiveKeyName = _props$saveActiveKeyN === void 0 ? 'active' : _props$saveActiveKeyN,
    onChange = props.onChange,
    _props$badgeProps = props.badgeProps,
    badgeProps = _props$badgeProps === void 0 ? defaultBadgeProps : _props$badgeProps,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var defaultUrlParams = qsHelp.getQueryObject();
  var _useUrlState = useUrlState((_useUrlState2 = {}, _useUrlState2[saveActiveKeyName] = defaultUrlParams[saveActiveKeyName] || defaultActiveKey, _useUrlState2)),
    urlParams = _useUrlState[0],
    setUrlParams = _useUrlState[1];
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'activeKey',
      defaultValue: defaultUrlParams[saveActiveKeyName] || defaultActiveKey
    }),
    tabActiveKey = _useControllableValue[0],
    setTabActiveKey = _useControllableValue[1];
  React.useEffect(function () {
    if (!('activeKey' in props) && items) {
      var resultActiveTab = find(items, {
        key: urlParams[saveActiveKeyName]
      });
      if (!resultActiveTab || resultActiveTab.disabled) {
        var _setUrlParams;
        setUrlParams((_setUrlParams = {}, _setUrlParams[saveActiveKeyName] = items[0].key, _setUrlParams));
        setTabActiveKey(items[0].key);
      }
    }
  }, [tabActiveKey]);
  var handleTabChange = function handleTabChange(nextActiveKey) {
    var _setUrlParams2;
    setUrlParams((_setUrlParams2 = {}, _setUrlParams2[saveActiveKeyName] = nextActiveKey, _setUrlParams2));
    setTabActiveKey(nextActiveKey);
  };
  var resultItems = items.map(function (item) {
    var count = item == null ? void 0 : item.count;
    if (count) {
      return _extends({}, item, {
        label: _jsxs("div", {
          className: "tab-badge",
          children: [_jsx("div", {
            children: item.label
          }), _jsx(Badge, _extends({
            count: count
          }, badgeProps))]
        })
      });
    }
    return item;
  });
  return _jsx(Tabs, _extends({
    animated: false,
    onChange: handleTabChange,
    destroyInactiveTabPane: true,
    activeKey: tabActiveKey
  }, restProps, {
    items: resultItems
  }));
};
KeepTab.displayName = 'KeepTab';
KeepTab.TabPane = TabPane;
export default KeepTab;