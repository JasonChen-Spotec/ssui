// @ts-nocheck
/* eslint-disable no-param-reassign */
import isElement from 'lodash/isElement';
import type { Options } from './colResizable';
import ColResizable from './colResizable';

const createColResizable = (domEleTable: HTMLTableElement, options: Options) => {
  if (isElement(domEleTable) && domEleTable.nodeName === 'TABLE') {
    return (
      domEleTable.__resizable || (domEleTable.__resizable = new ColResizable(domEleTable, options))
    );
  }

  return null;
};

export default createColResizable;
