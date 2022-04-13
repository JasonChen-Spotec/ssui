import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PhoneOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2H7a2 2 0 00-2 2v16a2 2 0 002 2h11a2 2 0 002-2V4a2 2 0 00-2-2zm.36 18a.36.36 0 01-.36.36H7a.36.36 0 01-.36-.36V4A.36.36 0 017 3.64h11a.36.36 0 01.36.36v16zm-5.86-1a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PhoneOutlined.displayName = 'PhoneOutlined';
export default PhoneOutlined;
