import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GroupOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 2h3.5A2.25 2.25 0 0116 4.25v3.5A2.25 2.25 0 0113.75 10h-3.5A2.25 2.25 0 018 7.75v-3.5A2.25 2.25 0 0110.25 2zm3.5 6.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.76.76 0 00-.75.75v3.5a.76.76 0 00.75.75h3.5z"
        fill="currentColor"
      />
      <path d="M12 9v3.5l-3 2M12 12.5l3 2" stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25 13h3.5A2.25 2.25 0 0122 15.25v3.5A2.25 2.25 0 0119.75 21h-3.5A2.25 2.25 0 0114 18.75v-3.5A2.25 2.25 0 0116.25 13zm3.5 6.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.76.76 0 00-.75.75v3.5a.76.76 0 00.75.75h3.5zM4.25 13h3.5A2.25 2.25 0 0110 15.25v3.5A2.25 2.25 0 017.75 21h-3.5A2.25 2.25 0 012 18.75v-3.5A2.25 2.25 0 014.25 13zm3.5 6.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.76.76 0 00-.75.75v3.5a.76.76 0 00.75.75h3.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GroupOutlined.displayName = 'GroupOutlined';
export default GroupOutlined;
