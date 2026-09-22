import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function AccountWithdrawal(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#account-withdrawal_svg__clip0_22022_10306)">
        <path fill="#fff" d="M0 0h21v21H0z" />
        <path
          d="M15.674 6.23a7.313 7.313 0 11-10.341 0"
          stroke="#121212"
          strokeWidth={1.5}
        />
        <path
          d="M10.5 11.625V1.5l3.75 3.375M10.5 1.5L6.75 4.875"
          stroke="#DC4946"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="account-withdrawal_svg__clip0_22022_10306">
          <path fill="#fff" d="M0 0h21v21H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AccountWithdrawal.displayName = "AccountWithdrawal";
export default AccountWithdrawal;
