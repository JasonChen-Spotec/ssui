import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CheckOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.891 5.894L10.125 20.086l-7.859-7.25 2.325-2.52 5.202 4.799 9.459-11.41 2.64 2.19z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckOutlined.displayName = 'CheckOutlined';
export default CheckOutlined;
