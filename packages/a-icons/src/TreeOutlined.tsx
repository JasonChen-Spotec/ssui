import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function TreeOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 11.001 2c-.528.003-.93.01-1.26.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C13 7.361 13 7.943 13 8.8V11h3.17a3.001 3.001 0 110 2H13v2.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18.33.027.732.035 1.26.037A3.001 3.001 0 0122 20a3 3 0 01-5.83 1 19.079 19.079 0 01-1.422-.044c-.562-.046-1.079-.145-1.564-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C11 16.71 11 16.046 11 15.242V13H7.83a3.001 3.001 0 110-2H11V8.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392.404-.033.875-.041 1.423-.043zM5 11a1 1 0 100 2 1 1 0 000-2zm14 0a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TreeOutlined.displayName = "TreeOutlined";
export default TreeOutlined;
