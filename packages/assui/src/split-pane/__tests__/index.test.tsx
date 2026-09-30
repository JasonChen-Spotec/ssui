import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SplitPane from '../index';

const observers = new Set<{ callback: ResizeObserverCallback; target: Element }>();
const originalResizeObserver = global.ResizeObserver;
const originalPointerEvent = window.PointerEvent;
let containerWidth = 500;
let containerHeight = 300;

const notifySize = (observer: { callback: ResizeObserverCallback; target: Element }) => {
  observer.callback([{
    target: observer.target,
    contentRect: { width: containerWidth, height: containerHeight },
  } as ResizeObserverEntry], {} as ResizeObserver);
};

const drag = (resizer: Element, from: [number, number], to: [number, number]) => {
  fireEvent.pointerDown(resizer, { clientX: from[0], clientY: from[1], pointerId: 1, pointerType: 'mouse', button: 0 });
  fireEvent.pointerMove(document, { clientX: to[0], clientY: to[1], pointerId: 1, pointerType: 'mouse' });
  act(() => jest.advanceTimersByTime(20));
  fireEvent.pointerUp(document, { clientX: to[0], clientY: to[1], pointerId: 1, pointerType: 'mouse' });
};

describe('SplitPane React 19 compatibility', () => {
  beforeAll(() => {
    global.ResizeObserver = class {
      observer?: { callback: ResizeObserverCallback; target: Element };
      constructor(private callback: ResizeObserverCallback) {}
      observe(target: Element) {
        this.observer = { callback: this.callback, target };
        observers.add(this.observer);
        notifySize(this.observer);
      }
      unobserve() { this.disconnect(); }
      disconnect() { if (this.observer) observers.delete(this.observer); }
    };
    window.PointerEvent = class extends MouseEvent {
      pointerId: number;
      pointerType: string;
      constructor(type: string, init: PointerEventInit) {
        super(type, init);
        this.pointerId = init.pointerId ?? 1;
        this.pointerType = init.pointerType ?? 'mouse';
      }
    } as typeof PointerEvent;
    HTMLElement.prototype.setPointerCapture = jest.fn();
    HTMLElement.prototype.hasPointerCapture = jest.fn(() => true);
    HTMLElement.prototype.releasePointerCapture = jest.fn();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    containerWidth = 500;
    containerHeight = 300;
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  afterAll(() => {
    global.ResizeObserver = originalResizeObserver;
    window.PointerEvent = originalPointerEvent;
  });

  it('drags the first pane in StrictMode and keeps its size when the container grows', () => {
    const onDragStarted = jest.fn();
    const onChange = jest.fn();
    const onDragFinished = jest.fn();
    const { container } = render(
      <React.StrictMode>
        <SplitPane defaultSize={120} minSize={50} onDragStarted={onDragStarted} onChange={onChange} onDragFinished={onDragFinished}>
          <span>First pane</span><span>Second pane</span>
        </SplitPane>
      </React.StrictMode>,
    );
    const pane = container.querySelector('.Pane1')!;
    const resizer = container.querySelector('.Resizer')!;
    expect(pane).toHaveStyle({ width: '120px' });
    expect(resizer).toHaveClass('vertical');
    expect(resizer).not.toHaveClass('horizontal');
    drag(resizer, [120, 10], [150, 10]);
    expect(onDragStarted).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(150);
    expect(onDragFinished).toHaveBeenCalledWith(150);
    expect(pane).toHaveStyle({ width: '150px' });
    act(() => {
      containerWidth = 800;
      observers.forEach(notifySize);
    });
    expect(pane).toHaveStyle({ width: '150px' });
  });

  it('keeps the second pane as the primary pane when split horizontally', () => {
    const onChange = jest.fn();
    const { container } = render(
      <SplitPane split="horizontal" primary="second" defaultSize={100} onChange={onChange}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    const resizer = container.querySelector('.Resizer')!;
    const pane = container.querySelector('.Pane2')!;
    expect(pane).toHaveStyle({ height: '100px' });
    expect(resizer).toHaveClass('horizontal');
    drag(resizer, [10, 200], [10, 170]);
    expect(onChange).toHaveBeenLastCalledWith(130);
    expect(pane).toHaveStyle({ height: '130px' });
  });

  it('enforces the minimum and positive maximum size', () => {
    const { container } = render(
      <SplitPane defaultSize={120} minSize={80} maxSize={160}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    const resizer = container.querySelector('.Resizer')!;
    const pane = container.querySelector('.Pane1')!;
    drag(resizer, [120, 10], [300, 10]);
    expect(pane).toHaveStyle({ width: '160px' });
    drag(resizer, [160, 10], [0, 10]);
    expect(pane).toHaveStyle({ width: '80px' });
  });

  it.each([
    { initial: 20, minSize: 50, maxSize: undefined, pointer: 30, expected: 50 },
    { initial: 200, minSize: 50, maxSize: 100, pointer: 190, expected: 100 },
  ])('clamps an initially out-of-bounds size after the first drag ($initial)', ({ initial, minSize, maxSize, pointer, expected }) => {
    const onChange = jest.fn();
    const onDragFinished = jest.fn();
    const { container } = render(
      <SplitPane defaultSize={initial} minSize={minSize} maxSize={maxSize} onChange={onChange} onDragFinished={onDragFinished}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    drag(container.querySelector('.Resizer')!, [initial, 10], [pointer, 10]);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: `${expected}px` });
    expect(onChange).toHaveBeenLastCalledWith(expected);
    expect(onDragFinished).toHaveBeenCalledWith(expected);
  });

  it('reserves space for the other pane for a negative maximum size', () => {
    const { container } = render(
      <SplitPane defaultSize={120} maxSize={-100}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    const resizer = container.querySelector('.Resizer')!;
    drag(resizer, [120, 10], [490, 10]);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '400px' });
  });

  it('supports percentage sizes, repeated dragging, and size prop updates', () => {
    const { container, rerender } = render(
      <SplitPane defaultSize="25%"><span>First</span><span>Second</span></SplitPane>,
    );
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '125px' });
    const onChange = jest.fn();
    rerender(<SplitPane size={150} onChange={onChange}><span>First</span><span>Second</span></SplitPane>);
    const resizer = container.querySelector('.Resizer')!;
    drag(resizer, [150, 10], [180, 10]);
    expect(onChange).toHaveBeenLastCalledWith(180);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '180px' });
    drag(resizer, [180, 10], [210, 10]);
    expect(onChange).toHaveBeenLastCalledWith(210);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '210px' });
    rerender(<SplitPane size={200}><span>First</span><span>Second</span></SplitPane>);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '200px' });
  });

  it('updates the default before dragging and clamps dragged sizes when bounds change', () => {
    const children = [<span key="first">First</span>, <span key="second">Second</span>];
    const { container, rerender } = render(<SplitPane defaultSize={120}>{children}</SplitPane>);
    rerender(<SplitPane defaultSize={150}>{children}</SplitPane>);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '150px' });
    drag(container.querySelector('.Resizer')!, [150, 10], [180, 10]);
    rerender(<SplitPane defaultSize={150} maxSize={160}>{children}</SplitPane>);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '160px' });
    rerender(<SplitPane defaultSize={150} minSize={200}>{children}</SplitPane>);
    expect(container.querySelector('.Pane1')).toHaveStyle({ width: '200px' });
  });

  it('supports fixed steps, keyboard resizing, and native resizer events', () => {
    const onResizerClick = jest.fn();
    const onResizerDoubleClick = jest.fn();
    const onChange = jest.fn();
    const { container } = render(
      <SplitPane defaultSize={120} step={10} onChange={onChange} onResizerClick={onResizerClick} onResizerDoubleClick={onResizerDoubleClick} resizerClassName="custom-divider" pane1Style={{ background: 'red' }}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    const resizer = container.querySelector('.Resizer')!;
    drag(resizer, [120, 10], [143, 10]);
    expect(onChange).toHaveBeenLastCalledWith(140);
    fireEvent.keyDown(resizer, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenLastCalledWith(150);
    fireEvent.click(resizer);
    fireEvent.doubleClick(resizer);
    expect(onResizerClick).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(onResizerDoubleClick).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(resizer).toHaveClass('custom-divider');
    expect(container.querySelector('.Pane1')).toHaveStyle({ background: 'red' });
  });

  it('disables pointer and keyboard resizing', () => {
    const onChange = jest.fn();
    const { container } = render(
      <SplitPane allowResize={false} defaultSize={120} onChange={onChange}>
        <span>First</span><span>Second</span>
      </SplitPane>,
    );
    const resizer = container.querySelector('.Resizer')!;
    drag(resizer, [120, 10], [150, 10]);
    fireEvent.keyDown(resizer, { key: 'ArrowRight' });
    expect(onChange).not.toHaveBeenCalled();
    expect(resizer).toHaveClass('disabled');
    expect(resizer).toHaveAttribute('tabindex', '-1');
  });
});
