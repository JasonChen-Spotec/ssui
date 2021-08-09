import * as React from "react";
import Icon from "assui/lib/Icon";

function CorrectOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.7 2.8c-.3-.3-.9-.3-1.2 0l-8.7 8.7-4.3-4.4C1.2 6.7.6 6.7.3 7c-.4.3-.4.9 0 1.2l4.7 5c0 .1.1.2.2.2.2.2.4.3.7.2.2 0 .5 0 .7-.2.1 0 .1-.1.2-.2l9-9.2c.3-.2.3-.8-.1-1.2z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CorrectOutlined.displayName = "CorrectOutlined";
export default CorrectOutlined;
