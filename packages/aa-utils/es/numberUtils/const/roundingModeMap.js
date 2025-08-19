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
export var UP = 'up';
export var DOWN = 'down';
export var CEIL = 'ceil';
export var FLOOR = 'floor';
export var HALF_UP = 'halfUp';
export var HALF_DOWN = 'halfDown';
export var HALF_EVEN = 'halfEven';
export var HALF_CEIL = 'halfCeil';
export var HALF_FLOOR = 'halfFloor';
export var roundingModeMap =
  ((_a = {}),
  (_a[UP] = 0),
  (_a[DOWN] = 1),
  (_a[CEIL] = 2),
  (_a[FLOOR] = 3),
  (_a[HALF_UP] = 4),
  (_a[HALF_DOWN] = 5),
  (_a[HALF_EVEN] = 6),
  (_a[HALF_CEIL] = 7),
  (_a[HALF_FLOOR] = 8),
  _a);
