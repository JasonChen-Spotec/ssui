import { createContext } from 'react';
import type { LangType } from '../messages';
import zhCN from '../messages/zh_CN';

const LocaleContext = createContext<LangType>(zhCN.lang);

export default LocaleContext;
