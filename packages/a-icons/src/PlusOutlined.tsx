import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function PlusOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlusOutlined.displayName = "PlusOutlined";
export default PlusOutlined;
