const fileHostMap = {
  dev: 'http://192.168.0.129:9000',
  test1: 'http://192.168.0.129:9000',
  test2: 'http://192.168.0.126:9000',
  pre: 'http://27.102.129.76:9000',
  tmdPre: 'file.tmdtrader.com',
  pro: 'https://file.ecmarkets.sc',
  mruPro: 'http://file.ecmarkets.mu',
} as const;

/** 单点登录使用 */
const mainDomainMap = {
  dev: 'localhost',
  test1: '192.168.0.129',
  test2: '192.168.0.126',
  pre: '27.102.129.76',
  tmdPre: '.tmdtrader.com',
  pro: '.ecmarkets.sc',
  mruPro: '.ecmarkets.mu',
} as const;

const apiMap = {
  dev: '192.168.0.129:31000',
  test1: '192.168.0.129:31000',
  test2: '192.168.0.126:31000',
  pre: '27.102.129.76:31000',
  tmdPre: 'api.tmdtrader.com',
  pro: 'api.ecmarkets.sc',
  mruPro: 'api.ecmarkets.mu',
};

const apiHostMap = {
  dev: `http://${apiMap.dev}`,
  test1: `http://${apiMap.test1}`,
  test2: `http://${apiMap.test2}`,
  pre: `http://${apiMap.pre}`,
  tmdPre: `http://${apiMap.tmdPre}`,
  pro: `https://${apiMap.pro}`,
  mruPro: `http://${apiMap.mruPro}`,
};

const socketHostMap = {
  dev: `ws://${apiMap.dev}`,
  test1: `ws://${apiMap.test1}`,
  test2: `ws://${apiMap.test2}`,
  pre: `ws://${apiMap.pre}`,
  tmdPre: `ws://${apiMap.tmdPre}`,
  pro: `wss://${apiMap.pro}`,
  mruPro: `ws://${apiMap.mruPro}`,
};

const allSiteMap: Record<any, any> = {
  static: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.80:9030',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  dev: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  test1: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
    webviewMobile: 'http://192.168.0.80:6060',
  },
  test2: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
    webviewMobile: 'http://27.102.129.76:8040',
  },
  pre: {
    admin: 'http://27.102.129.76:8020',
    ib: 'http://27.102.129.76:8050',
    client: 'http://27.102.129.76:8030',
    website: 'http://27.102.129.76:8070',
    webviewMobile: 'http://27.102.129.76:8040',
  },
  tmdPre: {
    admin: 'http://admin.tmdtrader.com',
    ib: 'http://ib.tmdtrader.com',
    client: 'http://crm.tmdtrader.com',
    website: 'http://www.tmdtrader.com',
    webviewMobile: 'http://m.tmdtrader.com',
  },
  mruPro: {
    admin: 'http://u8qtafHHyMrTzpuQ9zKB.ecmarkets.mu',
    ib: 'http://ib.ecmarkets.mu',
    client: 'http://crm.ecmarkets.mu',
    website: 'http://www.ecmarkets.mu',
    webviewMobile: 'http://m.ecmarkets.mu',
  },
  pro: {
    admin: 'https://Bh0wKonL8na8hFsOFOoqU1iz.ecmarkets.sc',
    client: 'https://crm.ecmarkets.sc',
    ib: 'https://ib.ecmarkets.sc',
    website: 'https://www.ecmarkets.sc',
    webviewMobile: 'https://m.ecmarkets.sc',
  },
};

export { apiHostMap, allSiteMap, socketHostMap, mainDomainMap, fileHostMap };
