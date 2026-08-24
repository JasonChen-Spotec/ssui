import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function SignalStopReviewOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.933 15.933 0 0012 5c-3.09 0-5.974.875-8.42 2.392l8.42 10.425L18 10.388v3.183l-5.222 6.466a1 1 0 01-1.556 0L1.319 7.774c-.347-.43-.282-1.061.166-1.384A17.918 17.918 0 0112.001 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalStopReviewOutlined.displayName = "SignalStopReviewOutlined";
export default SignalStopReviewOutlined;
