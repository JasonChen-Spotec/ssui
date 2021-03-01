// returns identifier strings that aren't necessarily "real" JavaScript types
export default function getType(instance) {
  const type = typeof instance;
  if (!instance) {
    return 'falsey';
  } if (Array.isArray(instance)) {
    if (instance.length === 2 && typeof instance[0] === 'number' && typeof instance[1] === 'number') {
      return 'range';
    }
    return 'array';

  } if (type === 'object') {
    if (instance instanceof RegExp) {
      return 'regexp';
    } if (instance.hasOwnProperty('highlight')) {
      return 'custom';
    }
  } else if (type === 'function' || type === 'string') {
    return type;
  }

  return 'other';
}