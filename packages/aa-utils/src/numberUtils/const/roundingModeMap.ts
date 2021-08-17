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

export const UP = 'up';
export const DOWN = 'down';
export const CEIL = 'ceil';
export const FLOOR = 'floor';
export const HALF_UP = 'halfUp';
export const HALF_DOWN = 'halfDown';
export const HALF_EVEN = 'halfEven';
export const HALF_CEIL = 'halfCeil';
export const HALF_FLOOR = 'halfFloor';

type RoundingMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface modeMap {
  [key: string]: RoundingMode;
}

export const roundingModeMap: modeMap = {
  [UP]: 0,
  [DOWN]: 1,
  [CEIL]: 2,
  [FLOOR]: 3,
  [HALF_UP]: 4,
  [HALF_DOWN]: 5,
  [HALF_EVEN]: 6,
  [HALF_CEIL]: 7,
  [HALF_FLOOR]: 8,
};
