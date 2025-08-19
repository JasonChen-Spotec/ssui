export interface RegexOptionType {
  isValid: boolean;
  replacement: string;
}
type regexParamsType =
  | RegExp
  | string
  | {
      pattern: RegExp;
      replacement?: string;
    };
export interface ResultType extends RegexOptionType {
  pattern: RegExp;
}
declare const parse2RegexOption: (regex: regexParamsType) => ResultType;
export default parse2RegexOption;
