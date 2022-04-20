import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BrokenLineOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.72 11.572h-2.88a2.72 2.72 0 00-1.94.8l-4.42 4.42v-9.55a1.25 1.25 0 00-2.14-.87l-4.83 4.83a1.24 1.24 0 01-.89.37H1.75a.75.75 0 000 1.5h2.87a2.74 2.74 0 002-.81l4.34-4.41v9.55a1.24 1.24 0 00.77 1.15 1.23 1.23 0 001.36-.27l4.87-4.85c.235-.23.55-.36.88-.36h2.88a.75.75 0 100-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BrokenLineOutlined.displayName = 'BrokenLineOutlined';
export default BrokenLineOutlined;
