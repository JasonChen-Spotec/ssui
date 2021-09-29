/* eslint-disable no-plusplus */
import React from 'react';
import type { RangesType } from './types';

class Span {
  beginIndex: number;

  endIndex: number;

  markClasses: Set<string>;

  isMark: boolean;

  text: string;

  constructor(text: string, beginIndex: number) {
    this.beginIndex = beginIndex;
    this.endIndex = beginIndex + text.length;
    this.text = text;
    this.isMark = false;
    this.markClasses = new Set();
  }

  setMark(className: string) {
    this.isMark = true;
    if (className) {
      className.split(' ').forEach((cls) => {
        this.markClasses.add(cls);
      });
    }
  }

  carve(beginIndex2: number) {
    const rightText = this.text.slice(beginIndex2 - this.beginIndex);
    this.text = this.text.slice(0, beginIndex2 - this.beginIndex);
    this.endIndex = beginIndex2;

    const right = new Span(rightText, beginIndex2);
    right.isMark = this.isMark;
    right.markClasses = new Set([...this.markClasses]);

    return right;
  }

  get className() {
    if (this.markClasses && this.markClasses.size > 0) {
      return [...this.markClasses].sort().join(' ');
    }
    return '';
  }

  render() {
    if (this.isMark) {
      const { className } = this;
      if (className) {
        return (
          <mark key={this.beginIndex} className={className}>
            {this.text}
          </mark>
        );
      }
      return <mark key={this.beginIndex}>{this.text}</mark>;
    }
    return <span key={this.beginIndex}>{this.text}</span>;
  }
}

export default function extractSpansOfClasses(value: string, ranges: RangesType) {
  const spans = [new Span(value, 0)];

  ranges.forEach((range) => {
    let beginIndex = range[0] as number;
    const endIndex = range[1] as number;
    const rangeOption = range[2];
    const { className = '' } = (rangeOption || {}) as { className: string };

    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];

      // since spans are sorted, So this is always true: beginIndex >= span.beginIndex.
      if (beginIndex < span.endIndex) {
        if (beginIndex === span.beginIndex) {
          if (endIndex < span.endIndex) {
            // [range]
            // [s  p  a  n]
            const span2 = span.carve(endIndex);
            span.setMark(className);
            spans.splice(i + 1, 0, span2);
            beginIndex = endIndex;
            i += 1;
          } else {
            // [range]   or   [r a n g e]
            // [span-]        [span]
            span.setMark(className);
            beginIndex = span.endIndex;
          }
        } else if (endIndex < span.endIndex) {
          //   [range]
          // [s  p  a  n]
          const span2 = span.carve(beginIndex);
          const span3 = span2.carve(endIndex);
          span2.setMark(className);
          spans.splice(i + 1, 0, span2, span3);
          beginIndex = endIndex;
          i += 2;
        } else {
          //   [range]  or     [range]
          // [s p a n]       [span]
          const span2 = span.carve(beginIndex);
          span2.setMark(className);
          spans.splice(i + 1, 0, span2);
          beginIndex = span2.endIndex;
          i += 1;
        }
      }
      if (beginIndex === endIndex) {
        break;
      }
    }
  });

  return spans;
}
