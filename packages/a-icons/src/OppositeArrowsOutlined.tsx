import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OppositeArrowsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#opposite-arrows-outlined_svg__clip0_417_193)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.192 7.464v6.657a1 1 0 01-1 1h-6.656v-2h4.242L8.464 2.808 9.88 1.393l10.313 10.314V7.464h2zM9.464 10.88H5.222l10.314 10.313-1.415 1.415L3.808 12.293v4.242h-2V9.88a1 1 0 011-1h6.656v2z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="opposite-arrows-outlined_svg__clip0_417_193">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OppositeArrowsOutlined.displayName = 'OppositeArrowsOutlined';
export default OppositeArrowsOutlined;
