import * as React from 'react';
import { SVGProps } from 'react';
const SvgNlFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect
      x={0.75}
      y={0.25}
      width={24.647}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="NLFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect
        x={0.75}
        y={0.25}
        width={24.647}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#NLFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M.5 6h25.147V0H.5v6Z" fill="#CA2B39" />
      <path d="M.5 18h25.147v-6H.5v6Z" fill="#2C56A2" />
    </g>
  </svg>
);
export default SvgNlFlag;
