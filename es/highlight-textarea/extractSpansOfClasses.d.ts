export default function extractSpansOfClasses(value: any, ranges: any): Span[];
declare class Span {
    constructor(text: any, beginIndex: any);
    beginIndex: any;
    endIndex: any;
    text: any;
    isMark: boolean;
    markClasses: Set<any>;
    setMark(className: any): void;
    carve(beginIndex2: any): Span;
    get className(): string;
    render(): JSX.Element;
}
export {};
