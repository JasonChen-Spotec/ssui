import React from 'react';
import classNames from 'classnames';
import { sortableHoc } from 'assui';
import style from './index.modules.less';

const { arrayMove } = sortableHoc;

export default class ListWrapper extends React.Component {
  state = {
    items: this.props.items,
    isSorting: false,
  };

  static defaultProps = {
    className: classNames(style.list, style.stylizedList),
    itemClass: classNames(style.item, style.stylizedItem),
    width: 400,
    height: 600,
  };

  onSortStart = (sortEvent, nativeEvent) => {
    const { onSortStart } = this.props;
    this.setState({ isSorting: true });

    document.body.style.cursor = 'grabbing';

    if (onSortStart) {
      onSortStart(sortEvent, nativeEvent, this.refs.component);
    }
  };

  onSortEnd = (sortEvent, nativeEvent) => {
    const { onSortEnd } = this.props;
    const { oldIndex, newIndex } = sortEvent;
    const { items } = this.state;

    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
      isSorting: false,
    });

    document.body.style.cursor = '';

    if (onSortEnd) {
      onSortEnd(sortEvent, nativeEvent, this.refs.component);
    }
  };

  render() {
    const Component = this.props.component;
    const { items, isSorting } = this.state;
    const props = {
      isSorting,
      items,
      onSortEnd: this.onSortEnd,
      onSortStart: this.onSortStart,
      ref: 'component',
      useDragHandle: this.props.shouldUseDragHandle,
    };

    return <Component {...this.props} {...props} />;
  }
}
