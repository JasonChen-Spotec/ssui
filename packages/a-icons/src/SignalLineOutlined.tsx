import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function SignalLineOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.343 2.929l-.707.707a9 9 0 000 12.728l.707.707-1.414 1.414-.707-.707c-4.296-4.295-4.296-11.26 0-15.556l.707-.707 1.414 1.414zM19.07 1.515l.707.707c4.296 4.296 4.296 11.26 0 15.556l-.707.707-1.414-1.414.707-.707a9 9 0 000-12.728l-.707-.707 1.414-1.414zm-9.9 4.242l-.707.707a5 5 0 000 7.072l.708.707-1.415 1.414-.707-.707a7 7 0 010-9.9l.707-.707 1.415 1.414zm7.072-1.414l.707.707a7 7 0 010 9.9l-.707.707-1.415-1.414.708-.707a5 5 0 000-7.072l-.708-.707 1.415-1.414zM12 9a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 114 2.83V22h-2v-9.17A3.001 3.001 0 019 10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalLineOutlined.displayName = "SignalLineOutlined";
export default SignalLineOutlined;
