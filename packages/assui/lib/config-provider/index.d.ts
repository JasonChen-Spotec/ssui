import React from 'react';
export type LocaleType = 'en-US' | 'zh-CN' | 'zh-TW' | 'bg' | 'cs' | 'de' | 'es' | 'fr' | 'fi' | 'it' | 'id' | 'ja' | 'ko' | 'nl' | 'nb-NO' | 'ru' | 'sv' | 'pt' | 'ar' | 'th' | 'ro' | 'vi' | 'ug' | 'ms-MY';
export interface ConfigProviderProps {
    children?: React.ReactNode;
    locale: LocaleType;
}
declare const ConfigProvider: React.FC<ConfigProviderProps>;
export default ConfigProvider;
