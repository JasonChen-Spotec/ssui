import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ReceiptOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 16.35l9.414-9.413L16 5.522l-9.414 9.415L8 16.35zM9 6.437a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 12.437a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.241 2H8.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 6.29 3 6.954 3 7.758V21a1 1 0 001.588.809l2.133-1.552 1.904 1.524a1 1 0 001.213.028L12 20.236l2.162 1.573a1 1 0 001.213-.028l1.904-1.523 2.133 1.55A1 1 0 0021 21V7.759c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C16.71 2 16.046 2 15.242 2zM6.092 4.218c.156-.08.38-.145.819-.18C7.361 4 7.943 4 8.8 4h6.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C19 6.361 19 6.943 19 7.8v11.236l-1.162-.845a1 1 0 00-1.213.028l-1.904 1.523-2.133-1.55a1 1 0 00-1.176 0l-2.133 1.55-1.904-1.523a1 1 0 00-1.213-.028L5 19.036V7.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ReceiptOutlined.displayName = "ReceiptOutlined";
export default ReceiptOutlined;
