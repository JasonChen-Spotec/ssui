import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AppstoreOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4H4v5h5V4zM4 2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zm11 2h5v5h-5V4zm-2 0a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zm2 11h5v5h-5v-5zm-2 0a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5zm-9 0h5v5H4v-5zm-2 0a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AppstoreOutlined.displayName = 'AppstoreOutlined';
export default AppstoreOutlined;
