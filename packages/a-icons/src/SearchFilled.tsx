import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SearchFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.062 7.67A9.21 9.21 0 0112.539 2a9.22 9.22 0 11-5.39 16.66l-2.87 2.87a.75.75 0 01-1.06-1.06l2.79-2.79A9.21 9.21 0 014.062 7.67zm10.798.372A1.56 1.56 0 0016.31 9a1.55 1.55 0 001.55-1.55 1.56 1.56 0 10-3 .592z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchFilled.displayName = 'SearchFilled';
export default SearchFilled;
