import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ListOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.87 3h3.5a2.25 2.25 0 012.25 2.25v3.5A2.25 2.25 0 017.37 11h-3.5a2.25 2.25 0 01-2.25-2.25v-3.5A2.25 2.25 0 013.87 3zm3.5 6.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.76.76 0 00-.75.75v3.5a.76.76 0 00.75.75h3.5z"
        fill="currentColor"
      />
      <path
        d="M13.62 6.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM13.62 9.75h8a.75.75 0 000-1.5h-8a.75.75 0 000 1.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.87 13h3.5a2.25 2.25 0 012.25 2.25v3.5A2.25 2.25 0 017.37 21h-3.5a2.25 2.25 0 01-2.25-2.25v-3.5A2.25 2.25 0 013.87 13zm3.5 6.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.76.76 0 00-.75.75v3.5a.76.76 0 00.75.75h3.5z"
        fill="currentColor"
      />
      <path
        d="M13.62 16.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM21.62 18.25h-8a.75.75 0 000 1.5h8a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListOutlined.displayName = 'ListOutlined';
export default ListOutlined;
