// @ts-nocheck
import { createBrowserHistory } from '/Users/jianchen/work/assui/node_modules/@umijs/runtime';

let options = {
  "basename": "/assui"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: any = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
