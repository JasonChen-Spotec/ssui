import React from 'react';
import { sortableHoc } from 'assui';
import classNames from 'classnames';
import Handle from './Handle';
import style from './index.modules.less';

const { sortableElement } = sortableHoc;

const SortItem = sortableElement(
  ({
    tabbable,
    className,
    isDisabled,
    height,
    style: propStyle,
    shouldUseDragHandle,
    value,
    itemIndex,
    isSorting,
  }) => {
    const bodyTabIndex = tabbable && !shouldUseDragHandle ? 0 : -1;
    const handleTabIndex = tabbable && shouldUseDragHandle ? 0 : -1;

    return (
      <div
        className={classNames(
          className,
          isDisabled && style.disabled,
          isSorting && style.sorting,
          shouldUseDragHandle && style.containsDragHandle,
        )}
        style={{
          height,
          ...propStyle,
        }}
        tabIndex={bodyTabIndex}
        data-index={itemIndex}
      >
        {shouldUseDragHandle && <Handle tabIndex={handleTabIndex} />}
        <div className={style.wrapper}>
          <span>Item</span> {value}
        </div>
      </div>
    );
  },
);

export default SortItem;
