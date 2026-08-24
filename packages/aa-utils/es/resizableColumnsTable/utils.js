export var tryParseInt = function tryParseInt(value, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = 0;
  }
  var resultValue = parseInt("" + value, 10);
  if (Number.isNaN(resultValue)) {
    return defaultValue;
  }
  return resultValue;
};
export function addClass(elm, className) {
  if (!className) {
    return;
  }
  var els = Array.isArray(elm) ? elm : [elm];
  els.forEach(function (el) {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += " " + className;
    }
  });
}
export function removeClass(elm, className) {
  if (!className) {
    return;
  }
  var els = Array.isArray(elm) ? elm : [elm];
  els.forEach(function (el) {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(' ').join('|') + "(\\b|$)", 'gi'), ' ');
    }
  });
}