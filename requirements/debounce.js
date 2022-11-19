/**
 * 防抖函数
 * @param {Funtion} target 需要进行防抖处理的函数
 * @param {number} delay 延时时间，ms
 * @returns 处理后的函数
 */
function debounce(target, delay) {
  if (typeof target !== "function") {
    throw TypeError("the first argument must be a Function");
  }
  if (typeof delay !== "number" || delay < 0) {
    delay = 500;
  }
  let id;
  // 此处不能使用箭头函数，否则就argument实效
  return function () {
    clearTimeout(id);
    id = setTimeout(() => {
      target(...arguments);
    }, delay);
  };
}
