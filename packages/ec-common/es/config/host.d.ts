declare const fileHostMap: {
    readonly dev: "http://192.168.0.129:9000";
    readonly test1: "http://192.168.0.126:9000";
    readonly test2: "http://192.168.0.126:9000";
    readonly pre: "http://file.parkroadco.com";
    readonly tmdPre: "http://file.tmdtrader.com";
    readonly pro: "https://file.ecmarkets.net";
    readonly mruPro: "https://file.ecmarkets.mu";
    readonly ukProTmp: "https://file.ecmarkets.co.uk";
    readonly ukPro: "https://file.ecmarkets.co.uk";
};
/** 单点登录使用 */
declare const mainDomainMap: {
    readonly dev: "localhost";
    readonly test1: "192.168.0.129";
    readonly test2: "192.168.0.126";
    readonly pre: ".parkroadco.com";
    readonly tmdPre: ".tmdtrader.com";
    readonly pro: ".ecmarkets.net";
    readonly mruPro: ".ecmarkets.mu";
    readonly ukProTmp: ".ecmarkets.co.uk";
    readonly ukPro: ".ecmarkets.co.uk";
};
/** 阅读模式单点登录使用 */
declare const readDomainMap: {
    readonly test: "192.168.0.126";
    readonly pre: ".read.parkroadco.com";
    readonly pro: ".ecmarkets.asia";
};
declare const apiHostMap: {
    readonly dev: "http://192.168.0.129:31000";
    readonly test1: "http://192.168.0.129:31000";
    readonly test2: "http://192.168.0.126:31000";
    readonly pre: "http://api.parkroadco.com";
    readonly tmdPre: "http://api.tmdtrader.com";
    readonly pro: "https://api.ecmarkets.net";
    readonly mruPro: "https://api.ecmarkets.mu";
    readonly ukProTmp: "https://api1.ecmarkets.co.uk";
    readonly ukPro: "https://api.ecmarkets.co.uk";
};
declare const socketHostMap: {
    readonly dev: "ws://192.168.0.129:31000";
    readonly test1: "ws://192.168.0.129:31000";
    readonly test2: "ws://192.168.0.126:31000";
    readonly pre: "ws://api.parkroadco.com";
    readonly tmdPre: "ws://api.tmdtrader.com";
    readonly pro: "wss://api.ecmarkets.net";
    readonly mruPro: "wss://api.ecmarkets.mu";
    readonly ukProTmp: "wss://api1.ecmarkets.co.uk";
    readonly ukPro: "wss://api.ecmarkets.co.uk";
};
declare const allSiteMap: Record<any, any>;
export { allSiteMap, apiHostMap, fileHostMap, mainDomainMap, readDomainMap, socketHostMap, };
