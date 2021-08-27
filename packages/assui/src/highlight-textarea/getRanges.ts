/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-cond-assign */
import getType from './getType';
import {
  HighlightType,
  StringType,
  AdmixArrayType,
  NumberArrayType,
  ObjectType,
  FuncType,
  RegExpType,
  RangesType,
} from './types';

export default function getRanges(input: string, highlight: HighlightType): RangesType {
  const type = getType(highlight);
  switch (type) {
    case 'array':
      return getArrayRanges(input, highlight as AdmixArrayType);
    case 'function':
      return getFunctionRanges(input, highlight as FuncType);
    case 'regexp':
      return getRegExpRanges(input, highlight as RegExpType);
    case 'string':
      return getStringRanges(input, highlight as StringType);
    case 'range':
      return getRangeRanges(highlight as NumberArrayType);
    case 'custom':
      return getCustomRanges(input, highlight as ObjectType);
    default:
      if (!highlight) {
        // do nothing for falsely values
        return [];
      }
      console.error('unrecognized highlight type');
  }
  return [];
}

function getArrayRanges(input: string, arr: AdmixArrayType): RangesType {
  // const ranges: RangesType = arr.map(getRanges.bind(this, input));
  const ranges = arr.map((highlight) => getRanges(input, highlight));
  return Array.prototype.concat.apply([], ranges);
}

function getFunctionRanges(input: string, func: FuncType): RangesType {
  return getRanges(input, func(input));
}

function getRegExpRanges(input: string, regex: RegExpType): RangesType {
  const ranges: RangesType = [];
  let match: RegExpExecArray | null;

  while (((match = regex.exec(input)), match !== null)) {
    ranges.push([match.index, match.index + match[0].length]);
    if (!regex.global) {
      // non-global regexes do not increase lastIndex, causing an infinite loop,
      // but we can just break manually after the first match
      break;
    }
  }
  return ranges;
}

function getStringRanges(input: string, str: StringType): RangesType {
  const ranges: RangesType = [];
  const inputLower = input.toLowerCase();
  const strLower = str.toLowerCase();
  let index = 0;
  while (((index = inputLower.indexOf(strLower, index)), index !== -1)) {
    ranges.push([index, index + strLower.length]);
    index += strLower.length;
  }
  return ranges;
}

function getRangeRanges(range: number[]): RangesType {
  return [range];
}

function getCustomRanges(input: string, custom: ObjectType) {
  const ranges: RangesType = getRanges(input, custom.highlight);
  const resultRangesData = [...ranges];
  if (custom.className) {
    resultRangesData.forEach((range) => {
      const rangeOption = (range[2] || {}) as { className?: string };
      if (rangeOption.className) {
        rangeOption.className = `${custom.className} ${rangeOption.className}`;
      } else {
        rangeOption.className = custom.className;
      }
      range[2] = rangeOption;
    });
  }
  return ranges;
}
