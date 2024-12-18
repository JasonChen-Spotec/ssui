import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CheckOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.414 6L9.707 17.707a1 1 0 01-1.414 0L2.586 12 4 10.586l5 5 11-11L21.414 6z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckOutlined.displayName = 'CheckOutlined';
export default CheckOutlined;
