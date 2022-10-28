import * as React from 'react';
import { SVGProps } from 'react';
const SvgRoFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={25.254} height={18} rx={2} fill="#fff" />
    <mask
      id="ROFlag_svg__a"
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
    <g mask="url(#ROFlag_svg__a)">
      <path fill="#DE1D42" d="M12.025 0h13.228v18H12.025z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18h8.418V0H0v18Z"
        fill="#083780"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.418 18h8.418V0H8.418v18Z"
        fill="#FFD147"
      />
    </g>
  </svg>
);
export default SvgRoFlag;
