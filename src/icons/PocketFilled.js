import * as React from "react";
import Icon from "assui/lib/Icon";

function PocketFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8.3 11c-1.5 0-2.8-1.3-2.8-2.8v-.4C5.5 6.2 6.8 5 8.3 5h6.8V2.8c0-1.5-1.3-2.8-2.8-2.8H3.6C2.1 0 .9 1.3.9 2.8v10.4c0 1.5 1.3 2.8 2.8 2.8h8.7c1.5 0 2.8-1.3 2.8-2.8V11H8.3z"
      />
      <path
        fill="currentColor"
        d="M8.5 6.2c-1 0-1.7.8-1.7 1.8s.8 1.7 1.7 1.7h6.4c.1 0 .2-.1.2-.2V6.4c0-.1-.1-.2-.2-.2H8.5zm.1 2.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PocketFilled.displayName = "PocketFilled";
export default PocketFilled;
