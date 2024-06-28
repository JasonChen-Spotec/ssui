import React from 'react';
import type { CSSProperties } from 'react';
import isUndefined from 'lodash/isUndefined';

interface ViewProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 样式 */
  className?: string;
  /** 拆分方式 */
  split: 'vertical' | 'horizontal';
  /** 大小 */
  size?: string | number;
}

const View = React.forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  const { children, className, split, size } = props;

  const viewStyle: CSSProperties = {
    flex: 1,
    position: 'relative',
    outline: 'none',
  };

  if (!isUndefined(size)) {
    if (split === 'vertical') {
      viewStyle.width = size;
    } else {
      viewStyle.height = size;
      viewStyle.display = 'flex';
    }
    viewStyle.flex = 'none';
  }

  return (
    <div ref={ref} className={className} style={viewStyle}>
      {children}
    </div>
  );
});

export default View;
