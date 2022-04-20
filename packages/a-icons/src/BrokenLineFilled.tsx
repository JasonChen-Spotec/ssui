import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BrokenLineFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2h4.24a8 8 0 018 8v4.24a8 8 0 01-8 8H10a8 8 0 01-8-8V10a8 8 0 018-8zm6.39 10.87h1.73v.03a.75.75 0 000-1.5h-1.75a1.94 1.94 0 00-1.38.57l-2.15 2.15v-5a1 1 0 00-1.79-.79l-2.88 2.9a.45.45 0 01-.33.14H6.12a.75.75 0 000 1.5h1.72a2 2 0 001.39-.58l2.1-2.15v5a1 1 0 00.65 1 .92.92 0 00.4.08 1.05 1.05 0 00.74-.31L16.07 13a.48.48 0 01.32-.13z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BrokenLineFilled.displayName = 'BrokenLineFilled';
export default BrokenLineFilled;
