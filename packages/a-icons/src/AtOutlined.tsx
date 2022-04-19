import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function AtOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.503 8.998v4.666c0 .527.178.906.459 1.15.276.242.634.337.968.337 1.12 0 2.233-1.045 2.233-3.153 0-4.501-3.662-8.163-8.162-8.163-4.501 0-8.163 3.662-8.163 8.163 0 4.5 3.662 8.162 8.163 8.162 1.82 0 3.541-.586 4.979-1.694A.836.836 0 0118 19.791a9.742 9.742 0 01-6 2.042c-5.423 0-9.835-4.412-9.835-9.835 0-5.423 4.412-9.835 9.835-9.835 5.423 0 9.835 4.412 9.835 9.835 0 3.2-1.987 4.825-3.905 4.825-.875 0-1.751-.348-2.346-1.02l-.125-.141-.122.142a4.823 4.823 0 01-3.67 1.696 4.841 4.841 0 01-4.836-4.836v-1.333a4.841 4.841 0 014.836-4.835 4.82 4.82 0 013.625 1.647l.067.075.097-.025a.826.826 0 01.21-.03c.462 0 .836.374.836.835zm-4.835-.83a3.167 3.167 0 00-3.164 3.163v1.333a3.167 3.167 0 003.164 3.164 3.166 3.166 0 003.163-3.164v-1.333a3.167 3.167 0 00-3.163-3.163z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AtOutlined.displayName = 'AtOutlined';
export default AtOutlined;
