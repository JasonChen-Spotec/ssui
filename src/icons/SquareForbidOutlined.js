import * as React from "react";
import Icon from "assui/lib/Icon";

function SquareForbidOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.9 11.3h3.2c.2 0 .4.2.4.4s-.2.4-.4.4H3.5c-.4 0-.7-.3-.7-.7v-8c0-.4.3-.7.7-.7h6.9c.4 0 .7.3.7.7v3.1c0 .2-.2.4-.4.4s-.4-.2-.4-.4V3.8c0-.2-.1-.3-.3-.3H4c-.2 0-.3.1-.3.3V11c0 .2.1.3.2.3zm9.4-4.5c-.3 0-.6-.3-.6-.6V1.6c0-.2-.2-.4-.4-.4H1.6c-.2 0-.4.2-.4.4v11.9c0 .2.2.4.4.4H7c.3 0 .6.3.6.6s-.3.6-.6.6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h11.9c.6 0 1 .4 1 1v5.2c0 .4-.3.6-.6.6z"
      />
      <path
        fill="currentColor"
        d="M12.4 8.9c-2 0-3.6 1.6-3.6 3.6s1.7 3.5 3.6 3.5 3.6-1.6 3.6-3.6-1.6-3.5-3.6-3.5zm2.7 3.5c0 .6-.2 1.2-.5 1.6l-3.7-3.7c.4-.3 1-.5 1.6-.5 1.4 0 2.6 1.2 2.6 2.6zm-5.3 0c0-.6.2-1.1.5-1.6l3.7 3.8c-.4.3-1 .5-1.6.5-1.4 0-2.6-1.2-2.6-2.7z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareForbidOutlined.displayName = "SquareForbidOutlined";
export default SquareForbidOutlined;
