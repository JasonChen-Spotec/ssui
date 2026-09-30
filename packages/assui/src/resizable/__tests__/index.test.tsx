import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResizableBox } from '../index';

describe('Resizable React 19 compatibility', () => {
  it('resizes through a DOM handle without findDOMNode', () => {
    const onResize = jest.fn();
    const onResizeStop = jest.fn();
    const { container, unmount } = render(
      <React.StrictMode>
        <ResizableBox width={100} height={100} onResize={onResize} onResizeStop={onResizeStop}>
          <span>Resizable content</span>
        </ResizableBox>
      </React.StrictMode>,
    );
    const handle = container.querySelector('.react-resizable-handle')!;
    fireEvent.mouseDown(handle, { clientX: 10, clientY: 10, button: 0 });
    fireEvent.mouseMove(document, { clientX: 40, clientY: 50 });
    fireEvent.mouseUp(document, { clientX: 40, clientY: 50 });
    expect(onResize).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
      size: { width: 130, height: 140 },
    }));
    expect(onResizeStop).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.react-resizable')).toHaveStyle({ width: '130px', height: '140px' });
    unmount();
  });
});
