import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DocumentEditOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.759 2h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C22 6.29 22 6.954 22 7.758v4.618h-2V10H4v6.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C6.361 20 6.943 20 7.8 20H13v2H7.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.71 2 17.046 2 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 2 6.954 2 7.758 2zM20 8H4v-.2c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18C6.361 4 6.943 4 7.8 4h8.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C20 6.361 20 6.943 20 7.8V8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.707 15.293l-2-2a1 1 0 00-1.414 0l-5 5A1 1 0 0014 19v2a1 1 0 001 1h2a1 1 0 00.707-.293l5-5a1 1 0 000-1.414zM16 20v-.586l4-4 .586.586-4 4H16z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocumentEditOutlined.displayName = "DocumentEditOutlined";
export default DocumentEditOutlined;
