import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PhoneCallFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.1 1.877a3 3 0 012.708 0c.464.235.863.65 1.338 1.126l.195.196c.313.313.585.576.77.862a3 3 0 010 3.27c-.185.286-.457.55-.77.863l-.108.108-.002.012.014.03.037.076a13.603 13.603 0 002.652 3.736 13.604 13.604 0 003.735 2.651l.076.037.03.013h.006l.005-.002.11-.106c.313-.314.576-.585.862-.77a3.001 3.001 0 013.27 0c.286.185.55.456.863.77l.539.539c.328.334.606.646.782.994a3 3 0 010 2.708c-.235.464-.651.862-1.127 1.338l-.157.158c-.5.499-.867.877-1.372 1.161-.55.309-1.34.515-1.971.513-.572-.002-.983-.125-1.53-.28a20.04 20.04 0 01-8.717-5.128 20.04 20.04 0 01-5.129-8.718c-.155-.547-.278-.958-.28-1.53-.001-.63.205-1.42.513-1.97.284-.505.663-.873 1.162-1.372l.501-.502c.335-.329.647-.606.995-.783z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PhoneCallFilled.displayName = 'PhoneCallFilled';
export default PhoneCallFilled;
