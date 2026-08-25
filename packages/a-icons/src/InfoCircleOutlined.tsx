import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function InfoCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm1 14.5h-2v-8h2v8zm0-9h-2v-2h2v2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

InfoCircleOutlined.displayName = "InfoCircleOutlined";
export default InfoCircleOutlined;
