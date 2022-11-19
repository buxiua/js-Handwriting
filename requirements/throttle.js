function throttle(target, delay) {
  if (typeof target !== "function") {
    throw TypeError("The first argument must be a Function");
  }
  if (typeof delay !== "number" || delay <= 0) {
    delay = 500;
  }
  let id = null;
  return function () {
    if (id !== null) {
      return;
    }
    target(...arguments);
    id = setTimeout(() => {
      id = null;
    }, delay);
  };
}
