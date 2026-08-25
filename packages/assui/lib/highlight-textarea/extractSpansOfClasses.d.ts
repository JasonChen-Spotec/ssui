import type { RangesType } from './types';
declare class Span {
    beginIndex: number;
    endIndex: number;
    markClasses: Set<string>;
    isMark: boolean;
    text: string;
    constructor(text: string, beginIndex: number);
    setMark(className: string): void;
    carve(beginIndex2: number): Span;
    get className(): string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default function extractSpansOfClasses(value: string, ranges: RangesType): Span[];
export {};
