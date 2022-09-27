import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CornerRightArrowsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.72 7.67a.779.779 0 00-.16-.24l-2.65-2.65a.75.75 0 10-1.06 1.06l1.37 1.37H10A4.77 4.77 0 005.22 12v6.72a.75.75 0 001.5 0V12A3.27 3.27 0 0110 8.71h6.23l-1.37 1.36a.75.75 0 001.06 1.06l2.65-2.64a.82.82 0 00.16-.25.8.8 0 00-.01-.57z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CornerRightArrowsOutlined.displayName = 'CornerRightArrowsOutlined';
export default CornerRightArrowsOutlined;
