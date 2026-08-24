import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ArrowLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.586l-6.707 6.707a1 1 0 000 1.414L10 19.414 11.414 18l-5-5H21v-2H6.414l5-5L10 4.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowLeftOutlined.displayName = "ArrowLeftOutlined";
export default ArrowLeftOutlined;
