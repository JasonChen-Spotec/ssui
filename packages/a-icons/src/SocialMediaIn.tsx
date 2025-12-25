import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SocialMediaIn(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#social-media-in_svg__clip0_4158_2943)">
        <circle cx={12} cy={12} r={12} fill="#000" />
        <path
          d="M8.724 17.04V9.59H6.152v7.45h2.572zM7.438 8.574c.897 0 1.456-.572 1.456-1.287C8.877 6.556 8.335 6 7.455 6S6 6.556 6 7.287c0 .715.558 1.287 1.422 1.287h.016zm2.71 8.466h2.572v-4.16c0-.222.017-.445.085-.604.186-.445.609-.905 1.32-.905.93 0 1.303.683 1.303 1.684v3.985H18v-4.271c0-2.288-1.269-3.353-2.961-3.353-1.388 0-1.997.747-2.336 1.255h.017v-1.08h-2.572c.034.699 0 7.449 0 7.449z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="social-media-in_svg__clip0_4158_2943">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SocialMediaIn.displayName = 'SocialMediaIn';
export default SocialMediaIn;
