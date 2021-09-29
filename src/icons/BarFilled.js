import * as React from "react";
import Icon from "assui/lib/components/Icon";

function BarFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M6.3 16h-1c-.5 0-.8-.4-.8-.8V.8c0-.4.3-.8.8-.8h1c.5 0 .8.4.8.8v14.3c0 .5-.4.9-.8.9zm-4.5 0h-1c-.4 0-.8-.4-.8-.8V4.4c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v10.8c.1.4-.3.8-.8.8zm8.9 0h-1c-.5 0-.8-.4-.8-.8V8c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v7.1c.1.5-.3.9-.8.9zm4.5 0h-1c-.5 0-.8-.4-.8-.8V6.8c0-.5.4-.8.8-.8h1c.4 0 .8.4.8.8v8.3c0 .5-.4.9-.8.9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BarFilled.displayName = "BarFilled";
export default BarFilled;
