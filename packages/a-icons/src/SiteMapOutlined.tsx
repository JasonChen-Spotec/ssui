import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SiteMapOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22 15h-2v-3a1 1 0 00-1-1h-6V9h2a1 1 0 001-1V2a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 001 1h2v2H5a1 1 0 00-1 1v3H2a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H6v-2h12v2h-2a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zM7 17v4H3v-4h4zm3-10V3h4v4h-4zm11 14h-4v-4h4v4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SiteMapOutlined.displayName = 'SiteMapOutlined';
export default SiteMapOutlined;
