import * as React from "react";
import Icon from "assui/lib/components/Icon";

function SharedFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M13.3 10.7c-.8 0-1.5.3-2 .9l-6.1-3c.1-.4.1-.7 0-1.1l5.4-2.7c.9 1.2 2.5 1.5 3.7.8s1.9-2.2 1.4-3.6-1.9-2.2-3.3-2-2.3 1.5-2.3 3c0 .2 0 .4.1.5L4.7 6.2c-.8-.8-1.9-1.1-3-.7C.7 5.9 0 6.9 0 8s.7 2.1 1.7 2.5c1 .4 2.2.1 2.9-.7l6.1 3c0 .2-.1.4-.1.5 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.6-2.7-2.6z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SharedFilled.displayName = "SharedFilled";
export default SharedFilled;
