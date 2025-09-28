import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DocumentTextFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.414 7L15 1.586V7h5.414z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9h-6a2 2 0 01-2-2V1H8.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 5.29 3 5.954 3 6.758v10.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C7.29 23 7.954 23 8.758 23h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V9zM7 12h10v2H7v-2zm0 4h10v2H7v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocumentTextFilled.displayName = 'DocumentTextFilled';
export default DocumentTextFilled;
