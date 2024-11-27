import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ForbidFireFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.905 4.896L11.275 2s1.42 2.038 2.72 4.086a5.789 5.789 0 01.542 5.226 5.705 5.705 0 00-2.398 10.636 6.536 6.536 0 01-3.454-.503l-.26-.114c-2.567-1.116-4.226-3.728-4.2-6.609v-.186a5.616 5.616 0 011.62-3.9l.18-.175a20.308 20.308 0 003.88-5.565zm7.45 6.915c.305.14.596.306.87.496v-2.084a9.01 9.01 0 01-.87 1.588zM10.226 17a4.756 4.756 0 013.789-4.656l-.007.01a4.754 4.754 0 11-.334 9.207l-.017.006A4.756 4.756 0 0110.227 17zm4.795 3.328a3.328 3.328 0 002.803-5.122l-4.598 4.597a3.313 3.313 0 001.795.525zm-2.803-1.533l4.598-4.598a3.328 3.328 0 00-4.598 4.598z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ForbidFireFilled.displayName = 'ForbidFireFilled';
export default ForbidFireFilled;
