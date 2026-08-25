"use strict";

var _excluded = ["customizeTimeList", "radioList", "rangePickerType", "label", "showTime", "allowClear", "maxScope", "onOpenChange", "timeOffset", "fillDefaultDate", "showShortcutPanel", "naturalDate", "displayAllOption", "startTimeOfAllOption"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var checkbox_1 = tslib_1.__importDefault(require("antd/lib/checkbox"));
var date_picker_1 = tslib_1.__importDefault(require("antd/lib/date-picker"));
var radio_1 = tslib_1.__importDefault(require("antd/lib/radio"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var context_1 = tslib_1.__importDefault(require("../config-provider/context"));
var label_range_picker_1 = tslib_1.__importDefault(require("../label-range-picker"));
var messages_1 = tslib_1.__importStar(require("../messages"));
var defaultRadioList_1 = tslib_1.__importDefault(require("./defaultRadioList"));
var utils_1 = require("./utils");
var RangePicker = date_picker_1["default"].RangePicker;
var LabelCustomizeRangePicker = function LabelCustomizeRangePicker(props) {
  var customizeTimeList = props.customizeTimeList,
    radioList = props.radioList,
    _props$rangePickerTyp = props.rangePickerType,
    rangePickerType = _props$rangePickerTyp === void 0 ? 'label' : _props$rangePickerTyp,
    label = props.label,
    showTime = props.showTime,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
    maxScope = props.maxScope,
    onOpenChange = props.onOpenChange,
    timeOffset = props.timeOffset,
    _props$fillDefaultDat = props.fillDefaultDate,
    fillDefaultDate = _props$fillDefaultDat === void 0 ? true : _props$fillDefaultDat,
    _props$showShortcutPa = props.showShortcutPanel,
    showShortcutPanel = _props$showShortcutPa === void 0 ? true : _props$showShortcutPa,
    _props$naturalDate = props.naturalDate,
    naturalDate = _props$naturalDate === void 0 ? false : _props$naturalDate,
    displayAllOption = props.displayAllOption,
    startTimeOfAllOption = props.startTimeOfAllOption,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _ref = (0, useControllableValue_1["default"])(props),
    date = _ref[0],
    setDate = _ref[1];
  var _ref2 = (0, react_1.useState)(false),
    isVisiblePanel = _ref2[0],
    setIsVisiblePanel = _ref2[1];
  var _ref3 = (0, react_1.useState)(),
    radioKey = _ref3[0],
    setRadioKey = _ref3[1];
  var _ref4 = (0, react_1.useState)(false),
    open = _ref4[0],
    setOpen = _ref4[1];
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
  var dataSource = radioList != null ? radioList : defaultRadioList;
  (0, react_1.useEffect)(function () {
    var filterItemList = dataSource.filter(function (item) {
      if (!date) {
        return false;
      }
      var _item$value = item.value,
        startTime = _item$value[0],
        endTime = _item$value[1];
      var _ref5 = date || [],
        defaultStartTime = _ref5[0],
        defaultEndTime = _ref5[1];
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
      var item = filterItemList[0];
      setRadioKey(item.key);
    }
  }, [date]);
  (0, react_1.useEffect)(function () {
    var _ref6 = date || [],
      startTime = _ref6[0],
      endTime = _ref6[1];
    if (maxScope && fillDefaultDate) {
      var _ref7 = (0, utils_1.formatMaxScope)(date, maxScope),
        newStartDate = _ref7[0],
        newEndDate = _ref7[1];
      if (!(newStartDate != null && newStartDate.isSame(startTime)) || !(newEndDate != null && newEndDate.isSame(endTime))) {
        setDate((0, utils_1.formatMaxScope)(date, maxScope));
      }
    }
  }, [maxScope]);
  var onDiyTimeChange = function onDiyTimeChange(event) {
    var checked = event.target.checked;
    setIsVisiblePanel(checked);
  };
  var onDateChange = function onDateChange(nextValue) {
    var _ref9, _ref0;
    var _ref8 = nextValue || [],
      start = _ref8[0],
      end = _ref8[1];
    var nextStartDate = (_ref9 = showTime ? start == null ? void 0 : start.clone().startOf('minute') : start == null ? void 0 : start.clone().startOf('day')) != null ? _ref9 : null;
    var nextEndDate = (_ref0 = showTime ? end == null ? void 0 : end.clone().endOf('minute') : end == null ? void 0 : end.clone().endOf('day')) != null ? _ref0 : null;
    if (!nextStartDate && !nextEndDate) {
      return setDate(undefined);
    }
    if (!maxScope) {
      return setDate([nextStartDate, nextEndDate]);
    }
    var timeDiffOfShowTime = (0, utils_1.getTimeDiffOfShowTime)(maxScope);
    var _ref1 = date || [],
      startDate = _ref1[0];
    // 1. start和end都存在时
    if (nextStartDate && nextEndDate) {
      var isChangeStartData = !(startDate != null && startDate.clone().isSame(nextStartDate));
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
      var _scope = (0, utils_1.getDateDiffScope)(date, maxScope);
      nextEndDate = showTime ? nextStartDate.clone().add((0, utils_1.getTimeDiffOfShowTime)(_scope), 'milliseconds').endOf('minute') : nextStartDate.clone().add(_scope - 1, 'day').endOf('day');
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
    setDate(selectRadioInfo == null ? void 0 : selectRadioInfo.value);
    setOpen(false);
  };
  var resultList = maxScope ? dataSource.filter(function (item) {
    var _item$value2 = item.value,
      startTime = _item$value2[0],
      entTime = _item$value2[1];
    var space = entTime.diff(startTime) / utils_1.ONE_DAY_MILLISECOND;
    return space <= maxScope;
  }) : dataSource;
  var panelRender = function panelRender(panel) {
    return (0, jsx_runtime_1.jsxs)("div", {
      className: "label-customize-range-picker-panel",
      children: [(0, jsx_runtime_1.jsx)("div", {
        className: "check-wrapper",
        children: (0, jsx_runtime_1.jsxs)("span", {
          className: "customize-select",
          children: [(0, jsx_runtime_1.jsx)(checkbox_1["default"], {
            onChange: onDiyTimeChange
          }), (0, jsx_runtime_1.jsx)("span", {
            className: "customize-select-text",
            children: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'customTime')
          })]
        })
      }), isVisiblePanel ? (0, jsx_runtime_1.jsx)("div", {
        className: "panel",
        children: panel
      }) : (0, jsx_runtime_1.jsx)("div", {
        className: "pick-box",
        children: (0, jsx_runtime_1.jsx)(radio_1["default"].Group, {
          onChange: onRadioChange,
          value: radioKey,
          children: resultList.map(function (_ref10) {
            var key = _ref10.key,
              text = _ref10.text;
            return (0, jsx_runtime_1.jsx)(radio_1["default"], {
              className: "radio",
              value: key,
              children: text
            }, key);
          })
        })
      })]
    });
  };
  var handleOpenChange = function handleOpenChange(nextOpen) {
    setOpen(nextOpen);
    onOpenChange == null || onOpenChange(nextOpen);
  };
  var baseOptions = {
    value: date,
    onChange: onDateChange,
    open: open,
    onOpenChange: handleOpenChange,
    panelRender: showShortcutPanel ? panelRender : undefined,
    allowClear: allowClear
  };
  return rangePickerType === 'label' ? (0, jsx_runtime_1.jsx)(label_range_picker_1["default"], _extends({
    showTime: showTime,
    label: label
  }, (0, omit_1["default"])(restProps, 'onChange', 'value', 'open'), baseOptions)) : (0, jsx_runtime_1.jsx)(RangePicker, _extends({
    showTime: showTime,
    format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
  }, baseOptions, (0, omit_1["default"])(restProps, 'onChange')));
};
exports["default"] = LabelCustomizeRangePicker;