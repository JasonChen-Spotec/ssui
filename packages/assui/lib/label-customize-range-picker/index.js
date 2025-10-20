"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
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
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
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
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
var react_1 = __importStar(require("react"));
var radio_1 = __importDefault(require("antd/lib/radio"));
var checkbox_1 = __importDefault(require("antd/lib/checkbox"));
var date_picker_1 = __importDefault(require("antd/lib/date-picker"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var omit_1 = __importDefault(require("lodash/omit"));
var defaultRadioList_1 = __importDefault(require("./defaultRadioList"));
var label_range_picker_1 = __importDefault(require("../label-range-picker"));
var context_1 = __importDefault(require("../config-provider/context"));
var messages_1 = __importStar(require("../messages"));
var utils_1 = require("./utils");
var RangePicker = date_picker_1["default"].RangePicker;
var LabelCustomizeRangePicker = function LabelCustomizeRangePicker(props) {
  var customizeTimeList = props.customizeTimeList,
    radioList = props.radioList,
    _a = props.rangePickerType,
    rangePickerType = _a === void 0 ? 'label' : _a,
    label = props.label,
    showTime = props.showTime,
    _b = props.allowClear,
    allowClear = _b === void 0 ? false : _b,
    maxScope = props.maxScope,
    onOpenChange = props.onOpenChange,
    timeOffset = props.timeOffset,
    _c = props.fillDefaultDate,
    fillDefaultDate = _c === void 0 ? true : _c,
    _d = props.showShortcutPanel,
    showShortcutPanel = _d === void 0 ? true : _d,
    _e = props.naturalDate,
    naturalDate = _e === void 0 ? false : _e,
    displayAllOption = props.displayAllOption,
    startTimeOfAllOption = props.startTimeOfAllOption,
    restProps = __rest(props, ["customizeTimeList", "radioList", "rangePickerType", "label", "showTime", "allowClear", "maxScope", "onOpenChange", "timeOffset", "fillDefaultDate", "showShortcutPanel", "naturalDate", "displayAllOption", "startTimeOfAllOption"]);
  var _f = __read((0, useControllableValue_1["default"])(props), 2),
    date = _f[0],
    setDate = _f[1];
  var _g = __read((0, react_1.useState)(false), 2),
    isVisiblePanel = _g[0],
    setIsVisiblePanel = _g[1];
  var _h = __read((0, react_1.useState)(), 2),
    radioKey = _h[0],
    setRadioKey = _h[1];
  var _j = __read((0, react_1.useState)(false), 2),
    open = _j[0],
    setOpen = _j[1];
  var messages = (0, react_1.useContext)(context_1["default"]);
  var defaultRadioListParams = {
    messages: messages,
    timeOffset: timeOffset,
    naturalDate: naturalDate,
    displayAllOption: displayAllOption,
    startTimeOfAllOption: startTimeOfAllOption
  };
  var defaultRadioList = customizeTimeList ? (0, defaultRadioList_1["default"])(defaultRadioListParams).filter(function (item) {
    return customizeTimeList.includes(item.key);
  }) : (0, defaultRadioList_1["default"])(defaultRadioListParams);
  var dataSource = radioList !== null && radioList !== void 0 ? radioList : defaultRadioList;
  (0, react_1.useEffect)(function () {
    var filterItemList = dataSource.filter(function (item) {
      if (!date) return false;
      var _a = __read(item.value, 2),
        startTime = _a[0],
        endTime = _a[1];
      var _b = __read(date || [], 2),
        defaultStartTime = _b[0],
        defaultEndTime = _b[1];
      if (startTime.isSame(defaultStartTime, 'day') && endTime.isSame(defaultEndTime, 'day')) {
        return true;
      }
      return false;
    });
    if (filterItemList.length === 0) {
      setRadioKey(null);
    } else if (filterItemList.length > 1) {
      var findItem = filterItemList.find(function (item) {
        return item.key === radioKey;
      });
      var resutRadioKey = findItem ? findItem.key : filterItemList[0].key;
      setRadioKey(resutRadioKey);
    } else {
      var _a = __read(filterItemList, 1),
        item = _a[0];
      setRadioKey(item.key);
    }
  }, [date]);
  (0, react_1.useEffect)(function () {
    var _a = __read(date || [], 2),
      startTime = _a[0],
      endTime = _a[1];
    if (maxScope && fillDefaultDate) {
      var _b = __read((0, utils_1.formatMaxScope)(date, maxScope), 2),
        newStartDate = _b[0],
        newEndDate = _b[1];
      if (!(newStartDate === null || newStartDate === void 0 ? void 0 : newStartDate.isSame(startTime)) || !(newEndDate === null || newEndDate === void 0 ? void 0 : newEndDate.isSame(endTime))) {
        setDate((0, utils_1.formatMaxScope)(date, maxScope));
      }
    }
  }, [maxScope]);
  var onDiyTimeChange = function onDiyTimeChange(event) {
    var checked = event.target.checked;
    setIsVisiblePanel(checked);
  };
  var onDateChange = function onDateChange(nextValue) {
    var _a, _b;
    var _c = __read(nextValue || [], 2),
      start = _c[0],
      end = _c[1];
    var nextStartDate = (_a = showTime ? start === null || start === void 0 ? void 0 : start.clone().startOf('minute') : start === null || start === void 0 ? void 0 : start.clone().startOf('day')) !== null && _a !== void 0 ? _a : null;
    var nextEndDate = (_b = showTime ? end === null || end === void 0 ? void 0 : end.clone().endOf('minute') : end === null || end === void 0 ? void 0 : end.clone().endOf('day')) !== null && _b !== void 0 ? _b : null;
    if (!nextStartDate && !nextEndDate) {
      return setDate(undefined);
    }
    if (!maxScope) {
      return setDate([nextStartDate, nextEndDate]);
    }
    var timeDiffOfShowTime = (0, utils_1.getTimeDiffOfShowTime)(maxScope);
    var _d = __read(date || [], 1),
      startDate = _d[0];
    // 1. start和end都存在时
    if (nextStartDate && nextEndDate) {
      var isChangeStartData = !(startDate === null || startDate === void 0 ? void 0 : startDate.clone().isSame(nextStartDate));
      var momentDiffDay = nextEndDate.diff(nextStartDate) / utils_1.ONE_DAY_MILLISECOND;
      // 更改start
      if (isChangeStartData) {
        // 时间差大于maxScope，则将end调整到期望范围
        if (momentDiffDay > maxScope) {
          nextEndDate = showTime ? nextStartDate.clone().add(timeDiffOfShowTime, 'milliseconds').endOf('minute') : nextStartDate.clone().add(maxScope - 1, 'day').endOf('day');
        }
        // 更改end
        // 时间差大于maxScope，则将结start调整到期望范围
      } else if (momentDiffDay > maxScope) {
        nextStartDate = showTime ? nextEndDate.clone().subtract(timeDiffOfShowTime, 'milliseconds').startOf('minute') : nextEndDate.clone().subtract(maxScope - 1, 'day').startOf('day');
      }
      // 2. 仅end存在时，自动填入start
    } else if (!nextStartDate && nextEndDate) {
      var scope = (0, utils_1.getDateDiffScope)(date, maxScope);
      nextStartDate = showTime ? nextEndDate.clone().subtract((0, utils_1.getTimeDiffOfShowTime)(scope), 'milliseconds').startOf('minute') : nextEndDate.clone().subtract(scope - 1, 'day').startOf('day');
      // 3. 仅start存在时，自动填入end
    } else if (nextStartDate && !nextEndDate) {
      var scope = (0, utils_1.getDateDiffScope)(date, maxScope);
      nextEndDate = showTime ? nextStartDate.clone().add((0, utils_1.getTimeDiffOfShowTime)(scope), 'milliseconds').endOf('minute') : nextStartDate.clone().add(scope - 1, 'day').endOf('day');
    }
    if (nextStartDate && nextEndDate) {
      return setDate([nextStartDate, nextEndDate]);
    }
    return setDate([nextStartDate, nextEndDate]);
  };
  var onRadioChange = function onRadioChange(event) {
    var value = event.target.value;
    setRadioKey(value);
    var selectRadioInfo = dataSource.find(function (item) {
      return item.key === value;
    });
    setDate(selectRadioInfo === null || selectRadioInfo === void 0 ? void 0 : selectRadioInfo.value);
    setOpen(false);
  };
  var resultList = maxScope ? dataSource.filter(function (item) {
    var _a = __read(item.value, 2),
      startTime = _a[0],
      entTime = _a[1];
    var space = entTime.diff(startTime) / utils_1.ONE_DAY_MILLISECOND;
    return space <= maxScope;
  }) : dataSource;
  var panelRender = function panelRender(panel) {
    return react_1["default"].createElement("div", {
      className: "label-customize-range-picker-panel"
    }, react_1["default"].createElement("div", {
      className: "check-wrapper"
    }, react_1["default"].createElement("span", {
      className: "customize-select"
    }, react_1["default"].createElement(checkbox_1["default"], {
      onChange: onDiyTimeChange
    }), react_1["default"].createElement("span", {
      className: "customize-select-text"
    }, (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'customTime')))), isVisiblePanel ? react_1["default"].createElement("div", {
      className: "panel"
    }, panel) : react_1["default"].createElement("div", {
      className: "pick-box"
    }, react_1["default"].createElement(radio_1["default"].Group, {
      onChange: onRadioChange,
      value: radioKey
    }, resultList.map(function (_a) {
      var key = _a.key,
        text = _a.text;
      return react_1["default"].createElement(radio_1["default"], {
        className: "radio",
        key: key,
        value: key
      }, text);
    }))));
  };
  var handleOpenChange = function handleOpenChange(nextOpen) {
    setOpen(nextOpen);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
  };
  var baseOptions = {
    value: date,
    onChange: onDateChange,
    open: open,
    onOpenChange: handleOpenChange,
    panelRender: showShortcutPanel ? panelRender : undefined,
    allowClear: allowClear
  };
  return rangePickerType === 'label' ? react_1["default"].createElement(label_range_picker_1["default"], __assign({
    showTime: showTime,
    label: label
  }, (0, omit_1["default"])(restProps, 'onChange', 'value', 'open'), baseOptions)) : react_1["default"].createElement(RangePicker, __assign({
    showTime: showTime
  }, baseOptions, (0, omit_1["default"])(restProps, 'onChange')));
};
exports["default"] = LabelCustomizeRangePicker;