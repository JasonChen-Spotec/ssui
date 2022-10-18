import * as React from 'react';
import { SVGProps } from 'react';
const SvgJaFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
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
      id="JAFlag_svg__a"
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
    <g mask="url(#JAFlag_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.627 14.4A5.406 5.406 0 0 0 18.04 9c0-2.982-2.423-5.4-5.412-5.4A5.406 5.406 0 0 0 7.216 9c0 2.982 2.423 5.4 5.411 5.4Z"
        fill="url(#JAFlag_svg__b)"
      />
    </g>
    <defs>
      <linearGradient
        id="JAFlag_svg__b"
        x1={7.216}
        y1={3.6}
        x2={7.216}
        y2={14.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D81441" />
        <stop offset={1} stopColor="#BB0831" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgJaFlag;
