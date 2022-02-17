import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function HandCoinsFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.4 12.5h1.927c1.06 0 2.076.424 2.826 1.18.75.754 1.17 1.779 1.17 2.846H9.106l.001.895h7.106v-.895a5.018 5.018 0 00-.787-2.684h2.564c.84 0 1.662.24 2.372.69A4.464 4.464 0 0122 16.394C19.9 19.186 16.498 21 12.66 21c-2.453 0-4.531-.528-6.219-1.454v-8.325A6.167 6.167 0 019.4 12.5zm-3.847 6.71a.898.898 0 01-.26.633.885.885 0 01-.628.262H2.888a.885.885 0 01-.628-.262.898.898 0 01-.26-.633v-8.052c0-.237.094-.465.26-.633a.885.885 0 01.628-.262h1.777c.235 0 .461.094.628.262.166.168.26.396.26.633v8.053zM17.1 6.684c.707 0 1.385.283 1.885.786a2.694 2.694 0 010 3.796 2.655 2.655 0 01-3.769 0 2.694 2.694 0 010-3.796 2.655 2.655 0 011.884-.786zM10.883 4c.706 0 1.384.283 1.884.786a2.694 2.694 0 010 3.796 2.655 2.655 0 01-3.769 0 2.694 2.694 0 010-3.796A2.655 2.655 0 0110.883 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HandCoinsFilled.displayName = 'HandCoinsFilled';
export default HandCoinsFilled;
