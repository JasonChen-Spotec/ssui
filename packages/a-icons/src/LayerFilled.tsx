import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LayerFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.723 1.085a1.5 1.5 0 01.553 0c.217.04.41.139.503.186l.026.013 9.642 4.822a1 1 0 010 1.788l-9.642 4.822-.026.013a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.013-9.642-4.822a1 1 0 010-1.788l9.642-4.822.025-.013c.094-.047.287-.146.503-.186zM.658 12.447l.895-1.789L12 15.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 12.447zm0 5l.895-1.789L12 20.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 17.447z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LayerFilled.displayName = 'LayerFilled';
export default LayerFilled;
