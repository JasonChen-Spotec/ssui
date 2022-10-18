import * as React from 'react';
import { SVGProps } from 'react';
const SvgViFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect width={25.522} height={18} rx={2} fill="#fff" />
    <mask
      id="VIFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect width={25.522} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#VIFlag_svg__a)">
      <path fill="#EA403F" d="M0 0h25.522v18H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.762 11.106-3.215 2.263 1.186-3.718-3.172-2.32 3.947-.035L12.762 3.6l1.254 3.696 3.947.035-3.172 2.32 1.186 3.718-3.215-2.263Z"
        fill="#FFFE4E"
      />
    </g>
  </svg>
);
export default SvgViFlag;
