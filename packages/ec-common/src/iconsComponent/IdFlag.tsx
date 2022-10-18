import * as React from 'react';
import { SVGProps } from 'react';
const SvgIdFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect
      x={0.75}
      y={0.25}
      width={24.382}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="IDFlag_svg__a"
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
        width={24.382}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#IDFlag_svg__a)">
      <path fillRule="evenodd" clipRule="evenodd" d="M.5 9.6h24.882V0H.5v9.6Z" fill="#E12237" />
    </g>
  </svg>
);
export default SvgIdFlag;
