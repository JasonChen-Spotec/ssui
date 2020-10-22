import * as React from "react";
import Icon from "assui/lib/components/Icon";

function PhoneCircleFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M8 12.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5z" />
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.2 12c0 .6-.3.9-.8.9H5.7c-.5 0-.9-.4-.9-.9v-1.3h6.4V12zm0-2.1H4.8v-6c0-.4.4-.8.8-.8h4.8c.4 0 .8.4.8.8v6z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default PhoneCircleFilled;
