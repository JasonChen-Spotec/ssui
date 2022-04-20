import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function UpFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.339 10.67V6.75a3.82 3.82 0 013.73-3.9l13.2.07a3.83 3.83 0 013.73 3.91v3.92a3.82 3.82 0 01-3.73 3.91h-5.74V9.81l2.35 2.33a.86.86 0 001.22 0 .84.84 0 000-1.22l-3.82-3.82a.87.87 0 00-1.22 0l-3.82 3.82a.84.84 0 000 1.22.86.86 0 001.22 0l2.35-2.36v4.84h-5.74a3.82 3.82 0 01-3.73-3.95z"
        fill="currentColor"
      />
      <path d="M10.809 20.14v-5.52h1.72v5.52a.86.86 0 11-1.72 0z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UpFilled.displayName = 'UpFilled';
export default UpFilled;
