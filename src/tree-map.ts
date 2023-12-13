/**
 * 对一个树形结构做递归map操作
 * @module
 * @param {Array<any>} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {string} childrenKey - 子集的key
 * @param {number} depth - 递归的深度值，初始为1
 * @param {Object} parent - map后节点的父对象
 * @returns {Array<any>} - 处理后的树结构数组
 */
function treeMap(
  nodes: Array<any>,
  handler: Function,
  childrenKey: string = "children",
  depth: number = 1,
  parent?: Object
): Array<any> {
  return nodes.map((item) => {
    let _item = handler(item, depth, parent);
    if (item[childrenKey] && item[childrenKey].length > 0) {
      _item.children = treeMap(
        item[childrenKey],
        handler,
        childrenKey,
        depth + 1,
        _item
      );
    }
    return _item;
  });
}
export default treeMap;
