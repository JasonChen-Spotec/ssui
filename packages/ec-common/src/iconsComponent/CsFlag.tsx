import * as React from 'react';
import { SVGProps } from 'react';
const SvgCsFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect
      x={0.691}
      y={0.25}
      width={24.754}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="CSFlag_svg__a"
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
        x={0.691}
        y={0.25}
        width={24.754}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#CSFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M.441 18h25.254V9H.441v9Z" fill="#E8252A" />
      <path d="m.441 0 12.026 9L.441 18V0Z" fill="#17579E" />
    </g>
  </svg>
);
export default SvgCsFlag;
