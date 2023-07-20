import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CustomerServiceOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.485 15.476a9.004 9.004 0 01-7.172 5.924 1.247 1.247 0 01-1.063.6h-1a1.25 1.25 0 010-2.5h1a1.242 1.242 0 01.918.408 7.507 7.507 0 005.722-4.446 1.75 1.75 0 01-1.39-1.712v-1.5a1.75 1.75 0 011.75-1.75h.224a7.49 7.49 0 00-14.95 0h.226a1.75 1.75 0 011.75 1.75v1.5a1.75 1.75 0 01-1.75 1.75h-1A1.75 1.75 0 012 13.75v-1.5a1.747 1.747 0 011.017-1.585 8.989 8.989 0 0117.966 0A1.747 1.747 0 0122 12.25v1.5a1.744 1.744 0 01-1.515 1.726zM3.5 12.75v.5a.75.75 0 101.5 0v-.5a.75.75 0 10-1.5 0zm17 0a.75.75 0 10-1.5 0v.5a.75.75 0 101.5 0v-.5z"
        fill="currentColor"
      />
      <path
        d="M12 16.494a3.774 3.774 0 002.807-1.265.73.73 0 00-.055-1.043.758.758 0 00-1.06.055 2.233 2.233 0 01-3.384 0 .758.758 0 00-1.234.175.73.73 0 00.12.813A3.772 3.772 0 0012 16.494z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';
export default CustomerServiceOutlined;
