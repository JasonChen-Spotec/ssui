import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DragUpAndDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 11h20v2H2v-2z" fill="currentColor" />
      <path
        d="M11 4.414V11.5h2V4.414l3 3L17.415 6l-4.708-4.707a1 1 0 00-1.414 0L6.586 6 8 7.414l3-3zM12.707 22.707a1 1 0 01-1.414 0L6.586 18 8 16.586l3 3V12.5h2v7.086l3-3L17.414 18l-4.707 4.707z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DragUpAndDownOutlined.displayName = "DragUpAndDownOutlined";
export default DragUpAndDownOutlined;
