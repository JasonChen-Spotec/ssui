import { type Languages } from 'ec-common/lib/consts/langType';
export type HalfWidthSymbol = ',' | '.' | '?' | '!' | ';' | ':' | '(' | ')' | '[' | ']' | '{' | '}' | '<' | '>' | '"' | "'" | '`' | '~' | '@' | '#' | '$' | '%' | '^' | '&' | '*' | '_' | '+' | '-' | '=' | '\\' | '|' | '/';
/**
 * 半角标点符号转本地化符号
 * @param lang 语言类型 (zh-CN, zh-TW, ja, ko 等)
 * @param symbol 仅允许半角符号的字符串 (ASCII 可见字符)
 * @returns 转换后的符号字符串
 * @throws 当 symbol 包含非半角字符时抛出错误
 */
declare function getSignByLang(lang: Languages, symbol: HalfWidthSymbol): string;
export default getSignByLang;
