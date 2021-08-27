export type StringType = string;
export type NumberArrayType = number[];
export type RegExpType = RegExp;
export type FuncType = (input: string) => string;
export type HighlightInstanceType = StringType | NumberArrayType | RegExpType | FuncType;
export type AdmixArrayType = HighlightInstanceType[];
export type ObjectType = { highlight: HighlightInstanceType; className?: string };
export type CustomArrayArrayType = ObjectType[];

export type RangesType = (number | { className?: string })[][];

export type HighlightType =
  | StringType
  | NumberArrayType
  | RegExpType
  | FuncType
  | HighlightInstanceType
  | AdmixArrayType
  | ObjectType
  | CustomArrayArrayType;

export type TypeList =
  | 'falsely'
  | 'range'
  | 'array'
  | 'regexp'
  | 'custom'
  | 'other'
  | 'function'
  | 'string';
