/**
 * 对一个树形结构做递归filter操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Number} depth - 递归的深度值，初始为1
 */
function treeFilter(nodes, handler, depth = 1) {
  return nodes.filter(item => {
    let result = handler(item, depth);
    if (result) {
      if (item.children && item.children.length > 0) {
        item.children = treeFilter(item.children, handler, depth + 1);
      }
    }
    return result;
  });
}
export default treeFilter;
