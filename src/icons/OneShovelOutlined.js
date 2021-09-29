import * as React from "react";
import Icon from "assui/lib/components/Icon";

function OneShovelOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.58 3.44l-3-3a1.4 1.4 0 00-1-.41 1.42 1.42 0 00-1 .41l-.13.13a1.39 1.39 0 000 2l.45.43L6 7.92 4.3 6.25a.63.63 0 00-.46-.19.61.61 0 00-.45.19L1.32 8.32a4.48 4.48 0 006.34 6.34l2.07-2.07a.65.65 0 000-.91L8.07 10 13 5.09l.47.46a1.4 1.4 0 002 0l.13-.13a1.39 1.39 0 00-.02-1.98zm-3.43.8L6.38 10l.52.52.12.12.2.2 1.27 1.27-1.68 1.7a3.29 3.29 0 01-4.65-4.65l1.68-1.68 1.29 1.28-1.3 1.3a.65.65 0 00-.16.4.62.62 0 00.62.62.65.65 0 00.4-.16l7.08-7.14.41.41zm2.59.34l-.13.13a.21.21 0 01-.15.06.19.19 0 01-.14-.06l-3-3a.21.21 0 01-.06-.15.19.19 0 01.06-.14l.13-.13a.19.19 0 01.14-.06.21.21 0 01.15.06l3 3a.19.19 0 01.06.14.21.21 0 01-.06.15z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OneShovelOutlined.displayName = "OneShovelOutlined";
export default OneShovelOutlined;
