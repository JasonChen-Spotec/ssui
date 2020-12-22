import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CirleMoney(componentProps) {
  const IconNode = (props) => (
    <svg
      id="cirle-money_svg__\u56FE\u5C42_1"
      x={0}
      y={0}
      viewBox="0 0 71.9 72.2"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".cirle-money_svg__st4{fill:#285a83}.cirle-money_svg__st5{fill:#ef6f53}"
        }
      </style>
      <defs>
        <path
          id="cirle-money_svg__SVGID_1_"
          d="M-931.6-750.8h1920v1578h-1920z"
        />
      </defs>
      <clipPath id="cirle-money_svg__SVGID_2_">
        <use xlinkHref="#cirle-money_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <defs>
        <path
          id="cirle-money_svg__SVGID_3_"
          d="M-933.5-739.7h1920v1578h-1920z"
        />
      </defs>
      <clipPath id="cirle-money_svg__SVGID_4_">
        <use xlinkHref="#cirle-money_svg__SVGID_3_" overflow="visible" />
      </clipPath>
      <g>
        <path
          className="cirle-money_svg__st4"
          d="M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
        />
      </g>
      <g>
        <path
          className="cirle-money_svg__st4"
          d="M50 43.6H22c-1.9 0-3.5-1.6-3.5-3.5V23.5c0-1.9 1.6-3.5 3.5-3.5h28c1.9 0 3.5 1.6 3.5 3.5v16.7c-.1 1.9-1.6 3.4-3.5 3.4zM21.9 22.1c-.8 0-1.5.7-1.5 1.5v16.7c0 .8.7 1.5 1.5 1.5h28c.8 0 1.5-.7 1.5-1.5V23.5c0-.8-.7-1.5-1.5-1.5h-28zM52.4 47.9H19.5c-.6 0-1-.4-1-1s.4-1 1-1h32.9c.6 0 1 .4 1 1s-.4 1-1 1zM52.4 51.9H19.5c-.6 0-1-.4-1-1s.4-1 1-1h32.9c.6 0 1 .4 1 1s-.4 1-1 1z"
        />
        <path
          className="cirle-money_svg__st5"
          d="M37.4 38.1h-5.5c-.6 0-1-.4-1-1s.4-1 1-1h5.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3c-1.9 0-3.5-1.6-3.5-3.5v-.2c0-1.9 1.6-3.5 3.5-3.5h5.5c.6 0 1 .4 1 1s-.4 1-1 1h-5.5c-.8 0-1.5.7-1.5 1.5v.2c0 .8.7 1.5 1.5 1.5h3c1.9 0 3.5 1.6 3.5 3.5s-1.5 3.5-3.5 3.5z"
        />
        <path
          className="cirle-money_svg__st5"
          d="M36.1 27.6c-.6 0-1-.4-1-1v-2.2c0-.6.4-1 1-1s1 .4 1 1v2.2c0 .5-.5 1-1 1zM36.1 40.7c-.6 0-1-.4-1-1v-2.6c0-.6.4-1 1-1s1 .4 1 1v2.6c0 .5-.5 1-1 1z"
        />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirleMoney.displayName = "CirleMoney";
export default CirleMoney;
