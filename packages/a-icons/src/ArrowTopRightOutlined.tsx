import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ArrowTopRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5h9a1 1 0 011 1v9h-2V8.414l-11 11L4.586 18l11-11H9V5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowTopRightOutlined.displayName = "ArrowTopRightOutlined";
export default ArrowTopRightOutlined;
