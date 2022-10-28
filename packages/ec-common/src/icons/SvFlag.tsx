import * as React from 'react';
import { SVGProps } from 'react';
const SvgSvFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect x={0.5} width={24.882} height={18} rx={2} fill="#fff" />
    <mask
      id="SVFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect x={0.5} width={24.882} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#SVFlag_svg__a)">
      <path fill="#157CBB" d="M.5 0h24.882v18H.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 10.8h7.11V18h3.554v-7.2h14.218V7.2H11.164V0H7.609v7.2H.5v3.6Z"
        fill="#FFD34D"
      />
    </g>
  </svg>
);
export default SvgSvFlag;
