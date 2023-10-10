import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BarsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.444 16.534a.844.844 0 00-.278-.18.833.833 0 00-.642 0 .844.844 0 00-.279.18.859.859 0 00-.177.283.869.869 0 00.177.934.97.97 0 00.279.18.783.783 0 00.642 0 .97.97 0 00.278-.18.861.861 0 00.178-.934.859.859 0 00-.178-.283zm2.778-8.82h10.934c.224 0 .438-.09.597-.25a.864.864 0 000-1.213.838.838 0 00-.597-.251H8.222a.838.838 0 00-.597.251.864.864 0 000 1.212c.159.16.373.251.597.251zm-2.778 3.677a.84.84 0 00-.92-.18.97.97 0 00-.279.18.86.86 0 00-.177.283.816.816 0 000 .652c.043.104.102.2.177.282a.97.97 0 00.279.18.784.784 0 00.642 0 .97.97 0 00.278-.18.989.989 0 00.178-.282.816.816 0 000-.652.86.86 0 00-.178-.283zm13.712-.248H8.222a.838.838 0 00-.597.25.864.864 0 000 1.213c.159.16.373.251.597.251h10.934c.224 0 .438-.09.597-.251a.864.864 0 000-1.212.838.838 0 00-.597-.251zM5.444 6.249a.843.843 0 00-.278-.18.833.833 0 00-.92.18.988.988 0 00-.178.282.816.816 0 000 .652c.043.104.102.2.177.283a.97.97 0 00.279.18.833.833 0 00.92-.18.988.988 0 00.178-.283.816.816 0 000-.652.988.988 0 00-.178-.282zm13.712 10.036H8.222a.838.838 0 00-.597.252.864.864 0 000 1.212c.159.16.373.25.597.25h10.934c.224 0 .438-.09.597-.25a.864.864 0 000-1.212.838.838 0 00-.597-.252z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BarsOutlined.displayName = 'BarsOutlined';
export default BarsOutlined;