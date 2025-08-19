export interface FilterIntType {
  value: string;
  enableMinus?: boolean;
  preValue?: string;
}
export declare const filterInt: ({
  value,
  enableMinus,
  preValue,
}: FilterIntType) => string;
export interface FilterFloatType extends FilterIntType {
  precision?: number;
}
export declare const filterFloat: ({
  value,
  preValue,
  precision,
  enableMinus,
}: FilterFloatType) => string;
