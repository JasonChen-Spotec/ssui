const fileHostMap = {
  dev: 'http://192.168.0.129:9000',
  test1: 'http://192.168.0.126:9000',
  test2: 'http://192.168.0.126:9000',
  pre: 'http://file.parkroadco.com',
  tmdPre: 'http://file.tmdtrader.com',
  pro: 'https://file.ecmarkets.net',
  mruPro: 'https://file.ecmarkets.mu',
  ukProTmp: 'https://file.ecmarkets.co.uk',
  ukPro: 'https://file.ecmarkets.co.uk',
} as const;

/** 单点登录使用 */
const mainDomainMap = {
  dev: 'localhost',
  test1: '192.168.0.129',
  test2: '192.168.0.126',
  pre: '.parkroadco.com',
  tmdPre: '.tmdtrader.com',
  pro: '.ecmarkets.net',
  mruPro: '.ecmarkets.mu',
  ukProTmp: '.ecmarkets.co.uk',
  ukPro: '.ecmarkets.co.uk',
} as const;

/** 阅读模式单点登录使用 */
const readDomainMap = {
  test: '192.168.0.126',
  pre: '.read.parkroadco.com',
  pro: '.ecmarkets.asia',
} as const;

const apiMap = {
  dev: '192.168.0.129:31000',
  test1: '192.168.0.129:31000',
  test2: '192.168.0.126:31000',
  pre: 'api.parkroadco.com',
  tmdPre: 'api.tmdtrader.com',
  pro: 'api.ecmarkets.net',
  mruPro: 'api.ecmarkets.mu',
  ukProTmp: 'api1.ecmarkets.co.uk',
  ukPro: 'api.ecmarkets.co.uk',
} as const;

const apiHostMap = {
  dev: `http://${apiMap.dev}`,
  test1: `http://${apiMap.test1}`,
  test2: `http://${apiMap.test2}`,
  pre: `http://${apiMap.pre}`,
  tmdPre: `http://${apiMap.tmdPre}`,
  pro: `https://${apiMap.pro}`,
  mruPro: `https://${apiMap.mruPro}`,
  ukProTmp: `https://${apiMap.ukProTmp}`,
  ukPro: `https://${apiMap.ukPro}`,
} as const;

const socketHostMap = {
  dev: `ws://${apiMap.dev}`,
  test1: `ws://${apiMap.test1}`,
  test2: `ws://${apiMap.test2}`,
  pre: `ws://${apiMap.pre}`,
  tmdPre: `ws://${apiMap.tmdPre}`,
  pro: `wss://${apiMap.pro}`,
  mruPro: `wss://${apiMap.mruPro}`,
  ukProTmp: `wss://${apiMap.ukProTmp}`,
  ukPro: `wss://${apiMap.ukPro}`,
} as const;

const allSiteMap: Record<any, any> = {
  static: {
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.80:9030',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  dev: {
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    readIb: 'http://192.168.0.126:7080',
    readClient: 'http://192.168.0.126:8030',
    website: 'http://192.168.0.129:8070',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  test1: {
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
    readIb: 'http://192.168.0.126:7080',
    readClient: 'http://192.168.0.126:8030',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  test2: {
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
    webviewMobile: 'http://27.102.129.76:8040',
  },
  pre: {
    ib: 'http://ib.parkroadco.com',
    client: 'http://crm.parkroadco.com',
    website: 'http://www.parkroadco.com',
    readIb: 'http://ib.read.parkroadco.com',
    readClient: 'http://crm.read.parkroadco.com',
    webviewMobile: 'http://m.parkroadco.com',
  },
  tmdPre: {
    ib: 'http://ib.tmdtrader.com',
    client: 'http://crm.tmdtrader.com',
    website: 'http://www.tmdtrader.com',
    webviewMobile: 'http://m.tmdtrader.com',
  },
  mruPro: {
    ib: 'https://ib.ecmarkets.mu',
    client: 'https://crm.ecmarkets.mu',
    website: 'https://www.ecmarkets.mu',
    webviewMobile: 'https://m.ecmarkets.mu',
  },
  ukProTmp: {
    ib: 'https://ib1.ecmarkets.co.uk',
    client: 'https://crm1.ecmarkets.co.uk',
    website: 'https://www1.ecmarkets.co.uk',
    webviewMobile: 'https://m.ecmarkets.uk',
  },
  ukPro: {
    ib: 'https://ib.ecmarkets.co.uk',
    client: 'https://crm.ecmarkets.co.uk',
    website: 'https://www.ecmarkets.co.uk',
    webviewMobile: 'https://m.ecmarkets.uk',
  },
  pro: {
    client: 'https://crm.ecmarkets.net',
    ib: 'https://ib.ecmarkets.net',
    website: 'https://www.ecmarkets.net',
    webviewMobile: 'https://m.ecmarkets.net',
    readIb: 'https://ib.ecmarkets.asia',
    readClient: 'https://crm.ecmarkets.asia',
  },
};

export {
  apiHostMap,
  allSiteMap,
  socketHostMap,
  mainDomainMap,
  fileHostMap,
  readDomainMap,
};
