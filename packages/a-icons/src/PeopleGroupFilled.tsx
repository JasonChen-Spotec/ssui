import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleGroupFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.92 12H9a4 4 0 004-4V6.43a3.37 3.37 0 00-3.4-3.36H8.28a3.37 3.37 0 00-3.36 3.36V8a4 4 0 004 4zM17.5 11.25a3 3 0 003-3V7.1A2.52 2.52 0 0018 4.58h-1a2.52 2.52 0 00-2.5 2.52v1.15a3 3 0 003 3zM22.39 15.42l-.16-.79A2.27 2.27 0 0020 12.75h-6.1a2.22 2.22 0 00-1.85 1H5a2.76 2.76 0 00-1.9.76 3 3 0 00-.89 1.51v.4l-.21.8a3 3 0 002.8 3.71h8.28c.213 0 .424-.028.63-.08h.13c.15-.043.297-.096.44-.16l.16-.09c.12-.067.233-.144.34-.23l.16-.13c.098-.092.192-.188.28-.29 0-.05.09-.09.13-.15a2.343 2.343 0 00.4-.75c.04-.091.073-.185.1-.28 0-.1.05-.2.07-.3v-.15h4.28a2.33 2.33 0 002.19-2.9z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleGroupFilled.displayName = 'PeopleGroupFilled';
export default PeopleGroupFilled;
