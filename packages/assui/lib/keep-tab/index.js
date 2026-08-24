"use strict";

var _excluded = ["items", "defaultActiveKey", "saveActiveKeyName", "onChange", "badgeProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var find_1 = tslib_1.__importDefault(require("lodash/find"));
var qsHelp_1 = tslib_1.__importDefault(require("aa-utils/lib/qsHelp"));
var badge_1 = tslib_1.__importDefault(require("antd/lib/badge"));
var tabs_1 = tslib_1.__importDefault(require("antd/lib/tabs"));
var use_url_state_1 = tslib_1.__importDefault(require("@ahooksjs/use-url-state"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var TabPane = tabs_1["default"].TabPane;
var defaultBadgeProps = {};
var KeepTab = function KeepTab(props) {
  var _ref2;
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    defaultActiveKey = props.defaultActiveKey,
    _props$saveActiveKeyN = props.saveActiveKeyName,
    saveActiveKeyName = _props$saveActiveKeyN === void 0 ? 'active' : _props$saveActiveKeyN,
    onChange = props.onChange,
    _props$badgeProps = props.badgeProps,
    badgeProps = _props$badgeProps === void 0 ? defaultBadgeProps : _props$badgeProps,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var defaultUrlParams = qsHelp_1["default"].getQueryObject();
  var _ref = (0, use_url_state_1["default"])((_ref2 = {}, _ref2[saveActiveKeyName] = defaultUrlParams[saveActiveKeyName] || defaultActiveKey, _ref2)),
    urlParams = _ref[0],
    setUrlParams = _ref[1];
  var _ref3 = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'activeKey',
      defaultValue: defaultUrlParams[saveActiveKeyName] || defaultActiveKey
    }),
    tabActiveKey = _ref3[0],
    setTabActiveKey = _ref3[1];
  React.useEffect(function () {
    if (!('activeKey' in props) && items) {
      var resultActiveTab = (0, find_1["default"])(items, {
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
        label: (0, jsx_runtime_1.jsxs)("div", {
          className: "tab-badge",
          children: [(0, jsx_runtime_1.jsx)("div", {
            children: item.label
          }), (0, jsx_runtime_1.jsx)(badge_1["default"], _extends({
            count: count
          }, badgeProps))]
        })
      });
    }
    return item;
  });
  return (0, jsx_runtime_1.jsx)(tabs_1["default"], _extends({
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
exports["default"] = KeepTab;