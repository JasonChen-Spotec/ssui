import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AddChildOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18.5 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1a1 1 0 011 1v4l-.005.103a1 1 0 01-.893.892L10 7H7.5v3H13V9a1 1 0 011-1h7a1 1 0 011 1v4l-.005.102a1 1 0 01-.893.893L21 14h-7l-.102-.005a1 1 0 01-.893-.893L13 13v-1H7.5v6h4v2h-4a2 2 0 01-2-2V7H3l-.103-.005a1 1 0 01-.892-.892L2 6V2a1 1 0 011-1h7zm5 11h5v-2h-5v2zM4 5h5V3H4v2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AddChildOutlined.displayName = 'AddChildOutlined';
export default AddChildOutlined;
