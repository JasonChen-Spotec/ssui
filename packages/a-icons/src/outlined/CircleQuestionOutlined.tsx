import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function CircleQuestionOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M7.1 12.9c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9z" />
      <path
        fill="currentColor"
        d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 1.1C4.2 1.1 1.1 4.2 1.1 8c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9z"
      />
      <path
        fill="currentColor"
        d="M8 10.9c-.3 0-.6-.3-.6-.6v-1c0-.9.7-1.6 1.3-2.3.5-.5.9-.9.9-1.3C9.7 4.8 8.9 4 8 4c-1 0-1.7.8-1.7 1.7 0 .3-.3.6-.6.6s-.6-.3-.6-.6c0-1.6 1.3-2.8 2.9-2.8s2.9 1.3 2.9 2.9c0 .9-.6 1.5-1.3 2.1-.5.5-1 1-1 1.5v1c0 .2-.3.5-.6.5z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleQuestionOutlined.displayName = 'CircleQuestionOutlined';
export default CircleQuestionOutlined;
