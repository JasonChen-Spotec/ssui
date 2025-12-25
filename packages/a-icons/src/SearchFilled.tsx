import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SearchFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a9 9 0 105.36 16.231l3.682 3.683 1.414-1.414-3.632-3.632A9 9 0 0011 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchFilled.displayName = 'SearchFilled';
export default SearchFilled;
