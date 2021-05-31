import * as React from "react";
import Icon from "assui/lib/components/Icon";

function DocTFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11.8 0H4.2C2.6 0 1.4 1.3 1.4 2.8v10.3c0 1.6 1.3 2.8 2.8 2.8h7.6c1.6 0 2.8-1.3 2.8-2.8V2.8c0-1.5-1.2-2.8-2.8-2.8zM8 12.2H4.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7H8c.4 0 .7.3.7.7s-.3.7-.7.7zm3.3-3.5H4.7c-.3 0-.6-.3-.6-.7s.3-.7.7-.7h6.5c.4 0 .7.3.7.7s-.4.7-.7.7zm0-3.5H4.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h6.5c.4 0 .7.3.7.7 0 .4-.3.7-.6.7z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocTFilled.displayName = "DocTFilled";
export default DocTFilled;
