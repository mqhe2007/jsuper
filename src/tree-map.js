/**
 * 对一个树形结构做递归map操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {String} childrenKey - 子集的key
 * @param {Number} depth - 递归的深度值，初始为1
 * @param {Number} parent - 父对象
 */
function treeMap(nodes, handler, childrenKey = "children", depth = 1, parent) {
  return nodes.map((item) => {
    let _item = handler(item, depth, parent);
    if (item[childrenKey] && item[childrenKey].length > 0) {
      _item.children = treeMap(
        item[childrenKey],
        handler,
        childrenKey,
        depth + 1,
        item
      );
    }
    return _item;
  });
}
export default treeMap;
