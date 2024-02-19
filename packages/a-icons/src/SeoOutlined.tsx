import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SeoOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3.563a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 9.188a.75.75 0 01.75-.75h5.625a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 14.813a.75.75 0 01.75-.75h5.625a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 20.438a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM15.938 8.25a3.188 3.188 0 100 6.375 3.188 3.188 0 000-6.375zm-4.688 3.188a4.688 4.688 0 119.375 0 4.688 4.688 0 01-9.375 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.47 17.03l-2.25-2.25 1.06-1.06 2.25 2.25a.75.75 0 01-1.06 1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SeoOutlined.displayName = 'SeoOutlined';
export default SeoOutlined;
