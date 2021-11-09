import addPrefixToEumValue from '../index';

describe('addPrefixToEumValue', () => {
  it('easeInOutCubic return value', () => {
    const types = {
      GET_CURRENT_USER: 'getCurrentUser',
      TRY_LOGIN: 'tryLogin',
    };

    expect(addPrefixToEumValue(types, 'dashboard')).toEqual({
      GET_CURRENT_USER: 'dashboard/getCurrentUser',
      TRY_LOGIN: 'dashboard/tryLogin',
    });
  });
});
