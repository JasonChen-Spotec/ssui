import * as React from "react";
import Icon from "assui/lib/components/Icon";

function EmailFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M1.6 1.71h12.8A1.6 1.6 0 0116 3.27L8 7.66 0 3.27a1.58 1.58 0 011.6-1.56zM0 5v7.76a1.59 1.59 0 001.6 1.58h12.8a1.59 1.59 0 001.6-1.63V5L8.19 9.13a.37.37 0 01-.38 0z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default EmailFilled;
