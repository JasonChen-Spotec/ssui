import * as React from 'react';
import { SVGProps } from 'react';
const SvgCnFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect x={0.5} width={25.254} height={18} rx={2} fill="#fff" />
    <mask
      id="CNFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect x={0.5} width={25.254} height={18} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#CNFlag_svg__a)">
      <path fill="#F1361D" d="M.5 0h25.254v18H.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.585 2.79.873.15.655.595.15-.872.596-.654-.873-.148-.655-.596-.15.872-.596.654Zm2.34 3.049.756-.46.886.02-.46-.755.02-.884-.757.46-.886-.02.461.755-.02.884Zm-1.027 4.934-.74.486-.011-.884-.487-.739.886-.01.74-.486.011.884.487.74-.886.01Zm.643-2.285.88-.097.795.392-.098-.879.393-.792-.88.097-.795-.392.098.879-.393.792ZM6.513 7.404l-2.12 1.508.782-2.478-2.093-1.547 2.604-.023.827-2.464.827 2.464 2.604.023-2.093 1.547.782 2.478-2.12-1.508Z"
        fill="#FFDC42"
      />
    </g>
  </svg>
);
export default SvgCnFlag;
