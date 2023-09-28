import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FacebookFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={40} height={40} rx={20} fill="currentColor" />
      <path
        d="M25.632 21.5l.724-4.599h-4.463v-2.989c0-1.258.623-2.486 2.616-2.486h2.057V7.509a24.962 24.962 0 00-3.622-.309c-3.673 0-6.072 2.206-6.072 6.195V16.9h-4.071v4.6h4.071v11.124h5.021V21.5h3.739z"
        fill="inherit"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FacebookFilled.displayName = 'FacebookFilled';
export default FacebookFilled;
