import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TransferFileFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.454 9.545h4.91v6.743c0 .659 0 1.203-.037 1.645-.037.46-.118.883-.32 1.28a3.272 3.272 0 01-1.43 1.43c-.397.203-.82.283-1.28.32-.443.037-.986.037-1.645.037H9.348c-.659 0-1.202 0-1.645-.036-.46-.038-.883-.118-1.28-.32a3.273 3.273 0 01-1.43-1.43c-.202-.398-.283-.82-.32-1.28-.037-.444-.037-.987-.037-1.646V7.712c0-.659 0-1.203.037-1.645.037-.46.118-.883.32-1.28a3.273 3.273 0 011.43-1.43c.397-.203.82-.283 1.28-.32C8.146 3 8.689 3 9.348 3h3.47v4.91c0 .903.733 1.635 1.636 1.635zm-2.247 1.582l3.056 2.064a.65.65 0 01-.363 1.189H8.45v-1.3h4.326l-1.297-.876.728-1.077zm-.414 7.287L8.737 16.35A.65.65 0 019.1 15.16h6.45v1.3h-4.326l1.297.876-.728 1.077z"
        fill="currentColor"
      />
      <path d="M14.454 3.48l4.43 4.43h-4.43V3.48z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TransferFileFilled.displayName = 'TransferFileFilled';
export default TransferFileFilled;
