"use strict";

// BigNumber.set({ ROUNDING_MODE: 1 });
// UP         0 Away from zero.
// DOWN       1 Towards zero.
// CEIL       2 Towards +Infinity.
// FLOOR      3 Towards -Infinity.
// HALF_UP    4 Towards nearest neighbour. If equidistant, up.
// HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
// HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
// HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
// HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
var _a;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundingModeMap = exports.HALF_FLOOR = exports.HALF_CEIL = exports.HALF_EVEN = exports.HALF_DOWN = exports.HALF_UP = exports.FLOOR = exports.CEIL = exports.DOWN = exports.UP = void 0;
exports.UP = 'up';
exports.DOWN = 'down';
exports.CEIL = 'ceil';
exports.FLOOR = 'floor';
exports.HALF_UP = 'halfUp';
exports.HALF_DOWN = 'halfDown';
exports.HALF_EVEN = 'halfEven';
exports.HALF_CEIL = 'halfCeil';
exports.HALF_FLOOR = 'halfFloor';
exports.roundingModeMap = (_a = {}, _a[exports.UP] = 0, _a[exports.DOWN] = 1, _a[exports.CEIL] = 2, _a[exports.FLOOR] = 3, _a[exports.HALF_UP] = 4, _a[exports.HALF_DOWN] = 5, _a[exports.HALF_EVEN] = 6, _a[exports.HALF_CEIL] = 7, _a[exports.HALF_FLOOR] = 8, _a);