import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function SearchOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.062 7.67A9.21 9.21 0 0112.539 2a9.21 9.21 0 11-5.38 16.65l-2.88 2.88a.75.75 0 01-1.06-1.06l2.79-2.79A9.21 9.21 0 014.062 7.67zm1.337 6.5a7.72 7.72 0 007.14 4.76v-.04a7.72 7.72 0 007.71-7.67A7.72 7.72 0 105.4 14.17z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchOutlined.displayName = 'SearchOutlined';
export default SearchOutlined;
