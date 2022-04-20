import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FormOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79 15.27l.73-3.41a2.55 2.55 0 01.69-1.25L15.88 4a3.71 3.71 0 012.56-1.11 2.73 2.73 0 011.95.78 3.23 3.23 0 01-.33 4.51l-6.67 6.67a2.55 2.55 0 01-1.25.69l-3.41.73h-.19a.76.76 0 01-.75-1zm2.48-3.59a1 1 0 00-.28.5l-.49 2.33 2.33-.5a1 1 0 00.5-.28L19 7.06a1.76 1.76 0 00.33-2.4 1.23 1.23 0 00-.89-.34 2.19 2.19 0 00-1.5.68l-6.67 6.68z"
        fill="currentColor"
      />
      <path
        d="M19.91 10.93a.76.76 0 00-.75.75v5.69a3 3 0 01-3 3.05H6.63a3.06 3.06 0 01-3-3.05V7.88a3.05 3.05 0 013.05-3h5.69a.75.75 0 000-1.5H6.63a4.55 4.55 0 00-4.55 4.5v9.49a4.55 4.55 0 004.55 4.55h9.49a4.55 4.55 0 004.54-4.55v-5.69a.76.76 0 00-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FormOutlined.displayName = 'FormOutlined';
export default FormOutlined;
