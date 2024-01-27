interface TreeNode<T> {
  [key: string]: any;
  children?: TreeNode<T>[];
}
/**
 * 扁平化结构数据转换成树结构
 * @module
 * @param {Object[]} flatArray - 扁平结构的数组
 * @param {String} key - 用于指定子元素的key
 * @param {String} parentkey - 用于指定元素的父元素的key
 * @returns {TreeNode<T>[]} 树结构数据
 */
function flatToTree<T extends object>(
  flatArray: T[],
  key: keyof T,
  parentKey: keyof T
): TreeNode<T>[] {
  let result: TreeNode<T>[] = [];
  let lookup: { [key: string]: TreeNode<T> } = {};
  flatArray.forEach((item) => {
    const itemId = item[key] as unknown as string;
    lookup[itemId] = { ...item, children: [] };
  });
  flatArray.forEach((item) => {
    const parentId = item[parentKey] as unknown as string;
    if (parentId) {
      const parent = lookup[parentId];
      if (parent) {
        const itemId = item[key] as unknown as string;
        parent.children?.push(lookup[itemId]);
      }
    } else {
      const itemId = item[key] as unknown as string;
      result.push(lookup[itemId]);
    }
  });

  return result;
}

export default flatToTree;
