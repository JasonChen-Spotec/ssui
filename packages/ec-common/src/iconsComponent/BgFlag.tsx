import * as React from 'react';
import { SVGProps } from 'react';
const SvgBgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect
      x={0.25}
      y={0.25}
      width={24.382}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="BGFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={18}
    >
      <rect
        x={0.25}
        y={0.25}
        width={24.382}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#BGFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 12h24.882V6H0v6Z" fill="#06A77C" />
      <path d="M0 18h24.882v-6H0v6Z" fill="#E32E19" />
    </g>
  </svg>
);
export default SvgBgFlag;
