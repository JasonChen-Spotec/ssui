import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '../demo/Grid/Base';
import LargeFirstItem from '../demo/Grid/LargeFirstItem';
import DragHandle from '../demo/DragHandle';
import VerticalList from '../demo/VerticalListBase';
import ListWrapper from '../demo/ListWrapper';
import SortableContainer from '../demo/SortableContainer';

// Resolve the published demo import to the source implementation under test.
jest.mock('assui', () => ({ sortableHoc: jest.requireActual('../index').default }));
jest.mock('../demo/index.modules.less', () => ({ wrapper: 'wrapper', handle: 'handle' }));

const setRect = (node, top, height) => {
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

describe('SortableHoc documentation demos in React 19', () => {
  it.each([
    ['grid', Grid, 10],
    ['large first grid item', LargeFirstItem, 9],
    ['drag handles', DragHandle, 20],
    ['vertical list', VerticalList, 11],
  ])('mounts the actual %s demo in StrictMode', async (_name, Demo, count) => {
    const { container } = render(<React.StrictMode><Demo /></React.StrictMode>);
    await act(async () => {});
    expect(container.querySelectorAll('[data-index]')).toHaveLength(count);
  });

  it('runs the variable grid demo sorting callbacks', async () => {
    const { container } = render(<React.StrictMode><LargeFirstItem /></React.StrictMode>);
    const items = [...container.querySelectorAll('[data-index]')];
    setRect(items[0].parentElement, 0, items.length * 40);
    items.forEach((item, index) => setRect(item, index * 40, 40));
    await act(async () => {});
    fireEvent.keyDown(items[0], { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(document.body.style.cursor).toBe('grabbing'));
    fireEvent.keyDown(items[0], { keyCode: 40, key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(items[0], { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(container.querySelector('[data-index="0"]')).toHaveTextContent('Item 1'));
    expect(document.body.style.cursor).toBe('');
  });

  it('sorts through the shared ListWrapper and passes its live component ref to callbacks', async () => {
    const onSortStart = jest.fn();
    const onSortEnd = jest.fn();
    const { container } = render(
      <React.StrictMode>
        <ListWrapper
          component={SortableContainer}
          shouldUseDragHandle
          items={[{ value: 0, height: 40 }, { value: 1, height: 40 }]}
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
          disableAutoscroll
          transitionDuration={0}
        />
      </React.StrictMode>,
    );
    const first = container.querySelector('[data-index="0"]');
    const second = container.querySelector('[data-index="1"]');
    setRect(first.parentElement, 0, 80);
    setRect(first, 0, 40);
    setRect(second, 40, 40);
    const handle = first.querySelector('[tabindex="0"]');
    await act(async () => {});
    fireEvent.keyDown(handle, { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(onSortStart).toHaveBeenCalledTimes(1));
    expect(document.body.style.cursor).toBe('grabbing');
    fireEvent.keyDown(handle, { keyCode: 40, key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(handle, { keyCode: 32, key: ' ', code: 'Space' });
    await waitFor(() => expect(onSortEnd).toHaveBeenCalledTimes(1));
    expect(onSortEnd).toHaveBeenCalledWith(
      expect.objectContaining({ oldIndex: 0, newIndex: 1, isKeySorting: true }),
      expect.anything(),
      expect.any(Object),
    );
    expect(onSortStart.mock.calls[0][2]).toBe(onSortEnd.mock.calls[0][2]);
    expect(container.querySelector('[data-index="0"]')).toHaveTextContent('Item 1');
    expect(document.body.style.cursor).toBe('');
  });
});
