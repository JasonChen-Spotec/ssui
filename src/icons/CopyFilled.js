import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CopyFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M10.6 11.4c.4 0 .8-.4.8-.8V.8c0-.4-.4-.8-.8-.8H.8C.4 0 0 .4 0 .8v9.8c0 .4.4.8.8.8h9.8z"
      />
      <path
        fill="currentColor"
        d="M15.2 4.6h-2.6v7.1c0 .5-.4.9-.9.9H4.6v2.6c0 .4.4.8.8.8h9.8c.4 0 .8-.4.8-.8V5.4c0-.5-.4-.8-.8-.8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CopyFilled.displayName = "CopyFilled";
export default CopyFilled;
