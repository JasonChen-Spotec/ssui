import * as React from "react";
import Icon from "assui/lib/components/Icon";

function QrCode(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M0 7.5h7.5V0H0v7.5zm1.9-5.6h3.8v3.8H1.9V1.9zM8.5 0v7.5H16V0H8.5zm5.6 5.6h-3.8V1.9h3.8v3.7zM2.8 4.7h1.9V2.8H2.8v1.9zM0 16h7.5V8.5H0V16zm1.9-5.6h3.8v3.8H1.9v-3.8zm11.3-7.6h-1.9v1.9h1.9V2.8zM8.5 16h1.9v-1.9H8.5V16zm1.9-5.6v3.8h1.9v-3.8h-1.9zm3.7 3.7h-1.9V16H16v-3.8h-1.9v1.9zm0-3.7H16V8.5h-1.9v1.9zM8.5 8.5v1.9h1.9V8.5H8.5zm-5.7 4.7h1.9v-1.9H2.8v1.9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

QrCode.displayName = "QrCode";
export default QrCode;
