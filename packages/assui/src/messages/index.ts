import zhCN from '../messages/zh_CN';

export default function formatMessage(message?: { [key: string]: string }, key: string) {
  return message ? message[key] : zhCN[key];
}
