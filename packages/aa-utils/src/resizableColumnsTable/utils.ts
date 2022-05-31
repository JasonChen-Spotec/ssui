/* eslint-disable no-param-reassign */
export const tryParseInt = (value: string | number, defaultValue: number = 0) => {
  const resultValue = parseInt(`${value}`, 10);

  if (isNaN(resultValue)) {
    return defaultValue;
  }
  return resultValue;
};

export function addClass(elm: HTMLElement, className: string) {
  if (!className) return;

  const els = Array.isArray(elm) ? elm : [elm];

  els.forEach((el) => {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += ` ${className}`;
    }
  });
}

export function removeClass(elm: HTMLElement, className: string) {
  if (!className) return;

  const els = Array.isArray(elm) ? elm : [elm];

  els.forEach((el) => {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(
        new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
        ' ',
      );
    }
  });
}
