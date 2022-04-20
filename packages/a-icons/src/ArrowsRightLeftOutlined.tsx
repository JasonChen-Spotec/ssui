import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowsRightLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.28 14.94h-9l3.41-3.41a.753.753 0 10-1.06-1.07L4 15.15a.82.82 0 00-.16.25.8.8 0 000 .57.82.82 0 00.16.25l4.69 4.69a.79.79 0 00.53.22.75.75 0 00.53-.22.74.74 0 000-1.06l-3.44-3.41h9a.75.75 0 000-1.5h-.03zM20.19 6a.82.82 0 00-.19-.22l-4.66-4.69a.75.75 0 00-1.06 0 .74.74 0 000 1.06l3.41 3.42h-9a.75.75 0 100 1.5h9l-3.41 3.41a.74.74 0 000 1.06c.14.14.331.22.53.22a.79.79 0 00.53-.22L20 6.85a.82.82 0 00.16-.25.8.8 0 00.03-.6z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowsRightLeftOutlined.displayName = 'ArrowsRightLeftOutlined';
export default ArrowsRightLeftOutlined;
