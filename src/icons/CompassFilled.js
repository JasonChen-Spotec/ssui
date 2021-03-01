import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CompassFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm9.4 2.8c.9-1.1 3-7.5 3-7.5s-6 3.2-6.9 4.2c-1 1-1.1 2.6-.1 3.6s2.6 1.1 3.6.1c.2-.1.3-.2.4-.4z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CompassFilled.displayName = "CompassFilled";
export default CompassFilled;