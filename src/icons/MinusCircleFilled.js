import * as React from "react";
import Icon from "../components/Icon";

function MinusCircleFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm5.09 9.11H2.91V6.89h10.18v2.22z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default MinusCircleFilled;
