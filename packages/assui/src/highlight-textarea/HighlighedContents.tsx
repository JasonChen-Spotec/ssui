import React from 'react';
import extractSpansOfClasses from './extractSpansOfClasses';
import getRanges from './getRanges';
import type { HighlightType } from './types';

export interface HighlighedContentsProps {
  value: string;
  highlight?: HighlightType;
}

const HighlighedContents = ({ value, highlight = '' }: HighlighedContentsProps) => {
  const ranges = getRanges(value, highlight);

  const parts = extractSpansOfClasses(value, ranges);

  return <>{parts.map((part) => part.render())}</>;
};

export default HighlighedContents;
