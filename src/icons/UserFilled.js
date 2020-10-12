import * as React from "react";
import Icon from "../components/Icon";

function UserFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.7 4.2c0 2.4 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2S10.3 0 8 0C5.6 0 3.7 1.9 3.7 4.2zm8 4.3h-.2c-.1 0-.2 0-.5.1l-.5.2c-.8.4-1.6.5-2.5.5-.8 0-1.8-.1-2.6-.5-.3-.1-.5-.2-.5-.2-.1-.1-.2-.1-.5-.1h-.2c-1.5.2-2.8 1.3-3.3 2.7-.4.8-.6 1.8-.5 2.7 0 .2.1.5.5.6 2.2 1.2 4.7 1.6 7.2 1.5 4.8 0 7.2-1.5 7.2-1.5.2-.1.4-.4.5-.7 0-.9-.2-1.8-.5-2.6-.7-1.4-2-2.5-3.6-2.7z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default UserFilled;
