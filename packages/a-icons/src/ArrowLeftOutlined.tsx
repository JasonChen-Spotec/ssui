import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.95 11.47l7-7A.753.753 0 0112 5.55l-5.71 5.7h13.23a.75.75 0 010 1.5H6.3l5.7 5.7a.74.74 0 010 1.06.71.71 0 01-.53.22.74.74 0 01-.53-.22l-7-7a.75.75 0 010-1.06l.01.02z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
export default ArrowLeftOutlined;
