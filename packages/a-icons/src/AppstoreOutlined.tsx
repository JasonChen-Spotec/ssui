import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AppstoreOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.6 12.7H5.7a.7.7 0 00-.7.7v4.9a.7.7 0 00.7.7h4.9a.7.7 0 00.7-.7v-4.9a.7.7 0 00-.7-.7zm-.7 4.9H6.4v-3.5h3.5v3.5zM18.3 5h-4.9a.7.7 0 00-.7.7v4.9a.7.7 0 00.7.7h4.9a.7.7 0 00.7-.7V5.7a.7.7 0 00-.7-.7zm-.7 4.9h-3.5V6.4h3.5v3.5zm.7 2.8h-4.9a.7.7 0 00-.7.7v4.9a.7.7 0 00.7.7h4.9a.7.7 0 00.7-.7v-4.9a.7.7 0 00-.7-.7zm-.7 4.9h-3.5v-3.5h3.5v3.5zM10.6 5H5.7a.7.7 0 00-.7.7v4.9a.7.7 0 00.7.7h4.9a.7.7 0 00.7-.7V5.7a.7.7 0 00-.7-.7zm-.7 4.9H6.4V6.4h3.5v3.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AppstoreOutlined.displayName = 'AppstoreOutlined';
export default AppstoreOutlined;
