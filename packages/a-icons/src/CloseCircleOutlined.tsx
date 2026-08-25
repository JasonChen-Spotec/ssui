import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function CloseCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8-4.414l3 3 3-3L16.414 9l-3 3 3 3L15 16.414l-3-3-3 3L7.586 15l3-3-3-3L9 7.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleOutlined.displayName = "CloseCircleOutlined";
export default CloseCircleOutlined;
