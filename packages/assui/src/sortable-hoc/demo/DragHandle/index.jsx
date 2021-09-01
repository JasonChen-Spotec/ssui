import React from 'react';
import getItems from '../utils';
import SortableContainer from '../SortableContainer';
import ListWrapper from '../ListWrapper';
import style from '../index.modules.less';

const DragHandle = () => (
  <div className={style.root}>
    <ListWrapper component={SortableContainer} shouldUseDragHandle items={getItems(20, 59)} />
  </div>
);

export default DragHandle;
