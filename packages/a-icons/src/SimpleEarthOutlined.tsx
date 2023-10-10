import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SimpleEarthOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={12} cy={12} r={9.154} stroke="currentColor" strokeWidth={2} />
      <path
        d="M15.615 12c0 2.695-.498 5.086-1.262 6.766-.804 1.77-1.712 2.388-2.353 2.388-.641 0-1.549-.618-2.353-2.388-.764-1.68-1.262-4.071-1.262-6.766 0-2.695.498-5.086 1.262-6.766.804-1.77 1.712-2.388 2.353-2.388.641 0 1.549.618 2.353 2.388.764 1.68 1.262 4.071 1.262 6.766zM2.77 9.23h18.46M2.77 14.77h18.46"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SimpleEarthOutlined.displayName = 'SimpleEarthOutlined';
export default SimpleEarthOutlined;
