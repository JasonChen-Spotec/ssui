import * as React from 'react';
import { SVGProps } from 'react';
const SvgPtFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect width={25.254} height={18} rx={2} fill="#fff" />
    <mask
      id="PTFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect width={25.254} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#PTFlag_svg__a)">
      <path fill="#FF2936" d="M0 0h25.254v18H0z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 18h9.62V0H0v18Z" fill="#128415" />
      <path
        d="M9.62 12.067A3.07 3.07 0 0 0 12.694 9 3.07 3.07 0 0 0 9.62 5.933 3.07 3.07 0 0 0 6.549 9a3.07 3.07 0 0 0 3.072 3.067Z"
        stroke="#FAF94F"
        strokeWidth={1.333}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.418 7.533c0-.184.15-.333.333-.333h1.739c.184 0 .333.15.333.333v2.064a1.203 1.203 0 1 1-2.405 0V7.533Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.62 9.6c.333 0 .602-.869.602-1.2a.6.6 0 0 0-1.202 0c0 .331.269 1.2.6 1.2Z"
        fill="#1D50B5"
      />
    </g>
  </svg>
);
export default SvgPtFlag;
