import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EyeSlashOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9.42a2.576 2.576 0 00-2.39 3.555l3.365-3.364c-.3-.124-.629-.191-.975-.191zM7.42 12a4.576 4.576 0 017.817-3.237 1 1 0 010 1.414l-5.06 5.06a1 1 0 01-1.414 0A4.559 4.559 0 017.42 12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.046 8.873C4.471 5.062 8.046 2.73 12 2.73c2.31 0 4.517.805 6.422 2.242a1 1 0 01-1.204 1.597C15.623 5.366 13.83 4.73 12 4.73c-3.106 0-6.111 1.829-8.266 5.217l-.001.002c-.323.505-.518 1.25-.518 2.056s.195 1.552.518 2.057v.001c.742 1.164 1.599 2.158 2.519 2.95a1 1 0 11-1.304 1.516c-1.08-.93-2.063-2.075-2.902-3.391-.576-.904-.831-2.049-.831-3.133 0-1.083.255-2.228.831-3.132zM19.423 7.15a1 1 0 011.406.153c.389.483.771 1.003 1.125 1.56.576.904.831 2.048.831 3.132s-.255 2.228-.832 3.132C19.53 18.938 15.954 21.27 12 21.27c-1.372 0-2.713-.29-3.968-.819a1 1 0 01.776-1.843A8.215 8.215 0 0012 19.27c3.106 0 6.111-1.828 8.266-5.217l.001-.001c.323-.506.518-1.251.518-2.057s-.195-1.552-.518-2.057l-.001-.002a15.253 15.253 0 00-.995-1.38 1 1 0 01.152-1.405z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.691 11.716a1 1 0 01.802 1.165 4.564 4.564 0 01-3.622 3.622 1 1 0 11-.363-1.967 2.565 2.565 0 002.018-2.018 1 1 0 011.165-.802zM10.177 13.822a1 1 0 010 1.414l-7.47 7.47a1 1 0 01-1.414-1.414l7.47-7.47a1 1 0 011.414 0zM22.707 1.293a1 1 0 010 1.414l-7.47 7.47a1 1 0 01-1.414-1.414l7.47-7.47a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EyeSlashOutlined.displayName = 'EyeSlashOutlined';
export default EyeSlashOutlined;
