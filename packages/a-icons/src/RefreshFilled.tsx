import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RefreshFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-18c-1.766 0-3.38.654-4.61 1.733-.247.215-.188.602.098.76l3.77 2.094A.5.5 0 0012 9.15V7a5 5 0 11-4.587 3.007l-1.755-.975A7 7 0 1012 5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshFilled.displayName = 'RefreshFilled';
export default RefreshFilled;
