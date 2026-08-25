import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ChevronRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4.586l6.707 6.707a1 1 0 010 1.414L9 19.414 7.586 18l6-6-6-6L9 4.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ChevronRightOutlined.displayName = "ChevronRightOutlined";
export default ChevronRightOutlined;
