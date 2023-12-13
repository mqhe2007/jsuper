/**
 * 获取元素在页面中的绝对位置
 * @module
 * @returns {Object} 返回距离顶和左的绝对像素值：{top:0, left: 0}
 */
function position(el: HTMLElement): { top: number; left: number } {
  function getElementLeft(element: HTMLElement): number {
    let actualLeft = element.offsetLeft;
    let current: HTMLElement | null = element.offsetParent as HTMLElement;

    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent as HTMLElement;
    }

    return actualLeft;
  }

  function getElementTop(element: HTMLElement): number {
    let actualTop = element.offsetTop;
    let current: HTMLElement | null = element.offsetParent as HTMLElement;

    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent as HTMLElement;
    }

    return actualTop;
  }
  return {
    top: getElementTop(el),
    left: getElementLeft(el),
  };
}
export default position;
