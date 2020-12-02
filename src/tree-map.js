/**
 * 对一个树形结构做递归map操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Number} depth - 递归的深度值，初始为1
 */
function treeMap(nodes, handler, depth = 1) {
  return nodes.map((item) => {
    let _item = handler(item, depth);
    if (item.children && item.children.length > 0) {
      _item.children = treeMap(item.children, handler, depth + 1);
    }
    return _item;
  });
}
export default treeMap;
