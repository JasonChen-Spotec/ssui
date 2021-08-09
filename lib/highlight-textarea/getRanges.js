"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getType_1 = __importDefault(require("./getType"));

function getRanges(input, highlight) {
  var type = getType_1["default"](highlight);

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
      return getRangeRanges(input, highlight);

    case 'custom':
      return getCustomRanges(input, highlight);

    default:
      if (!highlight) {
        // do nothing for falsey values
        return [];
      }

      console.error('unrecognized highlight type');
  }
}

exports["default"] = getRanges;

function getArrayRanges(input, arr) {
  var ranges = arr.map(getRanges.bind(this, input));
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

function getRangeRanges(input, range) {
  return [range];
}

function getCustomRanges(input, custom) {
  var ranges = getRanges(input, custom.highlight);

  if (custom.className) {
    ranges.forEach(function (range) {
      // persist class name as a property of the array
      if (range.className) {
        range.className = custom.className + " " + range.className;
      } else {
        range.className = custom.className;
      }
    });
  }

  return ranges;
}