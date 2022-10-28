import * as React from 'react';
import { SVGProps } from 'react';
const SvgThFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      x={0.75}
      y={0.25}
      width={24.754}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="THFlag_svg__a"
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
        width={24.754}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#THFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M.5 3.6h25.254V0H.5v3.6ZM.5 18h25.254v-3.6H.5V18Z" fill="#F12532" />
      <path d="M.5 12h25.254V6H.5v6Z" fill="#322B6C" />
    </g>
  </svg>
);
export default SvgThFlag;
