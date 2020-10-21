import * as React from "react";
import Icon from "assui/lib/components/Icon";

function PhoneFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        className="phone-filled_svg__st0"
        d="M13.2 11.8V1.3c0-.7-.6-1.3-1.3-1.3H4.1c-.7 0-1.3.6-1.3 1.3v10.5h10.4zm-10.4.7v2.1c0 .8.6 1.4 1.4 1.4h7.6c.8 0 1.4-.6 1.4-1.5v-2.1H2.8zM8 14.3c-.3 0-.6-.2-.6-.6 0-.3.2-.6.6-.6.3 0 .6.2.6.6 0 .4-.3.6-.6.6z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default PhoneFilled;
