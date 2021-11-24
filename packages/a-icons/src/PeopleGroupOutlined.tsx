import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleGroupOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.74 14.74l.14.69a2 2 0 01-1.88 2.5h-3.81a3 3 0 01-2.9 3H5a3 3 0 01-2.86-3.73l.21-1a2.92 2.92 0 012.83-2.41h7.94a1.87 1.87 0 011.43-.67h5.29a2 2 0 011.9 1.62zm-1.76 1.68a.41.41 0 00.31-.16.63.63 0 00.18-.5l-.14-.69a.48.48 0 00-.43-.42h-5.29a.36.36 0 00-.29.15 1.51 1.51 0 01-1.14.52H5.24a1.41 1.41 0 00-1.36 1.2l-.21 1a1.7 1.7 0 00.33 1.4 1.35 1.35 0 001 .51h8.26a1.5 1.5 0 001.4-1.54 1.5 1.5 0 011.5-1.47h3.82zM13.1 8a4 4 0 01-8 0V6.43a3.36 3.36 0 013.36-3.36h1.31a3.36 3.36 0 013.33 3.36V8zM8.46 4.57A1.86 1.86 0 006.6 6.43L6.63 8a2.52 2.52 0 005 0V6.43a1.86 1.86 0 00-1.86-1.86H8.46zM20.68 8.25a3 3 0 11-6 0V7.1a2.52 2.52 0 012.48-2.52h1a2.52 2.52 0 012.52 2.52v1.15zm-3.5-2.15a1 1 0 00-1 1v1.15a1.5 1.5 0 003 0V7.1a1 1 0 00-1-1h-1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleGroupOutlined.displayName = 'PeopleGroupOutlined';
export default PeopleGroupOutlined;
