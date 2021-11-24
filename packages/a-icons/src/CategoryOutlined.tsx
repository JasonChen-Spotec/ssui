import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CategoryOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.58 2h4.17A2.25 2.25 0 0111 4.25v2.17a2.25 2.25 0 01-2.25 2.25H4.58a2.25 2.25 0 01-2.25-2.25V4.25A2.25 2.25 0 014.58 2zm4.17 5.17a.76.76 0 00.75-.75V4.25a.76.76 0 00-.75-.75H4.58a.76.76 0 00-.75.75v2.17a.76.76 0 00.75.75h4.17zM15.92 2h3.5a2.25 2.25 0 012.25 2.25v6.83a2.25 2.25 0 01-2.25 2.25h-3.5a2.24 2.24 0 01-2.25-2.25V4.25A2.25 2.25 0 0115.92 2zm3.5 9.83a.75.75 0 00.75-.75V4.25a.76.76 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v6.83a.74.74 0 00.75.75h3.5zM15.92 16h3.5a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0119.42 22h-3.5a2.25 2.25 0 01-2.25-2.25v-1.5A2.25 2.25 0 0115.92 16zm3.5 4.5a.76.76 0 00.75-.75v-1.5a.76.76 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3.5zM4.58 11.33h4.17A2.25 2.25 0 0111 13.58v6.17A2.25 2.25 0 018.75 22H4.58a2.25 2.25 0 01-2.25-2.25v-6.17a2.25 2.25 0 012.25-2.25zm4.17 9.17a.76.76 0 00.75-.75v-6.17a.76.76 0 00-.75-.75H4.58a.76.76 0 00-.75.75v6.17a.76.76 0 00.75.75h4.17z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CategoryOutlined.displayName = 'CategoryOutlined';
export default CategoryOutlined;
