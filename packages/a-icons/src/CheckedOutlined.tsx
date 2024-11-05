import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CheckedOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#checked-outlined_svg__clip0_11995_6628)">
        <path
          d="M11.125 14.118L17.083 8l.917.941L11.125 16 7 11.765l.917-.941 3.208 3.294z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="checked-outlined_svg__clip0_11995_6628">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckedOutlined.displayName = 'CheckedOutlined';
export default CheckedOutlined;
