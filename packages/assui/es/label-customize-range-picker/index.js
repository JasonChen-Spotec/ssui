var _excluded = ["customizeTimeList", "radioList", "rangePickerType", "label", "showTime", "allowClear", "maxScope", "onOpenChange", "timeOffset", "fillDefaultDate", "showShortcutPanel", "naturalDate", "displayAllOption", "startTimeOfAllOption"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import Checkbox from "antd/es/checkbox";
import DatePicker from "antd/es/date-picker";
import Radio from "antd/es/radio";
import omit from 'lodash/omit';
import LocaleContext from '../config-provider/context';
import LabelRangePicker from '../label-range-picker';
import formatMessage, { langTypeEnum } from '../messages';
import getDefaultRadioList from './defaultRadioList';
import { formatMaxScope, getDateDiffScope, getTimeDiffOfShowTime, ONE_DAY_MILLISECOND } from './utils';
var RangePicker = DatePicker.RangePicker;
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
  var _useControllableValue = useControllableValue(props),
    date = _useControllableValue[0],
    setDate = _useControllableValue[1];
  var _useState = useState(false),
    isVisiblePanel = _useState[0],
    setIsVisiblePanel = _useState[1];
  var _useState2 = useState(),
    radioKey = _useState2[0],
    setRadioKey = _useState2[1];
  var _useState3 = useState(false),
    open = _useState3[0],
    setOpen = _useState3[1];
  var messages = useContext(LocaleContext);
  var defaultRadioListParams = {
    messages: messages,
    timeOffset: timeOffset,
    naturalDate: naturalDate,
    displayAllOption: displayAllOption,
    startTimeOfAllOption: startTimeOfAllOption
  };
  var defaultRadioList = customizeTimeList ? getDefaultRadioList(defaultRadioListParams).filter(function (item) {
    return customizeTimeList.includes(item.key);
  }) : getDefaultRadioList(defaultRadioListParams);
  var dataSource = radioList != null ? radioList : defaultRadioList;
  useEffect(function () {
    var filterItemList = dataSource.filter(function (item) {
      if (!date) {
        return false;
      }
      var _item$value = item.value,
        startTime = _item$value[0],
        endTime = _item$value[1];
      var _ref = date || [],
        defaultStartTime = _ref[0],
        defaultEndTime = _ref[1];
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
  useEffect(function () {
    var _ref2 = date || [],
      startTime = _ref2[0],
      endTime = _ref2[1];
    if (maxScope && fillDefaultDate) {
      var _formatMaxScope = formatMaxScope(date, maxScope),
        newStartDate = _formatMaxScope[0],
        newEndDate = _formatMaxScope[1];
      if (!(newStartDate != null && newStartDate.isSame(startTime)) || !(newEndDate != null && newEndDate.isSame(endTime))) {
        setDate(formatMaxScope(date, maxScope));
      }
    }
  }, [maxScope]);
  var onDiyTimeChange = function onDiyTimeChange(event) {
    var checked = event.target.checked;
    setIsVisiblePanel(checked);
  };
  var onDateChange = function onDateChange(nextValue) {
    var _ref4, _ref5;
    var _ref3 = nextValue || [],
      start = _ref3[0],
      end = _ref3[1];
    var nextStartDate = (_ref4 = showTime ? start == null ? void 0 : start.clone().startOf('minute') : start == null ? void 0 : start.clone().startOf('day')) != null ? _ref4 : null;
    var nextEndDate = (_ref5 = showTime ? end == null ? void 0 : end.clone().endOf('minute') : end == null ? void 0 : end.clone().endOf('day')) != null ? _ref5 : null;
    if (!nextStartDate && !nextEndDate) {
      return setDate(undefined);
    }
    if (!maxScope) {
      return setDate([nextStartDate, nextEndDate]);
    }
    var timeDiffOfShowTime = getTimeDiffOfShowTime(maxScope);
    var _ref6 = date || [],
      startDate = _ref6[0];
    // 1. start和end都存在时
    if (nextStartDate && nextEndDate) {
      var isChangeStartData = !(startDate != null && startDate.clone().isSame(nextStartDate));
      var momentDiffDay = nextEndDate.diff(nextStartDate) / ONE_DAY_MILLISECOND;
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
      var scope = getDateDiffScope(date, maxScope);
      nextStartDate = showTime ? nextEndDate.clone().subtract(getTimeDiffOfShowTime(scope), 'milliseconds').startOf('minute') : nextEndDate.clone().subtract(scope - 1, 'day').startOf('day');
      // 3. 仅start存在时，自动填入end
    } else if (nextStartDate && !nextEndDate) {
      var _scope = getDateDiffScope(date, maxScope);
      nextEndDate = showTime ? nextStartDate.clone().add(getTimeDiffOfShowTime(_scope), 'milliseconds').endOf('minute') : nextStartDate.clone().add(_scope - 1, 'day').endOf('day');
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
    var space = entTime.diff(startTime) / ONE_DAY_MILLISECOND;
    return space <= maxScope;
  }) : dataSource;
  var panelRender = function panelRender(panel) {
    return _jsxs("div", {
      className: "label-customize-range-picker-panel",
      children: [_jsx("div", {
        className: "check-wrapper",
        children: _jsxs("span", {
          className: "customize-select",
          children: [_jsx(Checkbox, {
            onChange: onDiyTimeChange
          }), _jsx("span", {
            className: "customize-select-text",
            children: formatMessage(messages, langTypeEnum.labelCustomizeRangePicker, 'customTime')
          })]
        })
      }), isVisiblePanel ? _jsx("div", {
        className: "panel",
        children: panel
      }) : _jsx("div", {
        className: "pick-box",
        children: _jsx(Radio.Group, {
          onChange: onRadioChange,
          value: radioKey,
          children: resultList.map(function (_ref7) {
            var key = _ref7.key,
              text = _ref7.text;
            return _jsx(Radio, {
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
  return rangePickerType === 'label' ? _jsx(LabelRangePicker, _extends({
    showTime: showTime,
    label: label
  }, omit(restProps, 'onChange', 'value', 'open'), baseOptions)) : _jsx(RangePicker, _extends({
    showTime: showTime,
    format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
  }, baseOptions, omit(restProps, 'onChange')));
};
export default LabelCustomizeRangePicker;