import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ShutdownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 7.15a.59.59 0 01-.6-.59V.6a.6.6 0 011.2 0v6a.59.59 0 01-.6.55z"
      />
      <path
        fill="currentColor"
        d="M8 16a7.81 7.81 0 01-2.36-.36 8 8 0 01-2-14.22.6.6 0 11.66 1A6.75 6.75 0 006 14.5a6.49 6.49 0 002 .31 6.75 6.75 0 006.54-5.07 6.87 6.87 0 00.22-1.69 6.75 6.75 0 00-3-5.63.6.6 0 01.66-1A7.94 7.94 0 0116 8.05a8.35 8.35 0 01-.25 2A8 8 0 018 16z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShutdownOutlined.displayName = 'ShutdownOutlined';
export default ShutdownOutlined;
