import React from 'react';
import type { HighlightType } from './types';
export interface HighlighedContentsProps {
    value: string;
    highlight?: HighlightType;
}
declare const HighlighedContents: ({ value, highlight }: HighlighedContentsProps) => React.JSX.Element;
export default HighlighedContents;
