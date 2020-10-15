import * as React from "react";
import Icon from "assui/lib/components/Icon";

function EyeOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 3.2C3.9 3.2 0 8 0 8s3.6 4.8 8 4.8S16 8 16 8c-4.2-5.2-8-4.8-8-4.8zm0 7.9c-1.7 0-3.1-1.4-3.1-3.1S6.3 4.9 8 4.9s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z"
      />
      <circle cx={8} cy={8} r={1.9} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default EyeOutlined;
