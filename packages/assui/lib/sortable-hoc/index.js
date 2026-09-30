"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_sortable_hoc_1 = require("@lumel/react-sortable-hoc");
// The fork's bundled declarations still reference removed React.SFC/global JSX
// types. Keep generic prop inference and both historical aliases in our API.
var SortableContainer = react_sortable_hoc_1.SortableContainer;
var SortableElement = react_sortable_hoc_1.SortableElement;
var SortableHandle = react_sortable_hoc_1.SortableHandle;
var arrayMove = react_sortable_hoc_1.arrayMove;
var sortableHoc = {
  SortableContainer: SortableContainer,
  SortableElement: SortableElement,
  SortableHandle: SortableHandle,
  sortableContainer: SortableContainer,
  sortableElement: SortableElement,
  sortableHandle: SortableHandle,
  arrayMove: arrayMove
};
exports["default"] = sortableHoc;