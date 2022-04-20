import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CloseSquareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm9.48 13.48a.75.75 0 000-1.06L13.06 12l2.42-2.42a.75.75 0 00-1.06-1.06L12 10.94 9.58 8.52a.75.75 0 00-1.06 1.06L10.94 12l-2.42 2.42a.75.75 0 000 1.06.79.79 0 00.53.22.77.77 0 00.53-.22L12 13.06l2.42 2.42a.77.77 0 00.53.22.79.79 0 00.53-.22z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseSquareFilled.displayName = 'CloseSquareFilled';
export default CloseSquareFilled;
