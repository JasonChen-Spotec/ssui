import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ClockCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-.618V5h-2v7a1 1 0 00.553.894l4.894 2.448.895-1.79L13 11.383z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClockCircleFilled.displayName = "ClockCircleFilled";
export default ClockCircleFilled;
