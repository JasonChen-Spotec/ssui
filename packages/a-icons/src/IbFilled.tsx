import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function IbFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.156 13.5V7.932H8.56V16.5H7.156zm3.082 0V7.932h3.924c.852 0 1.524.204 2.004.612.444.384.672.9.672 1.548 0 .48-.12.888-.348 1.224-.228.312-.552.54-.984.708.564.108.984.336 1.272.684.276.336.42.804.42 1.38 0 .864-.3 1.5-.888 1.908-.504.336-1.224.504-2.136.504h-3.936zm3.576-7.416h-2.172v2.448h2.148c.6 0 1.02-.108 1.272-.3.24-.204.372-.528.372-.972 0-.408-.132-.708-.372-.888-.264-.192-.672-.288-1.248-.288zm.192 3.6h-2.364v2.664h2.328c.528 0 .948-.084 1.248-.252.384-.216.576-.552.576-1.032 0-.492-.144-.84-.42-1.056-.288-.216-.744-.324-1.368-.324z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

IbFilled.displayName = 'IbFilled';
export default IbFilled;
