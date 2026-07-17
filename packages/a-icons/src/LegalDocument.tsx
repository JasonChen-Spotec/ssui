import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LegalDocument(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#legal-document_svg__clip0_4046_27238)">
        <path
          d="M13.457 6.854a1 1 0 001 1h5.441v9.836c0 2.81-1 3.81-3.77 3.81h-8.47c-2.76 0-3.76-1-3.76-3.81V5.31c0-2.81 1-3.81 3.76-3.81h5.799v5.354zm-7.402 6.294v1.3h7.943v-1.3H6.055zm0-2h9.943v-1.3H6.055v1.3zm0-3.3h4.564v-1.3H6.055v1.3z"
          fill="currentColor"
        />
        <path d="M19.9 6.555h-5.142V1.5l5.141 5.055z" fill="currentColor" />
        <circle cx={18.5} cy={18} r={4.5} fill="#DC4946" />
        <path
          d="M18.93 15.148c.103 0 .205.03.234.132l1.11 1.115c.131.176.131.41 0 .542l-.438.44c-.044.074-.131.103-.204.103h-.073c-.074 0-.132-.044-.204-.073l-.205.205.467.47 1.24 1.217c.176.205.176.513.074.645l-.102.103a.43.43 0 01-.336.132.429.429 0 01-.336-.132l-.496-.499-1.212-1.218-.204.206c.058.161.058.337-.073.47l-.438.44c-.059.073-.16.102-.263.102a.35.35 0 01-.262-.102l-1.11-1.115c-.132-.176-.132-.41 0-.543l.438-.44c.058-.073.16-.103.262-.103.073 0 .132.044.205.074l1.138-1.144a.443.443 0 01.088-.484l.438-.44c.058-.073.16-.103.263-.103z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="legal-document_svg__clip0_4046_27238">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LegalDocument.displayName = 'LegalDocument';
export default LegalDocument;
