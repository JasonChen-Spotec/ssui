import * as React from 'react';
import { SVGProps } from 'react';
const SvgRuFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={25} height={18} rx={2} fill="#fff" />
    <mask
      id="RUFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={18}
    >
      <rect width={25} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#RUFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 12h25V6H0v6Z" fill="#118357" />
      <path d="M0 18h25v-6H0v6Z" fill="#D8343D" />
      <path d="M0 6h25V0H0v6Z" fill="#FEC34B" />
    </g>
  </svg>
);
export default SvgRuFlag;
