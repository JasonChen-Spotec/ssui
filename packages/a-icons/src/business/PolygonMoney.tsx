import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PolygonMoney(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      id="polygon-money_svg__\u56FE\u5C42_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 71.9 72.2"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.polygon-money_svg__st4{fill:#285a83}.polygon-money_svg__st5{fill:#ef6f53}'}</style>
      <defs>
        <path id="polygon-money_svg__SVGID_1_" d="M-931.6-750.8h1920v1578h-1920z" />
      </defs>
      <clipPath id="polygon-money_svg__SVGID_2_">
        <use xlinkHref="#polygon-money_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <defs>
        <path id="polygon-money_svg__SVGID_3_" d="M-933.5-739.7h1920v1578h-1920z" />
      </defs>
      <clipPath id="polygon-money_svg__SVGID_4_">
        <use xlinkHref="#polygon-money_svg__SVGID_3_" overflow="visible" />
      </clipPath>
      <path
        className="polygon-money_svg__st4"
        d="M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
      />
      <path
        className="polygon-money_svg__st4"
        d="M34.8 55.6L22.9 47c-1.3-.9-2-2.4-2-4V23.2c0-1.9 1.5-3.4 3.4-3.4h23.4c1.9 0 3.4 1.5 3.4 3.4V43c0 1.6-.8 3-2 4l-11.9 8.6c-.8.5-1.7.5-2.4 0zM24.2 21.9c-.8 0-1.4.6-1.4 1.4V43c0 .9.4 1.8 1.2 2.3l10.7 7.8c.7.5 1.6.5 2.3 0l10.7-7.8c.7-.5 1.2-1.4 1.2-2.3V23.2c0-.8-.6-1.4-1.4-1.4H24.2z"
      />
      <path className="polygon-money_svg__st4" d="M21.9 26.1h28.2v2H21.9z" />
      <path
        className="polygon-money_svg__st5"
        d="M37.4 45.1h-5.5c-.6 0-1-.4-1-1s.4-1 1-1h5.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3c-1.9 0-3.5-1.6-3.5-3.5v-.2c0-1.9 1.6-3.5 3.5-3.5h5.5c.6 0 1 .4 1 1s-.4 1-1 1h-5.5c-.8 0-1.5.7-1.5 1.5v.2c0 .8.7 1.5 1.5 1.5h3c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5z"
      />
      <g>
        <path
          className="polygon-money_svg__st5"
          d="M36 34.6c-.6 0-1-.4-1-1v-2.2c0-.6.4-1 1-1s1 .4 1 1v2.2c0 .5-.5 1-1 1z"
        />
      </g>
      <g>
        <path
          className="polygon-money_svg__st5"
          d="M36 47.7c-.6 0-1-.4-1-1v-2.6c0-.6.4-1 1-1s1 .4 1 1v2.6c0 .5-.5 1-1 1z"
        />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PolygonMoney.displayName = 'PolygonMoney';
export default PolygonMoney;
