"use strict";

// @ts-nocheck
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var utils_1 = require("./utils");
var defaultOptions = {
  liveDrag: true,
  defaultMinWidth: 30,
  headerOnly: true,
  disabledColumns: []
};
var ColResizable = /*#__PURE__*/function () {
  function ColResizable(domElmTable, options) {
    if (options === void 0) {
      options = {};
    }
    this.options = void 0;
    this.domElmTable = void 0;
    this.domElmThList = void 0;
    this.domElmTableTheadThList = void 0;
    /** 存放拖动标签的容器 */
    this.domElmHandleContainer = void 0;
    this.tableWidth = void 0;
    this.cellSpacing = void 0;
    this.borderLeftWidth = void 0;
    this.lastThIndex = void 0;
    this.thLength = void 0;
    this.domElmHandleList = void 0;
    this.disabledColumns = void 0;
    this.drag = void 0;
    this.options = _extends({}, defaultOptions, options);
    this.domElmTable = domElmTable;
    this.onGripMouseDown = this.onGripMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.init();
  }
  var _proto = ColResizable.prototype;
  _proto.init = function init() {
    (0, utils_1.addClass)(this.domElmTable, 'table-col-resizer');
    this.domElmHandleList = [];
    this.domElmTableTheadThList = [];
    this.tableWidth = this.domElmTable.offsetWidth + "px";
    this.cellSpacing = (0, utils_1.tryParseInt)(getComputedStyle(this.domElmTable).getPropertyValue('border-spacing'));
    this.borderLeftWidth = (0, utils_1.tryParseInt)(getComputedStyle(this.domElmTable).getPropertyValue('border-left-width'));
    this.createGrips();
  };
  _proto.createGrips = function createGrips() {
    var _this = this;
    var thList = this.domElmTable.querySelectorAll('thead th');
    var domElmThList = [];
    this.domElmHandleContainer = this.domElmTable.previousSibling;
    var hasHandleContainer = this.domElmHandleContainer && this.domElmHandleContainer.className === 'col-resize-container';
    if (!hasHandleContainer) {
      this.domElmTable.insertAdjacentHTML('beforebegin', '<div class="col-resize-container"/>');
      this.domElmHandleContainer = this.domElmTable.previousSibling;
    } else {
      Array.prototype.push.apply(this.domElmHandleList, this.domElmHandleContainer.childNodes);
    }
    Array.prototype.push.apply(domElmThList, thList);
    this.thLength = domElmThList.length;
    this.lastThIndex = this.thLength - 1;
    var _this$options$disable = this.options.disabledColumns,
      disabledColumns = _this$options$disable === void 0 ? [] : _this$options$disable;
    domElmThList.forEach(function (domElmTh, index) {
      var disabledColumn = disabledColumns.indexOf(index) !== -1;
      var domElmHandle;
      if (!hasHandleContainer && _this.domElmHandleContainer) {
        _this.domElmHandleContainer.insertAdjacentHTML('beforeend', "<div class=\"drag-handle\">\n          <i class=\"icon icon-caret-right\"></i>\n          <div class=\"col-resizer\"></div>\n          <i class=\"icon icon-caret-left\"></i>\n        </div>");
        domElmHandle = _this.domElmHandleContainer.lastChild;
      } else {
        domElmHandle = _this.domElmHandleList[index];
      }
      if (index === _this.lastThIndex && !hasHandleContainer) {
        (0, utils_1.addClass)(domElmHandle, 'last-handle');
      }
      if (!disabledColumn && !hasHandleContainer) {
        domElmHandle.addEventListener('mousedown', _this.onGripMouseDown);
      } else if (disabledColumn && !hasHandleContainer) {
        (0, utils_1.addClass)(domElmHandle, 'disabled-drag');
      }
      domElmHandle.index = index;
      domElmTh.w = domElmTh.offsetWidth;
      domElmTh.style.width = domElmTh.offsetWidth + "px";
      if (!hasHandleContainer) {
        _this.domElmHandleList.push(domElmHandle);
      }
      _this.domElmTableTheadThList.push(domElmTh);
    });
    this.syncGrips();
  };
  _proto.syncGrips = function syncGrips() {
    var headerOnly = this.options.headerOnly;
    var theadHight = this.domElmTableTheadThList[0].offsetHeight;
    var height;
    if (headerOnly) {
      height = theadHight;
    } else {
      height = this.domElmTable.offsetHeight;
    }
    for (var i = 0; i < this.thLength; i += 1) {
      var domElmTh = this.domElmTableTheadThList[i];
      var left = void 0;
      if (i === 0) {
        left = domElmTh.offsetWidth + this.cellSpacing / 2;
      } else {
        var handleColLeft = this.domElmHandleList[i - 1].style.left + this.cellSpacing / 2;
        left = (0, utils_1.tryParseInt)(handleColLeft) + domElmTh.offsetWidth;
      }
      this.domElmHandleList[i].style.left = left + "px";
      this.domElmHandleList[i].style.height = height + "px";
    }
    var domElmIconList = [];
    var iconHeight = this.domElmHandleContainer.querySelector('.col-resize-container .icon').offsetHeight;
    var domElemIcons = this.domElmHandleContainer.querySelectorAll('.col-resize-container .icon');
    Array.prototype.push.apply(domElmIconList, domElemIcons);
    domElmIconList.forEach(function (el) {
      var marginTopNumber = (theadHight - iconHeight) / 2;
      el.style.marginTop = (0, utils_1.tryParseInt)(marginTopNumber) + "px";
    });
  };
  _proto.onGripMouseDown = function onGripMouseDown(e) {
    e.preventDefault();
    var index = e.currentTarget.index;
    var domElmHandle = this.domElmHandleList[index];
    (0, utils_1.addClass)(domElmHandle, 'active-drag');
    domElmHandle.initPageLeftX = e.pageX;
    domElmHandle.initLeft = (0, utils_1.tryParseInt)(domElmHandle.style.left);
    domElmHandle.x = domElmHandle.initLeft;
    this.drag = domElmHandle;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    return false;
  };
  _proto.onMouseMove = function onMouseMove(e) {
    e.preventDefault();
    if (!this.drag) {
      return false;
    }
    var defaultMinWidth = this.options.defaultMinWidth;
    var index = this.drag.index;
    var minWidth = defaultMinWidth;
    var pageLeftX = e.pageX;
    var x = pageLeftX - this.drag.initPageLeftX + this.drag.initLeft;
    var l = this.cellSpacing * 1.5 + minWidth + this.borderLeftWidth;
    var min = index ? (0, utils_1.tryParseInt)(this.domElmHandleList[index - 1].style.left) + this.cellSpacing + minWidth : l;
    var max = (0, utils_1.tryParseInt)(this.domElmHandleList[index + 1].style.left) - this.cellSpacing - minWidth;
    x = Math.max(min, Math.min(max, x));
    var inc = x - this.drag.initLeft;
    var domElmThNow = this.domElmTableTheadThList[index];
    var domElmThElmNext = this.domElmTableTheadThList[index + 1];
    var w = domElmThNow.w + inc;
    var w2 = domElmThElmNext.w - inc;
    var minWidthOne = (0, utils_1.tryParseInt)(this.domElmTableTheadThList[index].getAttribute('data-min-width'));
    var minWidthTwo = (0, utils_1.tryParseInt)(this.domElmTableTheadThList[index + 1].getAttribute('data-min-width'));
    if (minWidthOne > w) {
      x = minWidthOne - domElmThNow.w + this.drag.initLeft;
    } else if (minWidthTwo > w2) {
      x = domElmThElmNext.w - minWidthTwo + this.drag.initLeft;
    }
    this.drag.x = x;
    this.drag.style.left = x + "px";
    if (this.options.liveDrag) {
      this.syncCols(index);
      this.syncGrips();
      var onResizing = this.options.onResizing;
      if ((0, isFunction_1["default"])(onResizing)) {
        onResizing(e);
      }
    }
    return false;
  };
  _proto.syncCols = function syncCols(i, isOver) {
    var inc = this.drag.x - this.drag.initLeft;
    var domElmThNow = this.domElmTableTheadThList[i];
    var domElmThNext = this.domElmTableTheadThList[i + 1];
    var w = domElmThNow.w + inc;
    var w2 = domElmThNext.w - inc;
    domElmThNow.style.width = w + "px";
    domElmThNext.style.width = w2 + "px";
    if (isOver) {
      domElmThNow.w = w;
      domElmThNext.w = w2;
    }
  };
  _proto.onMouseUp = function onMouseUp(e) {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    if (!this.drag) {
      return false;
    }
    (0, utils_1.removeClass)(this.drag, 'active-drag');
    if (!(this.drag.x - this.drag.initLeft === 0)) {
      var index = this.drag.index;
      this.syncCols(index, true);
      this.syncGrips();
      var onResized = this.options.onResized;
      if ((0, isFunction_1["default"])(onResized)) {
        onResized(e);
      }
    }
    this.drag = null;
    return true;
  };
  return ColResizable;
}();
exports["default"] = ColResizable;