import * as React from 'react';
import { SVGProps } from 'react';
const SvgItFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
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
      id="ITFlag_svg__a"
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
    <g mask="url(#ITFlag_svg__a)">
      <path fill="#E43D4C" d="M16.588 0h8.294v18h-8.294z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18h8.294V0H0v18Z"
        fill="#1BB65D"
      />
    </g>
  </svg>
);
export default SvgItFlag;
