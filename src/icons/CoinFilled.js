import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CoinFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.8 11c-3.3 0-6-1-6-2.7V10c0 1.7 2.7 3 6 3s6-1.3 6-3V8.3c0 1.7-2.7 2.7-6 2.7zm0 3c-3.3 0-6-1-6-2.7V13c0 1.7 2.7 3 6 3s6-1.3 6-3v-1.7c0 1.7-2.7 2.7-6 2.7zm0-6c-3.3 0-6-1-6-2.7V7c0 1.7 2.7 3 6 3s6-1.3 6-3V5.3c0 1.7-2.7 2.7-6 2.7zm0-8c-3.3 0-6 1.3-6 3v1c0 1.7 2.7 3 6 3s6-1.3 6-3V3c0-1.7-2.7-3-6-3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default CoinFilled;
