import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 16v-2a8 8 0 00-8 8h2a6 6 0 016-6z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7c0 3.315 2.685 6 6 6s6-2.685 6-6-2.685-6-6-6-6 2.685-6 6zm10 0c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zM17.231 14.253a.377.377 0 00-.436-.192c-.65.18-1.236.514-1.716.96a.377.377 0 00-.081.443.754.754 0 01-.677 1.087h-.011a.377.377 0 00-.365.264 4.147 4.147 0 00-.106 2.08c.039.19.214.32.406.3a.754.754 0 01.652 1.237.377.377 0 00.017.505c.49.509 1.108.893 1.804 1.1a.377.377 0 00.467-.246.755.755 0 011.438 0c.063.195.27.305.467.247a4.15 4.15 0 001.804-1.1.377.377 0 00.017-.506.754.754 0 01.652-1.237.377.377 0 00.406-.3 4.163 4.163 0 00-.106-2.08.377.377 0 00-.365-.264h-.01a.754.754 0 01-.678-1.087.377.377 0 00-.081-.443 4.144 4.144 0 00-1.716-.96.377.377 0 00-.436.192.754.754 0 01-1.346 0zm.673 5.127a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleOutlined.displayName = 'PeopleOutlined';
export default PeopleOutlined;
