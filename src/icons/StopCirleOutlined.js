import * as React from "react";
import Icon from "assui/lib/components/Icon";

function StopCirleOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
      />
      <rect
        fill="currentColor"
        x={5.37}
        y={5.39}
        width={5.27}
        height={5.27}
        rx={0.75}
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StopCirleOutlined.displayName = "StopCirleOutlined";
export default StopCirleOutlined;
