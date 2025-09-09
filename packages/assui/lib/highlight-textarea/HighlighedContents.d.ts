import type { HighlightType } from './types';
export interface HighlighedContentsProps {
    value: string;
    highlight?: HighlightType;
}
declare const HighlighedContents: ({ value, highlight }: HighlighedContentsProps) => JSX.Element;
export default HighlighedContents;
