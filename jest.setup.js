// jsdom has no layout engine. Ant Design 6 uses the browser's ResizeObserver;
// geometry-dependent behavior is verified in the browser instead of jsdom.
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Select defers popup closing through MessageChannel. Timer-backed ports keep
// the asynchronous behavior without leaving native worker ports open in Jest.
global.MessageChannel = class MessageChannel {
  constructor() {
    const port1 = { onmessage: null, close() {}, start() {} };
    const port2 = { onmessage: null, close() {}, start() {} };
    port1.postMessage = (data) => setTimeout(() => port2.onmessage?.({ data }), 0);
    port2.postMessage = (data) => setTimeout(() => port1.onmessage?.({ data }), 0);
    this.port1 = port1;
    this.port2 = port2;
  }
};
