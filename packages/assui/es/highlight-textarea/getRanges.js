import getType from './getType';
export default function getRanges(input, highlight) {
  var type = getType(highlight);
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
  while (true) {
    match = regex.exec(input);
    if (match === null) {
      break;
    }
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
  while (true) {
    index = inputLower.indexOf(strLower, index);
    if (index === -1) {
      break;
    }
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
  var resultRangesData = [].concat(ranges);
  if (custom.className) {
    resultRangesData.forEach(function (range) {
      var rangeOption = range[2] || {};
      if (rangeOption.className) {
        rangeOption.className = custom.className + " " + rangeOption.className;
      } else {
        rangeOption.className = custom.className;
      }
      range[2] = rangeOption;
    });
  }
  return ranges;
}