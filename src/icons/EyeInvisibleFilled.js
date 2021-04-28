import * as React from "react";
import Icon from "assui/lib/components/Icon";

function EyeInvisibleFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M13.4 5.3l-2.2 2.2v.3C11.2 9.6 9.8 11 8 11h-.3l-1.4 1.4c.6.1 1.2.2 1.8.2 3.6 0 6.2-2.9 8-4.8-.9-.8-1.8-1.7-2.7-2.5zm-.6-2.7L11.4 4c-1-.6-2.2-.9-3.4-.9-2.9 0-5.2 1.8-8 4.8 1.2 1.4 2.5 2.6 3.9 3.6l-.9.9 1 1 9.7-9.7-.9-1.1zm-8 5.3c0-1.8 1.4-3.2 3.1-3.2.8 0 1.5.3 2.1.7l-.9.9C8.8 6.1 8.4 6 8 6c-1 0-1.9.8-1.9 1.8 0 .4.1.8.3 1.2l-1 .9c-.4-.5-.6-1.2-.6-2z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EyeInvisibleFilled.displayName = "EyeInvisibleFilled";
export default EyeInvisibleFilled;
