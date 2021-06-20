/**
 * 对一个树形结构做递归map操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Number} depth - 递归的深度值，初始为1
 * @param {String} childrenKey - 子集的key
 */
function treeMap(nodes, handler, childrenKey = "children", depth = 1) {
  return nodes.map(item => {
    let _item = handler(item, depth);
    if (item[childrenKey] && item[childrenKey].length > 0) {
      _item.children = treeMap(
        item[childrenKey],
        handler,
        childrenKey,
        depth + 1
      );
    }
    return _item;
  });
}
export default treeMap;
