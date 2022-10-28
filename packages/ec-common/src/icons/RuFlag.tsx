import * as React from 'react';
import { SVGProps } from 'react';
const SvgRuFlag = (props: SVGProps<SVGSVGElement>) => (
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
      width={25.022}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="RUFlag_svg__a"
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
        width={25.022}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#RUFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 12h25.522V6H0v6Z" fill="#0C47B7" />
      <path d="M0 18h25.522v-6H0v6Z" fill="#E53B35" />
    </g>
  </svg>
);
export default SvgRuFlag;
