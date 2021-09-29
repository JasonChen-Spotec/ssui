import * as React from "react";
import Icon from "assui/lib/components/Icon";

function EthFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        d="M8 13.73L4.5 8.32 8 10.44l3.5-2.12zm0-3.88L4.5 7.66 8 2.27l3.5 5.39z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EthFilled.displayName = "EthFilled";
export default EthFilled;
