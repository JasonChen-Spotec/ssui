import * as React from 'react';
import { SVGProps } from 'react';
const SvgEsFlag = (props: SVGProps<SVGSVGElement>) => (
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
      id="ESFlag_svg__a"
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
    <g mask="url(#ESFlag_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.8h25.254V0H0v4.8ZM0 18h25.254v-4.8H0V18Z"
        fill="#DD172C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.2h25.254V4.8H0v8.4Z"
        fill="#FFD133"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.613 8.4h1.203V9H6.613v-.6Z"
        fill="#FFEDB1"
      />
      <path
        d="M5.504 8.494a.333.333 0 0 1 .332-.36h1.557c.195 0 .348.166.332.36l-.14 1.68a.974.974 0 0 1-1.94 0l-.141-1.68Z"
        stroke="#A41517"
        strokeWidth={0.667}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.412 9h2.405v.6h-.601l-.601 1.2-.602-1.2h-.6V9Z"
        fill="#A41517"
      />
      <rect x={3.607} y={7.2} width={1.203} height={4.2} rx={0.601} fill="#A41517" />
      <rect x={8.418} y={7.2} width={1.203} height={4.2} rx={0.601} fill="#A41517" />
      <path
        d="M5.412 6.96c0-.53.43-.96.96-.96h.485c.53 0 .96.43.96.96a.24.24 0 0 1-.24.24H5.652a.24.24 0 0 1-.24-.24Z"
        fill="#A41517"
      />
    </g>
  </svg>
);
export default SvgEsFlag;
