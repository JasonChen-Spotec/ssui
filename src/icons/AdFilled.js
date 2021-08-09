import * as React from "react";
import Icon from "assui/lib/Icon";

function AdFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.5 5H12L9.3 2.3c.4-.7.2-1.6-.5-2.1S7.1 0 6.7.7c-.3.5-.3 1.1 0 1.6L4 5H.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5zm-8-2.1c.3.1.7.1 1 0L10.6 5H5.4l2.1-2.1z"
      />
      <path
        fill="inherit"
        d="M6.6 8.5H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.7c.3 0 .6.3.6.6 0 .4-.3.6-.6.6zM13.1 11.3H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6zM13.1 14H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AdFilled.displayName = "AdFilled";
export default AdFilled;
