import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FilterOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.77 5.71h-6a.75.75 0 100 1.5h6a.75.75 0 000-1.5z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.68 13.1H3.77a.75.75 0 010-1.5h1.91a2.23 2.23 0 110 1.5zm2.09-.02a.73.73 0 100-1.46.73.73 0 000 1.46zM15.49 7.17a2.23 2.23 0 01-2 1.36v-.07a2.23 2.23 0 112.15-2.79.5.5 0 01.13 0h3.95a.75.75 0 010 1.5h-4a.93.93 0 01-.23 0zm-1.266-.943a.73.73 0 00-.734-.697v.04a.73.73 0 00-.72.78.73.73 0 001.454-.123z"
        fill="currentColor"
      />
      <path
        d="M9.77 17.81h-6a.77.77 0 100 1.54h6a.75.75 0 000-1.5v-.04z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9 17.81h3.87v.04a.75.75 0 010 1.5h-4a2.22 2.22 0 11.13-1.54zm-2.812.877a.73.73 0 101.343-.573.73.73 0 00-1.342.573z"
        fill="currentColor"
      />
      <path d="M19.77 11.6h-8a.75.75 0 000 1.5h8a.75.75 0 000-1.5z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterOutlined.displayName = 'FilterOutlined';
export default FilterOutlined;
