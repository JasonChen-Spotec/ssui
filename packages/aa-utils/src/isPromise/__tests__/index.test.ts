import isPromise from '../index';

describe('isPromise', () => {
  it('isPromise -  should be defined', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy();
    expect(isPromise({ then: true })).toBeFalsy();
    expect(isPromise(() => {})).toBeFalsy();
  });
});
