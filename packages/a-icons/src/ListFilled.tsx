import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ListFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4zM2.008 15.001a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5z"
        fill="currentColor"
      />
      <path
        d="M13 3.5h6v2h-6v-2zM22 7.5h-9v2h9v-2zM13.008 14.501h6v2h-6v-2zM13.008 18.501h9v2h-9v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListFilled.displayName = 'ListFilled';
export default ListFilled;
