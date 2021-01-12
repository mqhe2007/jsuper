/**
 * 获取元素在页面中的绝对位置
 * @module
 * @returns {Object} 返回距离顶和左的绝对像素值：{top:0, left: 0}
 */
function position(el) {
  function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }

    return actualLeft;
  }

  function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }

    return actualTop;
  }
  return {
    top: getElementTop(el),
    left: getElementLeft(el),
  };
}
export default position;
