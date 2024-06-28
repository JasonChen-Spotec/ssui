import React from 'react';

interface DraggableHandleProps {
  /** 组件样式 */
  className: string;
  /** 点击回调 */
  onClick?: (value: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /** 双击回调 */
  onDoubleClick?: (value: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /** 按下鼠标按钮回调 */
  onMouseDown: (value: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /** 事件在一个或多个触点与触控设备表面接触时被触发 */
  onTouchStart: (value: React.TouchEvent<HTMLSpanElement>) => void;
  /** 事件在一个或多个触点从触控平面上移开时触发 */
  onTouchEnd: (value: React.TouchEvent<HTMLSpanElement>) => void;
  /** 子元素 */
  children?: React.ReactNode;
}

const DraggableHandle: React.FC<DraggableHandleProps> = (props) => {
  const {
    className,
    onClick,
    onDoubleClick,
    onMouseDown,
    onTouchEnd,
    onTouchStart,
    children,
  } = props;

  return (
    <div
      className={className}
      onMouseDown={(event) => onMouseDown(event)}
      onTouchStart={(event) => {
        event.preventDefault();
        onTouchStart(event);
      }}
      onTouchEnd={(event) => {
        event.preventDefault();
        onTouchEnd(event);
      }}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      }}
      onDoubleClick={(event) => {
        if (onDoubleClick) {
          event.preventDefault();
          onDoubleClick(event);
        }
      }}
    >
      {children}
    </div>
  );
};

export default DraggableHandle;
