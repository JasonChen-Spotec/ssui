import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SignBankCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#sign-bank-card-filled_svg__clip0_1348_27454)">
        <path
          d="M1 18.654C1 19.95 2.008 21 3.25 21h17.487c1.24 0 2.25-1.05 2.25-2.346v-8.043H1v8.043zM20.737 4H3.25C2.01 4 1 5.05 1 6.346v1.432h21.986V6.346C22.986 5.05 21.978 4 20.736 4z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="sign-bank-card-filled_svg__clip0_1348_27454">
          <path fill="currentColor" transform="translate(1 4)" d="M0 0h22v17H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignBankCardFilled.displayName = 'SignBankCardFilled';
export default SignBankCardFilled;
