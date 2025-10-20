"use strict";

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
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRanges;
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-cond-assign */
var getType_1 = __importDefault(require("./getType"));
function getRanges(input, highlight) {
  var type = (0, getType_1["default"])(highlight);
  switch (type) {
    case 'array':
      return getArrayRanges(input, highlight);
    case 'function':
      return getFunctionRanges(input, highlight);
    case 'regexp':
      return getRegExpRanges(input, highlight);
    case 'string':
      return getStringRanges(input, highlight);
    case 'range':
      return getRangeRanges(highlight);
    case 'custom':
      return getCustomRanges(input, highlight);
    default:
      if (!highlight) {
        // do nothing for falsely values
        return [];
      }
      console.error('unrecognized highlight type');
  }
  return [];
}
function getArrayRanges(input, arr) {
  // const ranges: RangesType = arr.map(getRanges.bind(this, input));
  var ranges = arr.map(function (highlight) {
    return getRanges(input, highlight);
  });
  return Array.prototype.concat.apply([], ranges);
}
function getFunctionRanges(input, func) {
  return getRanges(input, func(input));
}
function getRegExpRanges(input, regex) {
  var ranges = [];
  var match;
  while (match = regex.exec(input), match !== null) {
    ranges.push([match.index, match.index + match[0].length]);
    if (!regex.global) {
      // non-global regexes do not increase lastIndex, causing an infinite loop,
      // but we can just break manually after the first match
      break;
    }
  }
  return ranges;
}
function getStringRanges(input, str) {
  var ranges = [];
  var inputLower = input.toLowerCase();
  var strLower = str.toLowerCase();
  var index = 0;
  while (index = inputLower.indexOf(strLower, index), index !== -1) {
    ranges.push([index, index + strLower.length]);
    index += strLower.length;
  }
  return ranges;
}
function getRangeRanges(range) {
  return [range];
}
function getCustomRanges(input, custom) {
  var ranges = getRanges(input, custom.highlight);
  var resultRangesData = __spreadArray([], __read(ranges), false);
  if (custom.className) {
    resultRangesData.forEach(function (range) {
      var rangeOption = range[2] || {};
      if (rangeOption.className) {
        rangeOption.className = "".concat(custom.className, " ").concat(rangeOption.className);
      } else {
        rangeOption.className = custom.className;
      }
      range[2] = rangeOption;
    });
  }
  return ranges;
}