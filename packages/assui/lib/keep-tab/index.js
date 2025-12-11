"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
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
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __importStar(require("react"));
var find_1 = __importDefault(require("lodash/find"));
var qsHelp_1 = __importDefault(require("aa-utils/lib/qsHelp"));
var badge_1 = __importDefault(require("antd/lib/badge"));
var tabs_1 = __importDefault(require("antd/lib/tabs"));
var use_url_state_1 = __importDefault(require("@ahooksjs/use-url-state"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var TabPane = tabs_1["default"].TabPane;
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
    restProps = __rest(props, ["items", "defaultActiveKey", "saveActiveKeyName", "onChange", "badgeProps"]);
  var defaultUrlParams = qsHelp_1["default"].getQueryObject();
  var _e = __read((0, use_url_state_1["default"])((_a = {}, _a[saveActiveKeyName] = defaultUrlParams[saveActiveKeyName] || defaultActiveKey, _a)), 2),
    urlParams = _e[0],
    setUrlParams = _e[1];
  var _f = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'activeKey',
      defaultValue: defaultUrlParams[saveActiveKeyName] || defaultActiveKey
    }), 2),
    tabActiveKey = _f[0],
    setTabActiveKey = _f[1];
  React.useEffect(function () {
    var _a;
    if (!('activeKey' in props) && items) {
      var resultActiveTab = (0, find_1["default"])(items, {
        key: urlParams[saveActiveKeyName]
      });
      if (!resultActiveTab || resultActiveTab.disabled) {
        setUrlParams((_a = {}, _a[saveActiveKeyName] = items[0].key, _a));
        setTabActiveKey(items[0].key);
      }
    }
  }, [tabActiveKey]);
  var handleTabChange = function handleTabChange(nextActiveKey) {
    var _a;
    setUrlParams((_a = {}, _a[saveActiveKeyName] = nextActiveKey, _a));
    setTabActiveKey(nextActiveKey);
  };
  var resultItems = items.map(function (item) {
    var count = item === null || item === void 0 ? void 0 : item.count;
    if (count) {
      return __assign(__assign({}, item), {
        label: React.createElement("div", {
          className: "tab-badge"
        }, React.createElement("div", null, item.label), React.createElement(badge_1["default"], __assign({
          count: count
        }, badgeProps)))
      });
    }
    return item;
  });
  return React.createElement(tabs_1["default"], __assign({
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