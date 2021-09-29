import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CheckCircleOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 1.3a6.7 6.7 0 100 13.4A6.7 6.7 0 008 1.3zM8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
      />
      <path
        fill="inherit"
        d="M6.8 11.6c-.2 0-.3-.1-.5-.2L4.2 9.1c-.3-.3-.3-.7 0-1 .3-.3.7-.3.9 0l1.7 1.8 4.1-4.3c.3-.3.7-.3.9 0 .3.3.3.7 0 1l-4.6 4.8c-.1.1-.2.2-.4.2"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckCircleOutlined.displayName = "CheckCircleOutlined";
export default CheckCircleOutlined;
