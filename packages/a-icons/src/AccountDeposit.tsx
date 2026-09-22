import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function AccountDeposit(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="#fff" />
      <path
        d="M17.25 12.75V15A2.25 2.25 0 0115 17.25H6A2.25 2.25 0 013.75 15v-2.25"
        stroke="#DC4946"
        strokeWidth={1.5}
      />
      <path d="M6.75 14.25h7.5" stroke="#121212" strokeWidth={1.5} />
      <path
        d="M10.5 2.25v7.5L6 5.531M10.5 9.75l4.5-4.5"
        stroke="#121212"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AccountDeposit.displayName = "AccountDeposit";
export default AccountDeposit;
