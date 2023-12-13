interface TreeNode {
  [key: string]: any;
  children?: TreeNode[];
  parent?: TreeNode;
}

/**
 * 从树结构中找到某个节点
 * @module
 * @param {Array} kv - 需要匹配的键值对
 * @param {Array} treeData - 树结构数据
 * @param {Boolean} returnParent - 是否包含父级节点
 */
function findNodeFromTree(
  kv: [string, any],
  treeData: TreeNode[],
  returnParent: boolean,
  parentNode?: TreeNode
): TreeNode | undefined {
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    if (node[kv[0]] === kv[1]) {
      if (returnParent && parentNode) {
        node.parent = parentNode;
        return node;
      } else {
        return node;
      }
    } else {
      if (node.children && node.children.length > 0) {
        if (parentNode) {
          node.parent = parentNode;
        }
        const result = findNodeFromTree(kv, node.children, returnParent, node);
        if (result) {
          return result;
        }
      }
    }
  }
}

export default findNodeFromTree;
