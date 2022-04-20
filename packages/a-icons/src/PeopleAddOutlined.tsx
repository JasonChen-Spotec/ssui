import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleAddOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.29 14a3.3 3.3 0 013.18 2.71l.23 1.14A3.39 3.39 0 0114.53 22H5.24a3.38 3.38 0 01-3.17-4.15l.23-1.14A3.29 3.29 0 015.47 14h8.82zm.24 6.5a1.65 1.65 0 001.29-.64 2 2 0 00.41-1.72L16 17a1.81 1.81 0 00-1.71-1.51H5.47A1.8 1.8 0 003.77 17l-.18 1.15A2 2 0 004 19.86c.298.386.752.62 1.24.64h9.29zM10.38 12h-1a4 4 0 01-4-4V5.36A3.36 3.36 0 018.74 2H11a3.35 3.35 0 013.38 3.36V8a4 4 0 01-4 4zM8.74 3.5a1.86 1.86 0 00-1.86 1.86V8a2.51 2.51 0 002.48 2.5h1a2.5 2.5 0 002.5-2.5V5.36A1.86 1.86 0 0011 3.5H8.74z"
        fill="currentColor"
      />
      <path
        d="M21.38 6.25H20V4.88a.75.75 0 00-1.5 0v1.37h-1.36a.75.75 0 000 1.5h1.37v1.37a.75.75 0 001.5 0V7.75h1.37a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleAddOutlined.displayName = 'PeopleAddOutlined';
export default PeopleAddOutlined;
