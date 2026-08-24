// @ts-nocheck
import isElement from 'lodash/isElement';
import ColResizable from './colResizable';
var createColResizable = function createColResizable(domEleTable, options) {
  if (isElement(domEleTable) && domEleTable.nodeName === 'TABLE') {
    if (!domEleTable.__resizable) {
      domEleTable.__resizable = new ColResizable(domEleTable, options);
    }
    return domEleTable.__resizable;
  }
  return null;
};
export default createColResizable;