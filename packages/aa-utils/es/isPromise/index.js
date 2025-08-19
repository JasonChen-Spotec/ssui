function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    ((obj.constructor && obj.constructor.name === 'Promise') ||
      typeof obj.then === 'function')
  );
}
export default isPromise;
