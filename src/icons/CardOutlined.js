import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CardOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14 14.5H2c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2m-12-1h12c.6 0 1-.4 1-1v-7H1v7c0 .6.4 1 1 1zm12-11H2c-.6 0-1 .4-1 1v1h14v-1c0-.6-.4-1-1-1m-11.5 6h5c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5m0 2h4c.3 0 .5.2.5.5s-.2.5-.5.5h-4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5m7-2h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardOutlined.displayName = "CardOutlined";
export default CardOutlined;
