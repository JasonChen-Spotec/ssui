import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DoubleChevronOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.414 7l-5 5 5 5L11 18.414l-5.707-5.707a1 1 0 010-1.414L11 5.586 12.414 7zm7 0l-5 5 5 5L18 18.414l-5.707-5.707a1 1 0 010-1.414L18 5.586 19.414 7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChevronOutlined.displayName = "DoubleChevronOutlined";
export default DoubleChevronOutlined;
