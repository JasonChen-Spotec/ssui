import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleErrorFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.919 11.193h-.97a3.877 3.877 0 01-3.876-3.877v-2.56A3.247 3.247 0 019.329 1.5h2.21a3.247 3.247 0 013.257 3.257v2.559a3.877 3.877 0 01-3.877 3.877z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.04 12.81H6.165a3.189 3.189 0 00-3.073 2.626l-.232 1.105a3.286 3.286 0 003.082 4.023h5.6a6.435 6.435 0 01-.69-2.908c0-1.93.846-3.662 2.188-4.846z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.309 22.502a4.846 4.846 0 100-9.692 4.846 4.846 0 000 9.692zm2.491-3.035l-.833.833-1.667-1.667-1.667 1.667-.833-.833 1.667-1.667-1.667-1.667.833-.833 1.667 1.667 1.667-1.667.833.833-1.667 1.667 1.667 1.667z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleErrorFilled.displayName = 'PeopleErrorFilled';
export default PeopleErrorFilled;
