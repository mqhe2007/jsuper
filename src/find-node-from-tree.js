/**
 * 从树结构中找到某个节点
 * @module
 * @param {Array} kv - 需要匹配的键值对
 * @param {Array} treeData - 树结构数据
 */
function findNodeFromTree(kv, treeData) {
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    if (node[kv[0]] === kv[1]) {
      return node;
    } else {
      if (node.children && node.children.length > 0) {
        const result = findNodeFromTree(kv, node.children);
        if (result) return result;
      }
    }
  }
}
export default findNodeFromTree;
