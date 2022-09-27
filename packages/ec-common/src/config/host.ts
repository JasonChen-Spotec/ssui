const fileHostMap = {
  dev: 'http://192.168.0.129:9000',
  test1: 'http://192.168.0.129:9000',
  test2: 'http://192.168.0.126:9000',
  pre: 'http://27.102.129.76:9000',
  pro: 'https://file.ecmarkets.sc',
} as const;

/** 单点登录使用 */
const mainDomainMap = {
  dev: 'localhost',
  test1: '192.168.0.129',
  test2: '192.168.0.126',
  pre: '27.102.129.76',
  pro: '.ecmarkets.sc',
} as const;

const apiMap = {
  dev: '192.168.0.129:31000',
  test1: '192.168.0.129:31000',
  test2: '192.168.0.126:31000',
  pre: '27.102.129.76:31000',
  pro: 'api.ecmarkets.sc',
};

const apiHostMap = {
  dev: `http://${apiMap.dev}`,
  test1: `http://${apiMap.test1}`,
  test2: `http://${apiMap.test2}`,
  pre: `http://${apiMap.pre}`,
  pro: `https://${apiMap.pro}`,
};

const socketHostMap = {
  dev: `ws://${apiMap.dev}`,
  test1: `ws://${apiMap.test1}`,
  test2: `ws://${apiMap.test2}`,
  pre: `ws://${apiMap.pre}`,
  pro: `wss://${apiMap.pro}`,
};

const allSiteMap: Record<any, any> = {
  static: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.80:9030',
  },
  dev: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
  },
  test1: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
  },
  test2: {
    admin: 'http://192.168.0.129:8020',
    ib: 'http://192.168.0.129:9020',
    client: 'http://192.168.0.129:8030',
    website: 'http://192.168.0.129:8070',
  },
  pre: {
    admin: 'http://27.102.129.76:8020',
    ib: 'http://27.102.129.76:8050',
    client: 'http://27.102.129.76:8030',
    website: 'http://27.102.129.76:8070',
  },
  pro: {
    admin: 'https://Bh0wKonL8na8hFsOFOoqU1iz.ecmarkets.sc',
    client: 'https://crm.ecmarkets.sc',
    ib: 'https://ib.ecmarkets.sc',
    website: 'https://www.ecmarkets.sc',
  },
};

export { apiHostMap, allSiteMap, socketHostMap, mainDomainMap, fileHostMap };