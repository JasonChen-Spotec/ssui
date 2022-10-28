import * as React from 'react';
import { SVGProps } from 'react';
const SvgFiFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      x={0.25}
      y={0.25}
      width={24.754}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="FIFlag_svg__a"
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
        x={0.25}
        y={0.25}
        width={24.754}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#FIFlag_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.202 10.8h8.418v8.4h3.607v-8.4h15.634V7.2H10.823v-8.4H7.216v8.4h-8.418v3.6Z"
        fill="#0848A6"
      />
    </g>
  </svg>
);
export default SvgFiFlag;
