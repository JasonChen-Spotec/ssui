import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BellOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10v3.18A3 3 0 0120 16v2a1 1 0 01-1 1h-3.14a4 4 0 01-7.72 0H5a1 1 0 01-1-1v-2a3 3 0 012-2.82V10a6 6 0 015-5.91V3a1 1 0 012 0v1.09A6 6 0 0118 10zM9.172 7.172A4 4 0 008 10v5H7a1 1 0 00-1 1v1h12v-1a1 1 0 00-1-1h-1v-5a4 4 0 00-6.828-2.828zm1.835 12.557A2 2 0 0012 20a2 2 0 001.72-1h-3.44a2 2 0 00.727.73z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BellOutline.displayName = 'BellOutline';
export default BellOutline;
