import * as React from 'react';
import type { HighlighedContentsProps } from './HighlighedContents';
import type { HighlightType } from './types';
export interface HighlightTextareaProps
  extends HighlighedContentsProps,
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'value' | 'onChange' | 'onScroll' | 'style'
    > {
  prefixCls?: string;
  className?: string;
  textAreaClassName?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  highlight?: HighlightType;
}
declare const HighlightWithinTextarea: React.ForwardRefExoticComponent<
  HighlightTextareaProps & React.RefAttributes<HTMLTextAreaElement>
>;
export default HighlightWithinTextarea;
