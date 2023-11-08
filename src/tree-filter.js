/**
 * 对一个树形结构做filter操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Number} depth - 递归的深度值，初始为1
 */
function treeFilter(nodes, handler, depth = 1) {
  return nodes.reduce((acc, item) => {
    let children =
      item.children && item.children.length > 0
        ? treeFilter(item.children, handler, depth + 1)
        : [];
    if (children.length > 0 || handler(item, depth)) {
      item.children = children;
      acc.push(item);
    }
    return acc;
  }, []);
}
export default treeFilter;
