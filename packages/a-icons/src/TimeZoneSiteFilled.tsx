import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TimeZoneSiteFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.995 2.25a8.994 8.994 0 00-8.995 9c0 4.973 4.023 9 8.995 9 4.973 0 9.005-4.027 9.005-9s-4.032-9-9.005-9zm6.233 5.4h-2.655a14.296 14.296 0 00-1.242-3.204 7.207 7.207 0 013.897 3.204zM12 4.081a12.463 12.463 0 011.719 3.569h-3.438A12.463 12.463 0 0112 4.081zM5.034 13.05a7.203 7.203 0 01-.234-1.8c0-.621.085-1.224.234-1.8h3.037c-.072.59-.121 1.188-.121 1.8 0 .612.05 1.21.126 1.8H5.034zm.734 1.8h2.654a14.416 14.416 0 001.243 3.208 7.215 7.215 0 01-3.897-3.208zm2.654-7.2H5.768a7.215 7.215 0 013.897-3.208A14.416 14.416 0 008.422 7.65zM12 18.419a12.704 12.704 0 01-1.719-3.569h3.438A12.704 12.704 0 0112 18.419zm2.106-5.369H9.894a12.506 12.506 0 01-.144-1.8c0-.612.059-1.21.144-1.8h4.212c.085.59.144 1.188.144 1.8 0 .612-.059 1.21-.144 1.8zm.23 5.004a14.38 14.38 0 001.242-3.204h2.655a7.24 7.24 0 01-3.898 3.204zm1.588-5.004a14.8 14.8 0 00.126-1.8c0-.612-.05-1.21-.126-1.8h3.038c.148.576.238 1.179.238 1.8s-.085 1.224-.238 1.8h-3.038z"
        fill="currentColor"
      />
      <path
        d="M21.644 17.313a5.313 5.313 0 11-10.626 0 5.313 5.313 0 0110.626 0z"
        fill="inherit"
      />
      <path
        d="M19.444 16.66a.176.176 0 00-.004-.03v-.005l-.003-.016c-.047-.246-.2-.404-.392-.404h-.031c-.325 0-.589-.281-.589-.625 0-.08.035-.192.05-.232.092-.228-.007-.489-.235-.622l-.718-.43-.013-.005c-.054-.019-.116-.041-.186-.041a.533.533 0 00-.366.16c-.113.118-.343.295-.48.295-.135 0-.365-.176-.478-.295a.51.51 0 00-.367-.16.534.534 0 00-.185.04l-.012.005-.753.433-.005.003c-.182.121-.257.4-.164.62l.002.003.001.003c.015.035.06.152.06.255 0 .345-.265.625-.589.625h-.031c-.2 0-.349.156-.392.407l-.002.014v.005c0 .007-.003.017-.005.03-.017.107-.057.36-.057.566a3.906 3.906 0 00.062.596v.006l.002.016c.048.245.201.404.392.404h.016c.325 0 .589.28.589.625 0 .079-.035.192-.05.232a.545.545 0 00.193.63l.005.003.71.419.013.005c.053.018.114.04.184.04.148 0 .282-.06.366-.16.008-.006.016-.014.025-.023.086-.08.316-.29.468-.29.113 0 .303.126.493.328.097.101.23.16.367.16.092 0 .16-.027.238-.067l.003-.002.727-.427.003-.002c.183-.122.257-.4.164-.62l-.002-.004v-.003a.53.53 0 01-.048-.239l.001-.007v-.007c0-.345.265-.625.589-.625h.034c.199 0 .348-.156.391-.406l.003-.015v-.005l.004-.025c.018-.104.058-.348.058-.57a3.745 3.745 0 00-.056-.566zM16.5 18.24c-.514 0-.931-.442-.931-.988s.417-.989.931-.989c.515 0 .932.443.932.989s-.417.988-.932.988z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TimeZoneSiteFilled.displayName = 'TimeZoneSiteFilled';
export default TimeZoneSiteFilled;
