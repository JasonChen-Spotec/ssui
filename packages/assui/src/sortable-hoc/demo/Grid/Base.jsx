import React from 'react';
import classNames from 'classnames';
import getItems from '../utils';
import SortableContainer from '../SortableContainer';
import ListWrapper from '../ListWrapper';
import style from '../index.modules.less';

const Base = () => (
  <div className={style.root}>
    <ListWrapper
      component={SortableContainer}
      axis="xy"
      items={getItems(10, false)}
      helperClass={style.stylizedHelper}
      className={classNames(style.list, style.stylizedList, style.grid)}
      itemClass={classNames(style.stylizedItem, style.gridItem)}
    />
  </div>
);

export default Base;
