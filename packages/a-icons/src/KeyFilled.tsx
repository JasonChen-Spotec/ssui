import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function KeyFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 14h-4.341a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

KeyFilled.displayName = "KeyFilled";
export default KeyFilled;
