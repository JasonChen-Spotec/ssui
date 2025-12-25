import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CategoryFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 2a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zM15 15a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2v-3a2 2 0 00-2-2h-5zM13 4a2 2 0 012-2h5a2 2 0 012 2v7a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zM4 11a2 2 0 00-2 2v7a2 2 0 002 2h5a2 2 0 002-2v-7a2 2 0 00-2-2H4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CategoryFilled.displayName = 'CategoryFilled';
export default CategoryFilled;
