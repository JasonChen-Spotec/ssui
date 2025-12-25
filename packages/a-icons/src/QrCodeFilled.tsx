import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function QrCodeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.444 17.556v-1.112h-3.333v-3.333h3.333v2.222h2.223v2.223h-1.111v2.222h-2.223V22h-2.222v-3.333h2.222v-1.111h1.111zM22 20a2 2 0 01-2 2h-2.444v-2.222h2.222v-2.222H22V20zM2 4a2 2 0 012-2h6.889v8.889H2V4zm11.111-2H20a2 2 0 012 2v6.889h-8.889V2zM2 13.111h8.889V22H4a2 2 0 01-2-2v-6.889zm16.667 0H22v2.222h-3.333v-2.222zM5.333 5.333v2.223h2.223V5.333H5.333zm0 11.111v2.223h2.223v-2.223H5.333zm11.111-11.11v2.222h2.223V5.333h-2.223z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

QrCodeFilled.displayName = 'QrCodeFilled';
export default QrCodeFilled;
