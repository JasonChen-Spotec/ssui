import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleQuestionFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.78 11.17h-.996a3.988 3.988 0 01-3.988-3.988V4.55a3.34 3.34 0 013.35-3.35h2.273a3.34 3.34 0 013.35 3.35v2.632a3.988 3.988 0 01-3.988 3.987z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.957 12.831h-7.07a3.28 3.28 0 00-3.161 2.702l-.24 1.136a3.38 3.38 0 003.17 4.137h5.762a6.619 6.619 0 01-.71-2.99 6.63 6.63 0 012.25-4.985z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.354 22.8a4.985 4.985 0 100-9.969 4.985 4.985 0 000 9.97zm-1.678-7.68c.429-.419 1.007-.628 1.745-.628.648 0 1.176.17 1.575.528.398.349.598.827.598 1.436 0 .498-.13.907-.37 1.226-.089.1-.378.369-.856.787-.18.15-.31.32-.4.499-.099.2-.149.409-.149.648v.14h-1.146v-.14c0-.379.06-.708.2-.977.129-.27.518-.688 1.166-1.266l.12-.14c.179-.22.268-.458.268-.708 0-.329-.1-.588-.279-.777-.19-.19-.458-.28-.797-.28-.439 0-.748.13-.937.41-.17.229-.25.558-.25.976h-1.136c0-.737.21-1.316.648-1.734zm1.017 5.333c.15-.14.329-.21.548-.21.22 0 .409.07.558.21.14.14.22.32.22.539 0 .219-.08.408-.23.548a.768.768 0 01-.548.21.777.777 0 01-.548-.22.7.7 0 01-.22-.538.7.7 0 01.22-.539z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleQuestionFilled.displayName = 'PeopleQuestionFilled';
export default PeopleQuestionFilled;
