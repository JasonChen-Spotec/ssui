import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleAddFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.65 22H5.36a3.38 3.38 0 01-3.17-4.15l.23-1.14A3.29 3.29 0 015.59 14h8.82a3.3 3.3 0 013.18 2.71l.23 1.14A3.39 3.39 0 0114.65 22zM10.5 12h-1a4 4 0 01-4-4V5.36A3.36 3.36 0 018.86 2h2.28a3.35 3.35 0 013.36 3.36V8a4 4 0 01-4 4zM21 6.25h-1.37V4.88a.75.75 0 00-1.5 0v1.37h-1.36a.75.75 0 000 1.5h1.36v1.37a.75.75 0 001.5 0V7.75H21a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleAddFilled.displayName = 'PeopleAddFilled';
export default PeopleAddFilled;
