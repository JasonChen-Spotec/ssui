import React from 'react';
import classNames from 'classnames';
import { sortableHoc } from 'assui';
import getItems from '../utils';
import SortableContainer from '../SortableContainer';
import ListWrapper from '../ListWrapper';
import style from '../index.modules.less';

const { arrayMove } = sortableHoc;

const LargeFirstItem = () => (
  <div className={style.root}>
    <ListWrapper
      component={SortableContainer}
      axis="xy"
      items={getItems(9, false)}
      helperClass={style.stylizedHelper}
      className={classNames(style.list, style.stylizedList, style.grid, style.gridVariableSized)}
      itemClass={classNames(style.stylizedItem, style.gridItem, style.gridItemVariableSized)}
      onSortStart={({ node, helper }, event) => {
        const nodeBoundingClientRect = node.getBoundingClientRect();
        const helperWrapperNode = helper.childNodes[0];
        const transformOrigin = {
          x: ((event.clientX - nodeBoundingClientRect.left) / nodeBoundingClientRect.width) * 100,
          y: ((event.clientY - nodeBoundingClientRect.top) / nodeBoundingClientRect.height) * 100,
        };

        helperWrapperNode.style.transformOrigin = `${transformOrigin.x}% ${transformOrigin.y}%`;
      }}
      onSortOver={({ nodes, newIndex, index, helper }) => {
        const finalNodes = arrayMove(nodes, index, newIndex);
        const oldNode = nodes[index].node;
        const newNode = nodes[newIndex].node;
        const helperScale = newNode.offsetWidth / oldNode.offsetWidth;
        const helperWrapperNode = helper.childNodes[0];

        helperWrapperNode.style.transform = `scale(${helperScale})`;

        finalNodes.forEach(({ node }, i) => {
          const oldNodeItem = nodes[i].node;
          const scale = oldNodeItem.offsetWidth / node.offsetWidth;
          const wrapperNode = node.querySelector(`.${style.wrapper}`);

          wrapperNode.style.transform = `scale(${scale})`;
          wrapperNode.style.transformOrigin = newIndex > i ? '0 0' : '100% 0';
        });
      }}
      onSortEnd={({ nodes }) => {
        nodes.forEach(({ node }) => {
          const wrapperNode = node.querySelector(`.${style.wrapper}`);

          wrapperNode.style.transform = '';
        });
      }}
    />
  </div>
);

export default LargeFirstItem;
