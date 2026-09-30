import { SortableContainer as BaseSortableContainer, SortableElement as BaseSortableElement, SortableHandle as BaseSortableHandle, arrayMove as baseArrayMove } from '@lumel/react-sortable-hoc';
// The fork's bundled declarations still reference removed React.SFC/global JSX
// types. Keep generic prop inference and both historical aliases in our API.
var SortableContainer = BaseSortableContainer;
var SortableElement = BaseSortableElement;
var SortableHandle = BaseSortableHandle;
var arrayMove = baseArrayMove;
var sortableHoc = {
  SortableContainer: SortableContainer,
  SortableElement: SortableElement,
  SortableHandle: SortableHandle,
  sortableContainer: SortableContainer,
  sortableElement: SortableElement,
  sortableHandle: SortableHandle,
  arrayMove: arrayMove
};
export default sortableHoc;