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
/**
 * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
 * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
 */
/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision) {
  if (precision === void 0) {
    precision = 15;
  }
  return +parseFloat(Number(num).toPrecision(precision));
}
/**
 * Return digits length of a number
 * @param {*number} num Input number
 */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
/**
 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
 * @param {*number} num 输入数
 */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
/**
 * 迭代操作
 */
function iteratorOperation(arr, operation) {
  var _a = __read(arr),
    num1 = _a[0],
    num2 = _a[1],
    others = _a.slice(2);
  var res = operation(num1, num2);
  others.forEach(function (num) {
    res = operation(res, num);
  });
  return res;
}
/**
 * 精确乘法
 */
function times() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  var _a = __read(nums, 2),
    num1 = _a[0],
    num2 = _a[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
/**
 * 精确加法
 */
function plus() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }
  var _a = __read(nums, 2),
    num1 = _a[0],
    num2 = _a[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
/**
 * 精确减法
 */
function minus() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }
  var _a = __read(nums, 2),
    num1 = _a[0],
    num2 = _a[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
/**
 * 精确除法
 */
function divide() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  var _a = __read(nums, 2),
    num1 = _a[0],
    num2 = _a[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
  return times(num1Changed / num2Changed,
  // eslint-disable-next-line no-restricted-properties
  strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
var _boundaryCheckingState = true;
/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 */
function enableBoundaryChecking(flag) {
  if (flag === void 0) {
    flag = true;
  }
  _boundaryCheckingState = flag;
}
/**
 * 检测数字是否越界，如果越界给出提示
 * @param {*number} num 输入数
 */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " is beyond boundary when transfer to integer, the results may not be accurate"));
    }
  }
}
export { strip, plus, minus, times, divide, digitLength, float2Fixed, enableBoundaryChecking };