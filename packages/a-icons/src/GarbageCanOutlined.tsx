import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GarbageCanOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h8v2H8V2zM4.992 5H2v2h2.064l.642 9.625c.05.756.092 1.381.167 1.89.078.53.201 1.014.458 1.465a4 4 0 001.731 1.62c.468.226.959.317 1.493.36.512.04 1.139.04 1.896.04h3.098c.757 0 1.384 0 1.896-.04.534-.043 1.026-.134 1.493-.36a4 4 0 001.73-1.62c.258-.451.381-.935.46-1.465.074-.509.116-1.134.166-1.89L19.936 7H22V5H4.992zm12.94 2H6.068l.63 9.453c.054.805.09 1.35.153 1.771.06.41.133.619.217.766a2 2 0 00.865.81c.153.074.367.133.779.166.424.033.97.034 1.778.034h3.018c.807 0 1.354 0 1.778-.034.412-.033.626-.092.779-.166a2 2 0 00.865-.81c.084-.147.157-.357.217-.766.062-.42.1-.966.153-1.771L17.93 7zM11 9.5v7H9v-7h2zm4 0v7h-2v-7h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GarbageCanOutlined.displayName = 'GarbageCanOutlined';
export default GarbageCanOutlined;
