import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function BankAddFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4a3 3 0 00-3 3v2h22V7a3 3 0 00-3-3H4zM1 17v-6h22v3.225A5.5 5.5 0 0013.875 20H4a3 3 0 01-3-3z"
        fill="currentColor"
      />
      <path d="M20 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BankAddFilled.displayName = "BankAddFilled";
export default BankAddFilled;
