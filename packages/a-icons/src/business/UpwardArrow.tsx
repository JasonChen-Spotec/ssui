import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function UpwardArrow(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      id="upward-arrow_svg__\u56FE\u5C42_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 71.9 72.2"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.upward-arrow_svg__st4{fill:#285a83}.upward-arrow_svg__st5{fill:#ef6f53}'}</style>
      <defs>
        <path id="upward-arrow_svg__SVGID_1_" d="M-931.6-750.8h1920v1578h-1920z" />
      </defs>
      <clipPath id="upward-arrow_svg__SVGID_2_">
        <use xlinkHref="#upward-arrow_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <defs>
        <path id="upward-arrow_svg__SVGID_3_" d="M-933.5-739.7h1920v1578h-1920z" />
      </defs>
      <clipPath id="upward-arrow_svg__SVGID_4_">
        <use xlinkHref="#upward-arrow_svg__SVGID_3_" overflow="visible" />
      </clipPath>
      <g>
        <path
          className="upward-arrow_svg__st4"
          d="M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
        />
      </g>
      <g>
        <path
          className="upward-arrow_svg__st4"
          d="M25 53.8h-1.9c-1.9 0-3.5-1.6-3.5-3.5v-6.6c0-1.9 1.6-3.5 3.5-3.5H25c1.9 0 3.5 1.6 3.5 3.5v6.6c-.1 2-1.6 3.5-3.5 3.5zm-1.9-11.4c-.8 0-1.5.7-1.5 1.5v6.6c0 .8.7 1.5 1.5 1.5H25c.8 0 1.5-.7 1.5-1.5v-6.6c0-.8-.7-1.5-1.5-1.5h-1.9zM35.9 53.8H34c-1.9 0-3.5-1.6-3.5-3.5V37.9c0-1.9 1.6-3.5 3.5-3.5h1.9c1.9 0 3.5 1.6 3.5 3.5v12.5c-.1 1.9-1.6 3.4-3.5 3.4zM34 36.4c-.8 0-1.5.7-1.5 1.5v12.5c0 .8.7 1.5 1.5 1.5h1.9c.8 0 1.5-.7 1.5-1.5V37.9c0-.8-.7-1.5-1.5-1.5H34zM46.8 53.8h-1.9c-1.9 0-3.5-1.6-3.5-3.5V31.2c0-1.9 1.6-3.5 3.5-3.5h1.9c1.9 0 3.5 1.6 3.5 3.5v19.2c-.1 1.9-1.6 3.4-3.5 3.4zm-1.9-24.1c-.8 0-1.5.7-1.5 1.5v19.2c0 .8.7 1.5 1.5 1.5h1.9c.8 0 1.5-.7 1.5-1.5V31.2c0-.8-.7-1.5-1.5-1.5h-1.9z"
        />
        <path
          className="upward-arrow_svg__st5"
          d="M20.9 34.6c-.4 0-.7-.2-.9-.5-.3-.5-.1-1.1.4-1.4L48 18.1c.3-.2.8-.1 1.1.1.3.2.5.6.4 1l-1.2 5.6c-.1.5-.6.9-1.2.8-.5-.1-.9-.6-.8-1.2l.8-3.5-25.8 13.6c-.1 0-.3.1-.4.1z"
        />
        <path
          className="upward-arrow_svg__st5"
          d="M48.5 20c-.1 0-.2 0-.3-.1L42.9 18c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l5.3 1.9c.5.2.8.8.6 1.3-.2.5-.6.7-1 .7z"
        />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UpwardArrow.displayName = 'UpwardArrow';
export default UpwardArrow;
