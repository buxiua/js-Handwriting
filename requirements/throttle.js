/**
 * 节流函数
 * @param {Function} target 需要节流的函数
 * @param {number} delay 延时时间，ms
 * @returns 处理后的函数
 */
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
      target(...arguments);
      id = setTimeout(() => {
        id = null;
      }, delay);
    }
  };
}
