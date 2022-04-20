import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CloseOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.166 12.008l7.596-7.57a.825.825 0 000-1.16.81.81 0 00-1.15-.021l-7.596 7.57-7.498-7.57a.81.81 0 00-1.182 0 .814.814 0 000 1.094l7.498 7.559-7.596 7.558a.825.825 0 000 1.16.789.789 0 00.575.24.831.831 0 00.608-.196l7.595-7.57 7.596 7.657a.79.79 0 00.575.241.8.8 0 00.575-.24.825.825 0 000-1.16l-7.596-7.592z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseOutlined.displayName = 'CloseOutlined';
export default CloseOutlined;
