import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import sortableHoc from '../index';

const Handle = sortableHoc.sortableHandle(
  React.forwardRef<HTMLSpanElement, { label: string }>(({ label }, ref) => (
    <span ref={ref} tabIndex={0}>{label}</span>
  )),
);

const Item = sortableHoc.sortableElement(
  React.forwardRef<HTMLDivElement, { value: string }>(({ value }, ref) => (
    <div ref={ref} data-testid={`item-${value}`}>
      <Handle label={`Move ${value}`} />
    </div>
  )),
);

const List = sortableHoc.sortableContainer(
  React.forwardRef<HTMLDivElement, { items: string[] }>(({ items }, ref) => (
    <div ref={ref} data-testid="list">
      {items.map((value, index) => <Item key={value} value={value} index={index} />)}
    </div>
  )),
);

const setRect = (node: HTMLElement, top: number, height: number) => {
  jest.spyOn(node, 'getBoundingClientRect').mockReturnValue({
    x: 0, y: top, top, left: 0, right: 200, bottom: top + height, width: 200, height,
    toJSON: () => ({}),
  });
  Object.defineProperties(node, {
    offsetWidth: { value: 200, configurable: true },
    offsetHeight: { value: height, configurable: true },
    offsetTop: { value: top, configurable: true },
    offsetLeft: { value: 0, configurable: true },
  });
};

describe('SortableHoc React 19 compatibility', () => {
  it('sorts from a forwarded DOM handle in StrictMode without findDOMNode', async () => {
    const onSortStart = jest.fn();
    const onSortEnd = jest.fn();
    const { getByTestId, getByText, unmount } = render(
      <React.StrictMode>
        <List items={['first', 'second']} useDragHandle disableAutoscroll transitionDuration={0}
          onSortStart={onSortStart} onSortEnd={onSortEnd} />
      </React.StrictMode>,
    );
    setRect(getByTestId('list'), 0, 80);
    setRect(getByTestId('item-first'), 0, 40);
    setRect(getByTestId('item-second'), 40, 40);
    const handle = getByText('Move first');

    // The container attaches its native listeners after resolving its DOM ref.
    await act(async () => {});
    fireEvent.keyDown(handle, { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(onSortStart).toHaveBeenCalledTimes(1));
    fireEvent.keyDown(handle, { keyCode: 40, key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(handle, { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(onSortEnd).toHaveBeenCalledWith(
      expect.objectContaining({ oldIndex: 0, newIndex: 1, isKeySorting: true }),
      expect.anything(),
    ));
    expect(sortableHoc.arrayMove(['first', 'second'], 0, 1)).toEqual(['second', 'first']);
    unmount();
  });
});
