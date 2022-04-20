import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LineUpFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1h13a4 4 0 014 4v13a4 4 0 01-4 4H6a4 4 0 01-4-4V5a4 4 0 014-4zm12 11.75a.75.75 0 00.75-.75V8.96a.76.76 0 00-.75-.75h-3a.75.75 0 000 1.5h.89l-3.56 3.56-2-2a1.36 1.36 0 00-1.92 0l-2.57 2.57A.75.75 0 006.9 14.9l2.51-2.4 2 2a1.36 1.36 0 001.92 0l3.92-3.95V12c0 .414.336.75.75.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LineUpFilled.displayName = 'LineUpFilled';
export default LineUpFilled;
