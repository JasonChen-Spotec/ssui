import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DoubleTextFilled(componentProps: IconProps) {
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
        d="M6 4.5a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-3-3v-12zm3 0h9v2H9v-2zm9 4H9v2h9v-2zm-9 4h5v2H9v-2z"
        fill="currentColor"
      />
      <path
        d="M2.5 10v8a5 5 0 005 5H14v-2H7.5a3 3 0 01-3-3v-8h-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleTextFilled.displayName = "DoubleTextFilled";
export default DoubleTextFilled;
