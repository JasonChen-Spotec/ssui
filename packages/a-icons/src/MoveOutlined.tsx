import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MoveOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        fill="inherit"
        x={16}
        y={11.373}
        width={1.4}
        height={8}
        rx={0.7}
        transform="rotate(90 16 11.373)"
      />
      <path fill="inherit" d="M12.7 15.3a.7.7 0 11-1.4 0V8.7a.7.7 0 111.4 0v6.6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.295 6.323a.7.7 0 01-.99 0L11.972 3.99 9.638 6.323a.7.7 0 11-.99-.99l2.829-2.828a.7.7 0 01.99 0l2.828 2.828a.7.7 0 010 .99zM8.705 17.334a.7.7 0 01.99 0l2.333 2.333 2.334-2.334a.7.7 0 01.99.99l-2.829 2.829a.7.7 0 01-.99 0l-2.828-2.829a.7.7 0 010-.99zM17.333 15.295a.7.7 0 010-.99l2.334-2.333-2.334-2.334a.7.7 0 11.99-.99l2.829 2.829a.7.7 0 010 .99l-2.829 2.828a.7.7 0 01-.99 0zM6.323 15.295a.7.7 0 000-.99L3.99 11.972l2.333-2.334a.7.7 0 10-.99-.99l-2.828 2.829a.7.7 0 000 .99l2.828 2.828a.7.7 0 00.99 0z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MoveOutlined.displayName = 'MoveOutlined';
export default MoveOutlined;
