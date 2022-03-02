import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleCloseFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.78 11.17h-.996a3.988 3.988 0 01-3.988-3.988V4.55a3.34 3.34 0 013.35-3.35h2.273a3.34 3.34 0 013.35 3.35v2.632a3.988 3.988 0 01-3.988 3.987z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.957 12.831h-7.07a3.28 3.28 0 00-3.161 2.702l-.24 1.136a3.38 3.38 0 003.17 4.137h5.761a6.618 6.618 0 01-.71-2.99 6.63 6.63 0 012.25-4.985zM22.338 17.816a4.985 4.985 0 11-9.969 0 4.985 4.985 0 019.97 0zm-4.984.706l-2.139 2.14-.707-.708 2.139-2.139-2.139-2.139.707-.707 2.139 2.14 2.139-2.14.707.708-2.14 2.138 2.14 2.139-.707.707-2.14-2.139z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleCloseFilled.displayName = 'PeopleCloseFilled';
export default PeopleCloseFilled;
