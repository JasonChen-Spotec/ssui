import * as React from 'react';
import { SVGProps } from 'react';
const SvgFrFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={27} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect
      x={0.75}
      y={0.25}
      width={25.022}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="FRFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={27}
      height={18}
    >
      <rect
        x={0.75}
        y={0.25}
        width={25.022}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#FRFlag_svg__a)">
      <path fill="#F44653" d="M17.515 0h8.507v18h-8.507z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M.5 18h8.507V0H.5v18Z" fill="#1035BB" />
    </g>
  </svg>
);
export default SvgFrFlag;
