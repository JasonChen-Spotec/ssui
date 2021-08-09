import * as React from "react";
import Icon from "assui/lib/Icon";

function AllocationOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.7 5.4l-4-4.5c-.2-.2-.5-.4-.7-.4-.3 0-.6.1-.7.4-.2.2-.3.5-.3.7v1.9H8.5c-.3 0-.5.2-.5.5s.2.5.5.5h2c.3 0 .5-.2.5-.5V1.6v-.1L15 6v.2l-4 4.5V8c0-.3-.2-.5-.5-.5H6V5.4c0-.6-.5-1.1-1-1.1-.3 0-.6.1-.7.3l-4 4.6c-.4.4-.4 1.1 0 1.5l3.9 4.4c.2.2.5.4.7.4.3 0 .6-.1.8-.4.2-.2.3-.5.3-.7v-1.9h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2.5L1 10v-.2l4-4.4V8c0 .3.2.5.5.5H10v2.1c0 .6.5 1.1 1 1.1.3 0 .6-.1.7-.3l4-4.5c.4-.5.4-1.1 0-1.5z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AllocationOutlined.displayName = "AllocationOutlined";
export default AllocationOutlined;
