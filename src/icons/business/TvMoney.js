import * as React from "react";
import Icon from "assui/lib/components/Icon";

function TvMoney(componentProps) {
  const IconNode = (props) => (
    <svg
      id="tv-money_svg__\u56FE\u5C42_1"
      x={0}
      y={0}
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {".tv-money_svg__st0{fill:#285a83}.tv-money_svg__st1{fill:#ef6f53}"}
      </style>
      <path
        className="tv-money_svg__st0"
        d="M14.4 11.3H1.6c-.9 0-1.6-.7-1.6-1.6V2.1C0 1.2.7.5 1.6.5h12.8c.9 0 1.6.7 1.6 1.6v7.6c0 .9-.7 1.6-1.6 1.6zM1.6 1.4c-.4 0-.7.3-.7.7v7.6c0 .4.3.7.7.7h12.8c.4 0 .7-.3.7-.7V2.1c0-.4-.3-.7-.7-.7H1.6zM15.5 13.4H.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h15.1c.3 0 .5.2.5.5-.1.3-.3.5-.6.5zM15.5 15.4H.5c-.3 0-.5-.2-.5-.4 0-.3.2-.5.5-.5h15.1c.3 0 .5.2.5.5-.1.2-.3.4-.6.4z"
      />
      <path
        className="tv-money_svg__st1"
        d="M8.7 8.8H6.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H7.3c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H7.3c-.4 0-.7.3-.7.7V5c0 .4.3.7.7.7h1.4c.9 0 1.6.7 1.6 1.6s-.7 1.5-1.6 1.5z"
      />
      <path
        className="tv-money_svg__st1"
        d="M8.1 3.9c-.3 0-.5-.2-.5-.5v-1c0-.2.2-.4.5-.4s.5.2.5.5v1c-.1.2-.3.4-.5.4zM8.1 9.9c-.3 0-.5-.2-.5-.5V8.3c0-.3.2-.5.5-.5s.4.2.4.5v1.2c0 .2-.2.4-.4.4z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TvMoney.displayName = "TvMoney";
export default TvMoney;
