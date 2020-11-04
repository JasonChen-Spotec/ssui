import * as React from "react";
import Icon from "assui/lib/components/Icon";

function ArrowFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M8 0L.9 7.9h3.5V16h7V7.9h3.7L8 0z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default ArrowFilled;
