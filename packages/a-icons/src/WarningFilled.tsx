import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function WarningFilled(componentProps: IconProps) {
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
        d="M21 21V10a9 9 0 10-18 0v11H1v2h22v-2h-2zm-9.312-10.274L14.414 8 13 6.586l-3.707 3.707a1 1 0 00.26 1.602l2.759 1.379L9.586 16 11 17.414l3.707-3.707a1 1 0 00-.26-1.601l-2.759-1.38z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WarningFilled.displayName = "WarningFilled";
export default WarningFilled;
