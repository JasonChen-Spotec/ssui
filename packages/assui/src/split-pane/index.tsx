import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { DividerProps } from 'react-split-pane';
import { Pane, SplitPane as RcSplitPane } from 'react-split-pane';

export type SplitPaneProps = {
  /**
   * 是否允许拖动
   * @default true
   */
  allowResize?: boolean;
  /** 自定义组件类名 */
  className?: string;
  /**
   * 设置主体窗口
   * @default first
   */
  primary?: 'first' | 'second';
  /**
   * 窗口最小大小
   * @default 50
   */
  minSize?: string | number;
  /** 窗口最大大小 */
  maxSize?: string | number;
  /** 默认窗口大小 */
  defaultSize?: string | number;
  /** 窗口大小 */
  size?: string | number;
  /**
   * 拆分方式
   * @default vertical
   */
  split?: 'vertical' | 'horizontal';
  /** 拖拽开始回调 */
  onDragStarted?: () => void;
  /** 拖拽完成回调 */
  onDragFinished?: (newSize: number) => void;
  /** 拖拽过程回调 */
  onChange?: (newSize: number) => void;
  /** 拖拽条单击回调 */
  onResizerClick?: (event: MouseEvent) => void;
  /** 拖拽条双击回调 */
  onResizerDoubleClick?: (event: MouseEvent) => void;
  /** 总窗口样式 */
  style?: React.CSSProperties;
  /** 拖拽条样式 */
  resizerStyle?: React.CSSProperties;
  /** 每个窗口共同样式 */
  paneStyle?: React.CSSProperties;
  /** 拆分窗口1样式 */
  pane1Style?: React.CSSProperties;
  /** 拆分窗口2样式 */
  pane2Style?: React.CSSProperties;
  /** 拆分窗口2样式 */
  resizerClassName?: string;
  /** 拖动固定步进值 */
  step?: number;
  children: React.ReactNode;
};

type ResizerContextValue = Pick<
  SplitPaneProps,
  'split' | 'onResizerClick' | 'onResizerDoubleClick'
>;

const ResizerContext = createContext<ResizerContextValue>({});

// Keep the existing stylesheet and its divider orientation names. The upstream
// v3 direction describes the pane arrangement, which is the opposite convention.
const Resizer: React.FC<DividerProps> = ({
  disabled,
  onPointerDown,
  onKeyDown,
  className,
  style,
  currentSize,
  minSize,
  maxSize,
}) => {
  const { split, onResizerClick, onResizerDoubleClick } = useContext(ResizerContext);
  return (
    // biome-ignore lint/a11y/useSemanticElements: This focusable splitter handles keyboard and pointer resizing, rather than a thematic break.
    <span
      role="separator"
      aria-orientation={split}
      aria-valuenow={currentSize}
      aria-valuemin={minSize}
      aria-valuemax={maxSize}
      tabIndex={disabled ? -1 : 0}
      className={['Resizer', split, disabled && 'disabled', className]
        .filter(Boolean)
        .join(' ')}
      style={{
        flex: 'none',
        position: 'relative',
        userSelect: 'none',
        touchAction: 'none',
        ...style,
      }}
      onPointerDown={disabled ? undefined : onPointerDown}
      onKeyDown={disabled ? undefined : onKeyDown}
      onClick={(event) => onResizerClick?.(event.nativeEvent)}
      onDoubleClick={(event) => onResizerDoubleClick?.(event.nativeEvent)}
    />
  );
};

const pixels = (value: string | number, total: number) => {
  if (typeof value === 'number') {
    return value;
  }
  return value.endsWith('%') ? (parseFloat(value) / 100) * total : parseFloat(value);
};

const SplitPane: React.FC<SplitPaneProps> = ({
  allowResize = true,
  className,
  primary = 'first',
  minSize = 50,
  maxSize,
  defaultSize,
  size,
  split = 'vertical',
  onDragStarted,
  onDragFinished,
  onChange,
  onResizerClick,
  onResizerDoubleClick,
  style,
  resizerStyle,
  paneStyle,
  pane1Style,
  pane2Style,
  resizerClassName,
  step,
  children,
}) => {
  const [currentSize, setCurrentSize] = useState(size ?? defaultSize ?? minSize);
  const previousSize = useRef(size);
  const hasResized = useRef(false);
  const lastDragSize = useRef<number | undefined>(undefined);

  useEffect(() => {
    // v1 applies size when the prop changes, but still allows dragging while
    // that prop is unchanged. Keep the rendered and drag-origin sizes in sync.
    if (previousSize.current !== size) {
      previousSize.current = size;
      if (size !== undefined) {
        hasResized.current = true;
        setCurrentSize(size);
      }
    }
    if (size === undefined) {
      setCurrentSize((current) => {
        if (!hasResized.current) {
          return defaultSize ?? minSize;
        }
        if (typeof current !== 'number') {
          return current;
        }
        return Math.max(
          typeof minSize === 'number' ? minSize : 0,
          Math.min(
            typeof maxSize === 'number' && maxSize > 0 ? maxSize : Infinity,
            current,
          ),
        );
      });
    }
  }, [size, defaultSize, minSize, maxSize]);

  const primaryIndex = primary === 'first' ? 0 : 1;
  const panes = React.Children.toArray(children);
  const vertical = split === 'vertical';
  // A non-positive legacy maxSize reserves space for the other pane,
  // measured against the full container size.
  const reserveSize = typeof maxSize === 'number' && maxSize <= 0;
  const otherMinSize = reserveSize ? -maxSize : 0;

  return (
    <div
      className={['SplitPane', className, split, !allowResize && 'disabled']
        .filter(Boolean)
        .join(' ')}
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        ...style,
        ...(vertical
          ? { flexDirection: 'row', left: 0, right: 0 }
          : {
              flexDirection: 'column',
              bottom: 0,
              top: 0,
              minHeight: '100%',
              width: '100%',
            }),
      }}
    >
      <ResizerContext.Provider value={{ split, onResizerClick, onResizerDoubleClick }}>
        <RcSplitPane
          direction={vertical ? 'horizontal' : 'vertical'}
          resizable={allowResize}
          divider={Resizer}
          // Legacy percentages refer to the entire container. The flexible
          // secondary pane absorbs the divider's actual CSS width.
          dividerSize={0}
          dividerClassName={resizerClassName}
          dividerStyle={resizerStyle}
          step={step}
          onResizeStart={(event) => {
            lastDragSize.current = event.sizes[primaryIndex];
            onDragStarted?.();
          }}
          onResize={(sizes) => {
            const total = sizes.reduce((sum, paneSize) => sum + paneSize, 0);
            const maximum =
              maxSize === undefined
                ? Infinity
                : reserveSize
                  ? total + Number(maxSize)
                  : pixels(maxSize, total);
            // v3 distributes deltas between both panes before clamping. Apply
            // the legacy boundary even when the initial size is out of bounds.
            const nextSize = Math.max(
              pixels(minSize, total),
              Math.min(maximum, sizes[primaryIndex]),
            );
            lastDragSize.current = nextSize;
            hasResized.current = true;
            setCurrentSize(nextSize);
            onChange?.(nextSize);
          }}
          onResizeEnd={(sizes) =>
            onDragFinished?.(lastDragSize.current ?? sizes[primaryIndex])
          }
        >
          {[0, 1].map((index) => {
            const isPrimary = index === primaryIndex;
            return (
              <Pane
                key={index}
                className={`Pane Pane${index + 1} ${split}`}
                // Keep the primary pane fixed when its container resizes, just
                // as v1 did, instead of v3's default proportional resizing.
                size={isPrimary ? currentSize : undefined}
                minSize={isPrimary ? minSize : otherMinSize}
                maxSize={isPrimary && !reserveSize ? maxSize : undefined}
                style={{
                  overflow: 'visible',
                  ...(isPrimary
                    ? typeof currentSize === 'number'
                      ? { [vertical ? 'width' : 'height']: currentSize }
                      : {}
                    : { flex: 1, minWidth: 0, minHeight: 0 }),
                  ...paneStyle,
                  ...(index === 0 ? pane1Style : pane2Style),
                }}
              >
                {panes[index]}
              </Pane>
            );
          })}
        </RcSplitPane>
      </ResizerContext.Provider>
    </div>
  );
};

export default SplitPane;
