/**
 * 对一个树形结构做递归each操作
 * @module
 * @param {Array} list - 树结构数组
 * @param {Function} handler - 数据处理程序。
 */
function treeEach(list, handler) {
  list.forEach((item) => {
    handler(item);
    if (item.children?.length) {
      treeEach(item.children);
    }
  });
}
export default treeEach;
