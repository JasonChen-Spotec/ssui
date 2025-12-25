import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowDropDownFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.469 17.414a.6.6 0 01-.937 0L4.78 8.974A.6.6 0 015.25 8h13.503a.6.6 0 01.468.975l-6.751 8.44z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowDropDownFilled.displayName = 'ArrowDropDownFilled';
export default ArrowDropDownFilled;
