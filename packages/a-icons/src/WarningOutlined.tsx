import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function WarningOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.323 7.823a.75.75 0 01.354 1l-1.488 3.117H14a.75.75 0 01.664 1.1l-2 3.809a.75.75 0 11-1.328-.698l1.423-2.71H10a.75.75 0 01-.677-1.074l2-4.19a.75.75 0 011-.354z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 11a7.25 7.25 0 0114.5 0v9.25H4.75V11zM12 5.25A5.75 5.75 0 006.25 11v7.75h11.5V11A5.75 5.75 0 0012 5.25z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 19.5a.75.75 0 01.75-.75h17a.75.75 0 010 1.5h-17a.75.75 0 01-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WarningOutlined.displayName = 'WarningOutlined';
export default WarningOutlined;
