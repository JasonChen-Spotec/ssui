import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function BOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M5.94.56v1.23h-1.5a1 1 0 00-1 1v10.36a1 1 0 001 .95h1.5v1.24a.61.61 0 00.61.61.61.61 0 00.62-.61V14.1h1.24v1.24A.61.61 0 009 16a.61.61 0 00.61-.61V14.1h.86a3.39 3.39 0 001.68-6.36A3.39 3.39 0 009.94 1.8h-.3V.56A.61.61 0 009 0a.6.6 0 00-.61.61v1.18H7.18V.56A.61.61 0 006.56 0a.61.61 0 00-.62.56zM5.17 3h4.72a2.18 2.18 0 012.2 2.1 2.15 2.15 0 01-2.16 2.24H4.71V3.47A.46.46 0 015.17 3zm-.46 5.57h5.81a2.17 2.17 0 012.19 2.1 2.14 2.14 0 01-2.16 2.21H5.17a.45.45 0 01-.46-.45z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BOutlined.displayName = 'BOutlined';
export default BOutlined;
