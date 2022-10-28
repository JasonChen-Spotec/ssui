import * as React from 'react';
import { SVGProps } from 'react';
const SvgNoFlag = (props: SVGProps<SVGSVGElement>) => (
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
      id="NOFlag_svg__a"
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
    <g mask="url(#NOFlag_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M7.11 0H0v7.2h7.11V0Zm3.554 0v7.2h14.218V0H10.664Zm14.218 10.8H10.664V18h14.218v-7.2ZM7.11 18v-7.2H0V18h7.11Z"
        fill="#F14247"
      />
      <path
        d="M0 9.6h8.294V18H9.48V9.6h15.403V8.4H9.48V0H8.294v8.4H0v1.2Z"
        fill="#0A3A85"
      />
    </g>
  </svg>
);
export default SvgNoFlag;
