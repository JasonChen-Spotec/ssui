import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ListFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={1.62} y={3} width={8} height={8} rx={2.25} fill="currentColor" />
      <rect x={1.62} y={13} width={8} height={8} rx={2.25} fill="currentColor" />
      <path
        d="M13.62 6.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM13.62 9.75h8a.75.75 0 000-1.5h-8a.75.75 0 000 1.5zM13.62 16.75h5a.75.75 0 000-1.5h-5a.75.75 0 000 1.5zM21.62 18.25h-8a.75.75 0 000 1.5h8a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListFilled.displayName = 'ListFilled';
export default ListFilled;
