import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleSettingFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.827 13.698v7.814H3c0-2.073.825-4.06 2.293-5.526a7.834 7.834 0 015.534-2.288zm2.54 4.7a3.422 3.422 0 010-1.585l-.971-.56.978-1.692.97.56c.39-.369.861-.64 1.376-.793v-1.119h1.956v1.119c.52.154.99.43 1.375.793l.97-.56.979 1.692-.97.56c.123.52.123 1.063 0 1.584l.97.56-.978 1.691-.971-.56c-.39.369-.86.64-1.375.794V22H15.72v-1.118a3.423 3.423 0 01-1.375-.794l-.97.56-.98-1.692.971-.558zm3.33-1.77a.98.98 0 00-.977.977.976.976 0 00.978.976.98.98 0 00.978-.976.976.976 0 00-.978-.977z"
        fill="currentColor"
      />
      <circle cx={11} cy={7} r={5} fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleSettingFilled.displayName = 'PeopleSettingFilled';
export default PeopleSettingFilled;
