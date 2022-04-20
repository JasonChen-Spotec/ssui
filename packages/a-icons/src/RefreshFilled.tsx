import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RefreshFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56 2h8.88A5.56 5.56 0 0122 7.56v8.88A5.56 5.56 0 0116.44 22H7.56A5.56 5.56 0 012 16.44V7.56A5.56 5.56 0 017.56 2zM5.709 15.205A6.76 6.76 0 0012 19.5a6.76 6.76 0 001.17-13.41l.16-.17a.83.83 0 00-1.17-1.18l-1.49 1.48a.82.82 0 000 1.18l1.49 1.49a.84.84 0 00.58.24.87.87 0 00.59-.24.82.82 0 00.11-1A5.12 5.12 0 118.54 9a.831.831 0 00-1.13-1.22 6.76 6.76 0 00-1.701 7.425z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshFilled.displayName = 'RefreshFilled';
export default RefreshFilled;
