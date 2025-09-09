export declare const UP = "up";
export declare const DOWN = "down";
export declare const CEIL = "ceil";
export declare const FLOOR = "floor";
export declare const HALF_UP = "halfUp";
export declare const HALF_DOWN = "halfDown";
export declare const HALF_EVEN = "halfEven";
export declare const HALF_CEIL = "halfCeil";
export declare const HALF_FLOOR = "halfFloor";
type RoundingMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
interface modeMap {
    [key: string]: RoundingMode;
}
export declare const roundingModeMap: modeMap;
export {};
