import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ListCaptionFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.62 11H6a1 1 0 110-2h9.62a1 1 0 110 2zM6 14h12.82a1 1 0 110 2H6a1 1 0 110-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListCaptionFilled.displayName = 'ListCaptionFilled';
export default ListCaptionFilled;
