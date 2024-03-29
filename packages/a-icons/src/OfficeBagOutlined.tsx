import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OfficeBagOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 6h-4V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v4a3 3 0 001 2.22V19a3 3 0 003 3h12a3 3 0 003-3v-5.78A3 3 0 0022 11V7a1 1 0 00-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9V5zm10 14a1 1 0 01-1 1H6a1 1 0 01-1-1v-5h2v1a1 1 0 102 0v-1h6v1a1 1 0 002 0v-1h2v5zm1-8a1 1 0 01-1 1h-2v-1a1 1 0 00-2 0v1H9v-1a1 1 0 10-2 0v1H5a1 1 0 01-1-1V8h16v3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OfficeBagOutlined.displayName = 'OfficeBagOutlined';
export default OfficeBagOutlined;
