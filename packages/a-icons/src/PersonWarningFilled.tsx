import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function PersonWarningFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.752 2.25v3.5h-1.5v-3.5h1.5zm0 6.5v-1.5h-1.504v1.5h1.505z"
        fill="currentColor"
      />
      <path
        d="M7 14h4.655a7.464 7.464 0 00-1.155 4c0 1.47.423 2.842 1.155 4H2v-3a5 5 0 015-5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PersonWarningFilled.displayName = "PersonWarningFilled";
export default PersonWarningFilled;
