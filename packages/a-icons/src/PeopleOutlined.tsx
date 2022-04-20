import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.58 16.71l.24 1.14A3.39 3.39 0 0116.64 22H7.36a3.39 3.39 0 01-3.18-4.15l.24-1.14A3.29 3.29 0 017.59 14h8.82a3.29 3.29 0 013.17 2.71zm-2.94 3.78a1.68 1.68 0 001.3-.64v.01a2.08 2.08 0 00.41-1.72L18.11 17a1.79 1.79 0 00-1.7-1.51H7.59A1.79 1.79 0 005.89 17l-.24 1.14a2.08 2.08 0 00.41 1.71 1.68 1.68 0 001.3.64h9.28zM12.5 12h-1a4 4 0 01-4-4V5.36A3.35 3.35 0 0110.86 2h2.28a3.35 3.35 0 013.36 3.36V8a4 4 0 01-4 4zm-1.64-8.5A1.86 1.86 0 009 5.36V8a2.5 2.5 0 002.5 2.5h1A2.5 2.5 0 0015 8V5.36a1.86 1.86 0 00-1.86-1.86h-2.28z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleOutlined.displayName = 'PeopleOutlined';
export default PeopleOutlined;
