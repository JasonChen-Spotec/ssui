import * as React from "react";
import Icon from "assui/lib/Icon";

function SamllBarFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <rect fill="currentColor" y={5.03} width={4} height={10.97} rx={1.11} />
      <rect fill="currentColor" x={6} width={4} height={16} rx={1.11} />
      <rect
        fill="currentColor"
        x={12}
        y={2.64}
        width={4}
        height={13.36}
        rx={1.11}
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SamllBarFilled.displayName = "SamllBarFilled";
export default SamllBarFilled;
