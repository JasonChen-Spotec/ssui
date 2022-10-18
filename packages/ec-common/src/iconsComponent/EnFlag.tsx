import * as React from 'react';
import { SVGProps } from 'react';
const SvgEnFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect width={24.882} height={18} rx={2} fill="#fff" />
    <mask
      id="ENFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={18}
    >
      <rect width={24.882} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#ENFlag_svg__a)">
      <path fill="#0A17A7" d="M0 0h24.882v18H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.14-1.725 9.48 5.53v-6.73h5.924v6.73l10.619-7.254 1.325 1.99L18.952 6h5.93v6h-5.93l8.395 5.735-1.325 1.99-10.619-7.254V19.2H9.48V12.47L-1.14 19.725l-1.325-1.99L5.931 12H0V6h5.93L-2.464.265l1.325-1.99Z"
        fill="#fff"
      />
      <path
        d="M16.59 5.699 27.845-1.8M17.785 12.328l10.09 6.887M7.114 5.68-3.41-1.505M8.256 12.244-3.41 20.08"
        stroke="#DB1F35"
        strokeWidth={0.667}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.8h10.664V18h3.555v-7.2h10.663V7.2H14.218V0h-3.554v7.2H0v3.6Z"
        fill="#E6273E"
      />
    </g>
  </svg>
);
export default SvgEnFlag;
