import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ComputerCheckOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 4.42h-13a3.15 3.15 0 00-3 3.27v5.46a3.15 3.15 0 003 3.27h3.74a11.995 11.995 0 01-.46 1.88l-.34.94a.86.86 0 00.71 1.18h5.7a.86.86 0 00.71-1.18l-.34-.94a12 12 0 01-.46-1.88h3.74a3.15 3.15 0 003-3.27V7.69a3.15 3.15 0 00-3-3.27zm-8.35 14.5v-.12c.217-.612.384-1.241.5-1.88h2.62c.12.638.288 1.266.5 1.88v.12h-3.62zm8.35-4a1.66 1.66 0 001.5-1.77V7.69a1.66 1.66 0 00-1.5-1.77h-13A1.66 1.66 0 004 7.69v5.46a1.66 1.66 0 001.5 1.77h13z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.254 9.529a.78.78 0 011.103 0l1.896 1.896 3.5-3.5a.78.78 0 111.103 1.103l-4.051 4.051a.78.78 0 01-1.103 0l-2.448-2.447a.78.78 0 010-1.103z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ComputerCheckOutlined.displayName = 'ComputerCheckOutlined';
export default ComputerCheckOutlined;
