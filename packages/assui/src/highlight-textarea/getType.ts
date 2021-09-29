import type { HighlightType, TypeList, ObjectType } from './types';

export default function getType(instance: HighlightType): TypeList {
  const type = typeof instance;
  if (!instance) {
    return 'falsely';
  }
  if (Array.isArray(instance)) {
    if (
      instance.length === 2 &&
      typeof instance[0] === 'number' &&
      typeof instance[1] === 'number'
    ) {
      return 'range';
    }
    return 'array';
  }
  if (type === 'object') {
    if (instance instanceof RegExp) {
      return 'regexp';
    }

    if ((<ObjectType>instance).highlight) {
      return 'custom';
    }
  } else if (type === 'function' || type === 'string') {
    return type;
  }

  return 'other';
}
