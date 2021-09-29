import React from 'react';
import getRanges from './getRanges';
import extractSpansOfClasses from './extractSpansOfClasses';
import type { HighlightType } from './types';

export interface HighlighedContentsProps {
  value: string;
  highlight: HighlightType;
}

const HighlighedContents = ({ value, highlight }: HighlighedContentsProps) => {
  const ranges = getRanges(value, highlight);

  const parts = extractSpansOfClasses(value, ranges);

  return <>{parts.map((part) => part.render())}</>;
};

export default HighlighedContents;
