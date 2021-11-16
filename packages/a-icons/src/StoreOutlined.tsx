import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function StoreOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.39 14.25a.6.6 0 10-.6-.6.6.6 0 00.6.6zM8.69 6.75a2.48 2.48 0 002-1 2.49 2.49 0 004.5-1.46.54.54 0 000-.22L13.29.52a.5.5 0 00-.45-.27h-8.3a.5.5 0 00-.45.27L2.25 4a.54.54 0 00-.05.22 2.49 2.49 0 004.5 1.46 2.48 2.48 0 001.99 1.07zm0-1a1.51 1.51 0 01-1.41-1h2.82a1.51 1.51 0 01-1.41 1zm4 0a1.51 1.51 0 01-1.41-1h2.82a1.51 1.51 0 01-1.41 1zm-7.85-4.5h7.7l1.32 2.5H3.52zm-.15 4.5a1.51 1.51 0 01-1.41-1H6.1a1.51 1.51 0 01-1.41 1zM14.83 13.25h-.5v-5.5a.5.5 0 00-.5-.5.5.5 0 00-.5.5v5.5h-5.5a.5.5 0 100 1h7a.5.5 0 000-1z"
      />
      <path
        fill="currentColor"
        d="M5.62 7.71H1.17a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h4.45a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-.5 7H1.67v-6h3.45z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StoreOutlined.displayName = 'StoreOutlined';
export default StoreOutlined;
