import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CirclePointsTriangleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        clipPath="url(#circle-points-triangle-filled_svg__clip0_11158_455)"
        fill="currentColor"
      >
        <path d="M5.1 21.33a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zM12.1 7.46a2.23 2.23 0 100-4.46 2.23 2.23 0 000 4.46z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.1 13.23c0-.62.15-1.2.4-1.72-.34.17-.68.36-.99.58-1.21.87-2.13 2.2-2.19 4.16 1.52.11 2.73 1.35 2.77 2.89.5.4 1.07.66 1.73.7.5.03 1.09-.08 1.76-.34-.36-.25-.7-.51-1-.82-1.53-1.52-2.48-2.96-2.48-5.46v.01zM12.35 9.21c1.61.1 2.95 1.19 3.48 2.64.04-.17.08-.35.1-.52.17-1.27-.2-2.69-1.69-4.01-.55.56-1.31.91-2.15.91-.97 0-1.82-.47-2.37-1.18-.65.14-1.39.45-1.92 1.01-.49.51-.85 1.29-.7 2.5 1.67-1.02 3.65-1.42 5.24-1.35h.01z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.15 13.23c0 1.63 1.32 2.95 2.95 2.95.79 0 1.5-.31 2.02-.81.02-.02.05-.04.07-.07a2.949 2.949 0 10-5.04-2.08v.01z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.94 13.95c-.11-.75-.51-1.65-1.5-2.58 0 .05 0 .11-.01.16-.23 1.69-1.19 3.22-2.32 4.3-.73.85-1.8 1.39-3.01 1.39-.33 0-.65-.05-.97-.13.16.17.32.35.5.52 1.06 1.06 2.53 1.74 4.48 1.48.06-1.33.98-2.43 2.23-2.76.37-.47.75-1.35.6-2.39v.01z"
        />
        <path d="M19.1 21.48a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
      </g>
      <defs>
        <clipPath id="circle-points-triangle-filled_svg__clip0_11158_455">
          <path fill="#fff" transform="translate(3 3)" d="M0 0h18.35v18.48H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirclePointsTriangleFilled.displayName = 'CirclePointsTriangleFilled';
export default CirclePointsTriangleFilled;
