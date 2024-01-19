import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function QuestionMarkOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.706 8.759a.75.75 0 01-1.418-.488L9 8.507l-.712-.237v-.001l.002-.003.001-.005.004-.012a1.31 1.31 0 01.047-.115c.03-.067.074-.153.134-.252.121-.2.31-.45.597-.697.585-.504 1.513-.935 2.927-.935 1.376 0 2.419.375 3.07 1.153.638.762.762 1.75.677 2.673-.056.608-.378 1.104-.729 1.476-.354.376-.789.682-1.187.92-.4.237-.791.42-1.081.545v.99a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.506-.71m0 0h.003l.019-.007.079-.03a7.941 7.941 0 001.208-.579c.334-.198.64-.422.861-.657.225-.239.313-.435.327-.586.067-.73-.06-1.245-.334-1.573-.262-.313-.795-.615-1.919-.615-1.086 0-1.658.322-1.948.572-.151.13-.243.255-.294.34a.835.835 0 00-.052.097"
        fill="currentColor"
      />
      <path d="M13 17a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

QuestionMarkOutlined.displayName = 'QuestionMarkOutlined';
export default QuestionMarkOutlined;
