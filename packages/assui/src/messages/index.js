import zhCN from '../messages/zh_CN';

export default function formatMessage(message, key) {
  return message ? message[key] : zhCN[key];
}
