import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DiamondFileOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.55 15.08l.58 2.81a1.47 1.47 0 01-.56 1.6l-2.73 2a1.45 1.45 0 01-.88.29 1.48 1.48 0 01-.89-.29l-2.72-2a1.5 1.5 0 01-.55-1.68l.56-2.73a1.9 1.9 0 011.86-1.51h3.47c.9 0 1.675.63 1.86 1.51zm-6.3 3.12L8 20.26l2.68-1.98-.6-2.9a.4.4 0 00-.39-.31H6.22a.4.4 0 00-.39.31l-.58 2.82z"
        fill="currentColor"
      />
      <path
        d="M8 16.48l-1 1a.74.74 0 000 1.06.71.71 0 00.53.22.74.74 0 00.47-.22l1-1a.75.75 0 10-1-1.06z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.05 2.43l7 7a.77.77 0 01.22.57v7a4.75 4.75 0 01-4.75 4.75h-2.87a.75.75 0 010-1.5h2.87A3.25 3.25 0 0018.77 17v-6.25h-4.25A2.75 2.75 0 0111.77 8V3.74H9.52A3.26 3.26 0 006.27 7v5a.75.75 0 01-1.5 0V7a4.75 4.75 0 014.75-4.79h3c.199 0 .39.08.53.22zm.22 2.34V8a1.25 1.25 0 001.25 1.24h3.22l-4.47-4.47z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DiamondFileOutlined.displayName = 'DiamondFileOutlined';
export default DiamondFileOutlined;
