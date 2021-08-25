import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function LockOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8.56 9.67A1.23 1.23 0 007.44 11a1.22 1.22 0 001.12 1.3A1.22 1.22 0 009.67 11a1.23 1.23 0 00-1.11-1.33zm0 1.86c-.2 0-.37-.26-.37-.55s.17-.56.37-.56.37.26.37.56-.17.55-.37.55z"
      />
      <path
        fill="currentColor"
        d="M16 6.94A6.65 6.65 0 009.29.37 6.68 6.68 0 003 4.53c-2.57.52-3 .79-3 1.26v7.08a1.28 1.28 0 001.06 1.26l8.22 1.48h.23a1.28 1.28 0 001.28-1.28v-1A6.59 6.59 0 0016 6.94zM2.78 5.34a5.57 5.57 0 00-.14.71l-1.16-.17L1 5.79a16.17 16.17 0 011.78-.45zm7.27 9a.54.54 0 01-.54.53h-.1l-8.22-1.48a.53.53 0 01-.45-.52V6.49a5.25 5.25 0 00.62.12l8.23 1.24a.54.54 0 01.46.52zM9.7 7.11l-4.47-.67A4.11 4.11 0 0113.4 7a4 4 0 01-2.61 3.72V8.37A1.28 1.28 0 009.7 7.11zm1.09 5.46v-1.09A4.78 4.78 0 0014.14 7a4.85 4.85 0 00-9.64-.67l-1.12-.17a5.88 5.88 0 015.91-5 5.9 5.9 0 016 5.82 5.86 5.86 0 01-4.5 5.59z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LockOutlined.displayName = 'LockOutlined';
export default LockOutlined;
