/**
 * 对一个树形结构做filter操作
 * @module
 * @param {Array} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Number} depth - 递归的深度值，初始为1
 */
import { cloneDeep } from "lodash-es";

function treeFilter(nodes, handler, depth = 1) {
  return nodes.reduce((acc, item) => {
    let clonedItem = cloneDeep(item);
    let children =
      clonedItem.children && clonedItem.children.length > 0
        ? treeFilter(clonedItem.children, handler, depth + 1)
        : [];
    if (children.length > 0 || handler(clonedItem, depth)) {
      clonedItem.children = children;
      acc.push(clonedItem);
    }
    return acc;
  }, []);
}
export default treeFilter;
