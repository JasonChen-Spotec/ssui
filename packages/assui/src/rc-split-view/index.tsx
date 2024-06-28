import React from 'react';
import useGetState from 'ahooks/lib/useGetState';
import useMount from 'ahooks/lib/useMount';
import useUnmount from 'ahooks/lib/useUnmount';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import View from './View';
import DraggableHandle from './DraggableHandle';
import { getSizeUpdate, removeNullChildren, getDefaultSize, unFocus } from './utils';

export { View };

export interface RcSplitViewProps {
  /** 是否允许拖动 */
  draggable?: boolean;
  /** children */
  children: React.ReactNode;
  /** 自定义组件类名 */
  className?: string;
  /** 拖拽条单击回调 */
  onResizerClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /** 拖拽条双击回调 */
  onResizerDoubleClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /** 面板样式 */
  viewClassName?: string;
  /** 第一个面板样式 */
  firstViewClassName?: string;
  /** 第二个面板样式 */
  secondViewClassName?: string;
  /** 分隔条样式 */
  handleClassName?: string;
  /** 分隔条内容样式 */
  handleContentClassName?: string;
  /** 拆分方式 */
  split?: 'vertical' | 'horizontal';
  /** 拖拽过程回调 */
  onChange?: (newSize: number) => void;
  /** 拖拽开始回调 */
  onDragStarted?: () => void;
  /** 拖拽完成回调 */
  onDragFinished?: (newSize: number) => void;
  /** 主体窗口 */
  primary?: 'first' | 'second';
  /** 拖动固定步进值 */
  step?: number;
  /** 最大窗口大小 */
  maxSize?: number;
  /** 最小窗口大小 */
  minSize?: number;
  /** 窗口大小 */
  size?: string | number;
  /** 默认窗口大小 */
  defaultSize?: string | number;
  /** 分隔条内容 */
  handleContent?: React.ReactNode;
}

export type StatesTypes = {
  /** 激活 */
  active: boolean;
  /** 位置 */
  position: number;
  /** 拖拽尺寸 */
  draggedSize?: number;
  /** 实例参数 */
  instanceProps: {
    size?: string | number;
  };
  /** 第一面板的尺寸 */
  firstViewSize?: number | string;
  /** 第二面板的尺寸 */
  secondViewSize?: number | string;
};

const RcSplitView: React.FC<RcSplitViewProps> = (props) => {
  const {
    draggable = true,
    children,
    className,
    onResizerClick,
    onResizerDoubleClick,
    viewClassName,
    firstViewClassName,
    secondViewClassName,
    handleClassName,
    split = 'vertical',
    onDragStarted,
    onDragFinished,
    primary = 'first',
    step,
    maxSize,
    minSize = 50,
    onChange,
    size,
    defaultSize,
    handleContent,
    handleContentClassName,
  } = props;

  const initialSize = isUndefined(size)
    ? getDefaultSize(defaultSize, minSize, maxSize)
    : size;

  const initialValue = {
    active: false,
    firstViewSize: primary === 'first' ? initialSize : undefined,
    secondViewSize: primary === 'second' ? initialSize : undefined,
    // these are props that are needed in static functions. ie: gDSFP
    instanceProps: {
      size,
    },
    position: 0,
  };

  const splitViewRef = React.useRef<HTMLDivElement>(null);
  const firstViewRef = React.useRef<HTMLDivElement>(null);
  const secondViewRef = React.useRef<HTMLDivElement>(null);

  const [states, setStates, getStates] = useGetState<StatesTypes>(initialValue);

  const onTouchStart = (event: React.TouchEvent<HTMLSpanElement>) => {
    const currentValue = getStates();

    if (draggable) {
      unFocus(document, window);

      const { clientX, clientY } = event.touches[0];
      const position = split === 'vertical' ? clientX : clientY;
      onDragStarted?.();

      setStates({
        ...currentValue,
        active: true,
        position,
      });
    }
  };

  const onMouseDown = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const eventWithTouches = {
      ...event,
      touches: [{ clientX: event.clientX, clientY: event.clientY }],
    };
    onTouchStart(eventWithTouches as any);
  };

  const onMouseUp = () => {
    const currentValue = getStates();
    const { active, draggedSize } = currentValue;
    if (draggable && active && draggedSize) {
      onDragFinished?.(draggedSize);
      setStates({ ...currentValue, active: false });
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    const currentValue = getStates();
    const { active, position } = currentValue;

    if (draggable && active) {
      unFocus(document, window);
      const isFirstPrimary = primary === 'first';
      const firstRef = isFirstPrimary ? firstViewRef.current : secondViewRef.current;
      const secondRef = isFirstPrimary ? secondViewRef.current : firstViewRef.current;

      if (firstRef && secondRef) {
        const firstNode = firstRef;
        const secondNode = secondRef;

        if (firstNode.getBoundingClientRect) {
          const { width, height } = firstNode.getBoundingClientRect();

          const current =
            split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;

          const nodeSize = split === 'vertical' ? width : height;

          let positionDelta = position - current;
          if (step) {
            if (Math.abs(positionDelta) < step) {
              return;
            }
            positionDelta = Math.trunc(positionDelta / step) * step;
          }
          let sizeDelta = isFirstPrimary ? positionDelta : -positionDelta;

          const firstViewOrder = parseInt(window.getComputedStyle(firstNode).order, 10);
          const secondViewOrder = parseInt(window.getComputedStyle(secondNode).order, 10);
          if (firstViewOrder > secondViewOrder) {
            sizeDelta = -sizeDelta;
          }

          let newMaxSize = maxSize || 0;
          if (!isUndefined(maxSize) && maxSize <= 0) {
            if (split === 'vertical') {
              newMaxSize =
                (splitViewRef.current as HTMLDivElement).getBoundingClientRect()?.width +
                maxSize;
            } else {
              newMaxSize =
                (splitViewRef.current as HTMLDivElement).getBoundingClientRect().height +
                maxSize;
            }
          }

          let newSize = +nodeSize - sizeDelta;

          const newPosition = position - positionDelta;

          let restValue = {};

          if (newSize < minSize) {
            newSize = minSize;
          } else if (!isUndefined(maxSize) && newSize > newMaxSize) {
            newSize = newMaxSize;
          } else {
            restValue = {
              position: newPosition,
            };
          }

          onChange?.(newSize);

          setStates({
            ...currentValue,
            draggedSize: newSize,
            [isFirstPrimary ? 'firstViewSize' : 'secondViewSize']: newSize,
            ...restValue,
          });
        }
      }
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    const eventWithTouches: any = {
      ...event,
      touches: [{ clientX: event.clientX, clientY: event.clientY }],
    };
    onTouchMove(eventWithTouches);
  };

  useMount(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    setStates(getSizeUpdate({ size, defaultSize, maxSize, minSize, primary }, states));
  });

  useUnmount(() => {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onTouchMove);
  });

  const [firstViewNode, secondViewNode] = removeNullChildren(children);

  return (
    <div
      className={classNames('split-view', `split-view-${split}`, className)}
      ref={splitViewRef}
    >
      <View
        className={classNames(viewClassName, firstViewClassName)}
        key="first-view"
        ref={firstViewRef}
        size={states.firstViewSize}
        split={split}
      >
        {firstViewNode}
      </View>
      <DraggableHandle
        className={classNames(
          'split-view-draggable-handle',
          {
            [`split-view-draggable-handle-${split}-disabled`]: !draggable,
          },
          `split-view-draggable-handle-${split}`,
          handleClassName,
        )}
        onClick={onResizerClick}
        onDoubleClick={onResizerDoubleClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        key="draggableHandle"
      >
        {draggable && (
          <div
            className={classNames(
              `split-view-draggable-handle-${split}-content`,
              handleContentClassName,
            )}
          >
            {handleContent}
          </div>
        )}
      </DraggableHandle>
      <View
        className={classNames(viewClassName, secondViewClassName)}
        key="second-view"
        ref={secondViewRef}
        size={states.secondViewSize}
        split={split}
      >
        {secondViewNode}
      </View>
    </div>
  );
};

export default RcSplitView;
