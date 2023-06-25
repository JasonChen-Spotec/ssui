import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DisplayerOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 4.42h-13a3.15 3.15 0 00-3 3.27v5.46a3.15 3.15 0 003 3.27h3.74a11.995 11.995 0 01-.46 1.88l-.34.94a.86.86 0 00.71 1.18h5.7a.86.86 0 00.71-1.18l-.34-.94a12 12 0 01-.46-1.88h3.74a3.15 3.15 0 003-3.27V7.69a3.15 3.15 0 00-3-3.27zm-8.35 14.5v-.12c.217-.612.384-1.241.5-1.88h2.62c.12.638.288 1.266.5 1.88v.12h-3.62zm8.35-4a1.66 1.66 0 001.5-1.77V7.69a1.66 1.66 0 00-1.5-1.77h-13A1.66 1.66 0 004 7.69v5.46a1.66 1.66 0 001.5 1.77h13z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.028 6.85a.65.65 0 01.523.305l2.495 3.992.472.708 1.953-2.733a.65.65 0 01.989-.082l1.81 1.81H21v1.3h-4a.65.65 0 01-.46-.19l-1.457-1.458-2.054 2.875a.65.65 0 01-1.07-.017l-1-1.5-.01-.016L8.95 8.648 6.52 11.89a.65.65 0 01-.52.26H3.5v-1.3h2.175L8.48 7.11a.65.65 0 01.548-.26z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DisplayerOutlined.displayName = 'DisplayerOutlined';
export default DisplayerOutlined;
