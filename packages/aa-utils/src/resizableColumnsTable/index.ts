// @ts-nocheck
import isElement from 'lodash/isElement';
import type { Options } from './colResizable';
import ColResizable from './colResizable';

const createColResizable = (domEleTable: HTMLTableElement, options: Options) => {
  if (isElement(domEleTable) && domEleTable.nodeName === 'TABLE') {
    if (!domEleTable.__resizable) {
      domEleTable.__resizable = new ColResizable(domEleTable, options);
    }
    return domEleTable.__resizable;
  }

  return null;
};

export default createColResizable;
