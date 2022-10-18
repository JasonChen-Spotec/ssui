import * as React from 'react';
import { SVGProps } from 'react';
const SvgDeFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <rect width={25.254} height={18} rx={2} fill="#fff" />
    <mask
      id="DEFlag_svg__a"
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
    <g mask="url(#DEFlag_svg__a)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6h25.254V0H0v6Z" fill="#262626" />
      <g filter="url(#DEFlag_svg__b)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 12h25.254V6H0v6Z" fill="#F01515" />
      </g>
      <g filter="url(#DEFlag_svg__c)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 18h25.254v-6H0v6Z" fill="#FFD521" />
      </g>
    </g>
    <defs>
      <filter
        id="DEFlag_svg__b"
        x={0}
        y={6}
        width={25.254}
        height={6}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9683_12341" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_9683_12341" result="shape" />
      </filter>
      <filter
        id="DEFlag_svg__c"
        x={0}
        y={12}
        width={25.254}
        height={6}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9683_12341" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_9683_12341" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgDeFlag;
