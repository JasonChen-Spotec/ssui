import React from 'react';
import isUndefined from 'lodash/isUndefined';
import isNumber from 'lodash/isNumber';
import type { StatesTypes } from './index';

/** 获取默认尺寸 */
export const getDefaultSize = (
  defaultSize: number | string | undefined,
  minSize: number | undefined,
  maxSize: number | undefined,
  draggedSize?: number,
) => {
  if (isNumber(draggedSize)) {
    const min = isNumber(minSize) ? minSize : 0;
    const max = isNumber(maxSize) && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }
  if (!isUndefined(defaultSize)) {
    return defaultSize;
  }
  return minSize;
};

/** 获取更新尺寸 */
export const getSizeUpdate = (
  props: {
    size?: string | number;
    defaultSize?: string | number;
    minSize?: number;
    maxSize?: number;
    primary: 'first' | 'second';
  },
  state: StatesTypes,
) => {
  const newState: any = {};
  const { instanceProps } = state;

  const hasSize = !isUndefined(props.size);

  if (instanceProps.size === props.size && hasSize) {
    return {};
  }

  const newSize = hasSize
    ? props.size
    : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);

  if (hasSize) {
    newState.draggedSize = newSize;
  }

  const isFirstViewPrimary = props.primary === 'first';

  newState[isFirstViewPrimary ? 'firstViewSize' : 'secondViewSize'] = newSize;
  newState[isFirstViewPrimary ? 'secondViewSize' : 'firstViewSize'] = undefined;

  newState.instanceProps = { size: props.size };

  return newState;
};

/** 排除空的子元素 */
export const removeNullChildren = (children: React.ReactNode) =>
  React.Children.toArray(children).filter((c) => c);

/** 失去焦点 */
export const unFocus = (document: Document, window: Window) => {
  document.getSelection()?.empty();
  window.getSelection()?.removeAllRanges();
};
