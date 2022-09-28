import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowSwapHorizontal(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.56 2.58H8.44a6 6 0 00-6 6v7.12a6 6 0 006 6h7.12a6 6 0 006-6V8.58a6 6 0 00-6-6zM14.24 16H8.69l1.92 1.92a.75.75 0 010 1.07.74.74 0 01-.53.21.77.77 0 01-.53-.21l-3.2-3.21a.63.63 0 01-.16-.24.73.73 0 010-.58.63.63 0 01.16-.24l3.2-3.2a.75.75 0 011.06 1.06l-1.92 1.87h5.55a.75.75 0 010 1.5V16zm3.41-6.62a.63.63 0 00.16-.24v-.05a.73.73 0 000-.58.63.63 0 00-.16-.24l-3.2-3.2a.75.75 0 10-1.06 1.06l1.92 1.97H9.76a.75.75 0 100 1.5h5.55l-1.92 1.92a.74.74 0 000 1.06.71.71 0 00.53.22c.2.001.39-.078.53-.22l3.2-3.2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowSwapHorizontal.displayName = 'ArrowSwapHorizontal';
export default ArrowSwapHorizontal;
