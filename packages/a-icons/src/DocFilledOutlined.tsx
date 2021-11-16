import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function DocFilledOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
      />
      <path
        fill="currentColor"
        d="M10.64 3.72H5.36A1.3 1.3 0 004.05 5v6a1.3 1.3 0 001.31 1.29h5.28A1.3 1.3 0 0012 11V5a1.3 1.3 0 00-1.31-1.29zm-5.28 8a.71.71 0 01-.71-.7V5a.71.71 0 01.71-.7h5.28a.71.71 0 01.71.7v6a.71.71 0 01-.71.7zm2.76-6H5.85a.3.3 0 00-.3.3.29.29 0 00.3.3h2.27A.3.3 0 008.43 6a.31.31 0 00-.31-.3zm2 2H5.85a.3.3 0 00-.3.3.29.29 0 00.3.3h4.3a.3.3 0 00.31-.3.31.31 0 00-.31-.3zm0 2H5.85a.29.29 0 00-.3.3.3.3 0 00.3.3h4.3a.31.31 0 00.31-.3.3.3 0 00-.31-.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocFilledOutlined.displayName = 'DocFilledOutlined';
export default DocFilledOutlined;
