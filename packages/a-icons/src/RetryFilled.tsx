import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function RetryFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7a2 2 0 002 2h6v8.241c0 .805 0 1.47-.044 2.011-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3 18.711 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1H13v6zm2.545 8.608a3.568 3.568 0 01-5.33 2.685l.816-1.412a.3.3 0 00-.255-.45l-3.245-.053c-.196-.003-.342.18-.282.366a4.995 4.995 0 009.728-1.111l-1.432-.025zm-1.048-4.73a4.994 4.994 0 00-7.475 3.897l1.433.024a3.568 3.568 0 015.33-2.684l-.816 1.411a.3.3 0 00.255.45l3.245.054a.283.283 0 00.282-.366 4.977 4.977 0 00-2.254-2.785z"
        fill="currentColor"
      />
      <path d="M20.414 7H15V1.586L20.414 7z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RetryFilled.displayName = "RetryFilled";
export default RetryFilled;
