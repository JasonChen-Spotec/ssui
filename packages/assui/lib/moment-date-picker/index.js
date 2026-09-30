"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("@rc-component/picker/lib/generate/moment"));
var antd_1 = require("antd");
// Keep assui's public date values and callbacks compatible with Moment.
var MomentDatePicker = antd_1.DatePicker.generatePicker(moment_1["default"]);
exports["default"] = MomentDatePicker;