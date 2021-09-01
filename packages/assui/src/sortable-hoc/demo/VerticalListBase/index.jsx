import React from 'react';
import { sortableHoc } from 'assui';
import classNames from 'classnames';
import style from './index.modules.less';

const { sortableElement, sortableContainer, arrayMove } = sortableHoc;

const SortableElement = sortableElement((props) => {
  const { value, itemIndex, isSorting } = props;
  return (
    <div
      className={classNames(style.item, style['stylized-item'], isSorting && style.sorting)}
      style={{ height: itemIndex === 4 ? 120 : 60 }}
      data-index={itemIndex}
    >
      <div className={style.wrapper}>
        <span>Item</span> {value}
      </div>
    </div>
  );
});

const SortableContainer = sortableContainer(({ items, isSorting }) => (
  <div className={classNames(style.list, style['stylized-list'])}>
    {items.map((value, index) => (
      <SortableElement
        key={`item-${value}`}
        index={index}
        itemIndex={index}
        value={value}
        isSorting={isSorting}
      />
    ))}
  </div>
));

class ListWrapper extends React.Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    isSorting: false,
  };

  onSortStart = () => {
    this.setState({ isSorting: true });
    document.body.style.cursor = 'grabbing';
  };

  onSortEnd = (sortEvent) => {
    const { oldIndex, newIndex } = sortEvent;
    const { items } = this.state;

    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
      isSorting: false,
    });

    document.body.style.cursor = '';
  };

  render() {
    const { items, isSorting } = this.state;

    return (
      <div className={style.root}>
        <SortableContainer
          isSorting={isSorting}
          items={items}
          onSortEnd={this.onSortEnd}
          onSortStart={this.onSortStart}
        />
      </div>
    );
  }
}

export default ListWrapper;
