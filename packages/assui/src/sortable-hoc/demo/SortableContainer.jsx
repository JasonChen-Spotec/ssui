import React from 'react';
import { sortableHoc } from 'assui';
import SortItem from './SortItem';

const { sortableContainer } = sortableHoc;

const SortableList = sortableContainer(
  ({ className, items, disabledItems = [], itemClass, isSorting, shouldUseDragHandle, type }) => (
    <div className={className}>
      {items.map(({ value, height }, index) => {
        const disabled = disabledItems.includes(value);

        return (
          <SortItem
            tabbable
            key={`item-${value}`}
            disabled={disabled}
            isDisabled={disabled}
            className={itemClass}
            index={index}
            itemIndex={index}
            value={value}
            height={height}
            shouldUseDragHandle={shouldUseDragHandle}
            type={type}
            isSorting={isSorting}
          />
        );
      })}
    </div>
  ),
);

export default SortableList;
