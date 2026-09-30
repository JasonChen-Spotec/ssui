import {
  SortableContainer as BaseSortableContainer,
  SortableElement as BaseSortableElement,
  SortableHandle as BaseSortableHandle,
  arrayMove as baseArrayMove,
} from '@lumel/react-sortable-hoc';
import type {
  ArrayMove,
  SortableContainerFactory,
  SortableElementFactory,
  SortableHandleFactory,
} from './types';

// The fork's bundled declarations still reference removed React.SFC/global JSX
// types. Keep generic prop inference and both historical aliases in our API.
const SortableContainer: SortableContainerFactory = BaseSortableContainer;
const SortableElement: SortableElementFactory = BaseSortableElement;
const SortableHandle: SortableHandleFactory = BaseSortableHandle;
const arrayMove: ArrayMove = baseArrayMove;

const sortableHoc = {
  SortableContainer,
  SortableElement,
  SortableHandle,
  sortableContainer: SortableContainer,
  sortableElement: SortableElement,
  sortableHandle: SortableHandle,
  arrayMove,
};

export default sortableHoc;
