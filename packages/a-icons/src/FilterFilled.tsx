import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FilterFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 7.39h6a1 1 0 100-2H4a1 1 0 000 2zM4 13.28h2a2.23 2.23 0 100-2H4a1 1 0 100 2zM13.72 8.46a2.21 2.21 0 001.89-1.07H20a1 1 0 100-2h-4.22a2.23 2.23 0 10-2.06 3.07zM10 17.49H4a1 1 0 100 2h6a1 1 0 000-2zM20 17.49h-3.94a2.24 2.24 0 10-.16 2H20a1 1 0 100-2zM20 11.28h-8a1 1 0 100 2h8a1 1 0 100-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterFilled.displayName = 'FilterFilled';
export default FilterFilled;
