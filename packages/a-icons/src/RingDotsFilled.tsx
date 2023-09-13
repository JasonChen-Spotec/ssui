import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RingDotsFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100%" height="100%" rx={12} fill="inherit" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.226 7.285a.6.6 0 01.836-.15 7.072 7.072 0 012.999 5.04.6.6 0 11-1.193.13 5.872 5.872 0 00-2.491-4.185.6.6 0 01-.15-.835zM8.808 7.319a.6.6 0 01-.144.836 5.85 5.85 0 00-2.45 4.184.6.6 0 01-1.193-.123 7.051 7.051 0 012.95-5.04.6.6 0 01.837.143zM8.608 18.433a.6.6 0 01.807-.263c.787.4 1.684.625 2.63.625.915 0 1.77-.204 2.536-.577a.6.6 0 01.525 1.08 6.957 6.957 0 01-3.06.697 6.993 6.993 0 01-3.175-.755.6.6 0 01-.263-.807zM12.044 5.205a1.485 1.485 0 100 2.97 1.485 1.485 0 000-2.97zM9.36 6.69a2.685 2.685 0 115.37 0 2.685 2.685 0 01-5.37 0zM6.622 14.37a1.485 1.485 0 100 2.97 1.485 1.485 0 000-2.97zm-2.684 1.485a2.685 2.685 0 115.37 0 2.685 2.685 0 01-5.37 0zM17.378 14.37a1.485 1.485 0 100 2.97 1.485 1.485 0 000-2.97zm-2.685 1.485a2.685 2.685 0 115.37 0 2.685 2.685 0 01-5.37 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RingDotsFilled.displayName = 'RingDotsFilled';
export default RingDotsFilled;
