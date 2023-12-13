/**
 * 扁平化结构数据转换成树结构
 * @module
 * @param {Object[]} flatArray - 扁平结构的数组
 * @param {String} key - 用于指定元素的key
 * @param {String} parentkey - 用于指定元素的父元素的key
 * @returns {Object[]} 由树结构组成的数组
 */

function flatToTree(flatArray: any[], key: string, parentkey: string): any[] {
  let result: any[] = [];
  const buildParent = function (item: any): any {
    const parentIndex = flatArray.findIndex(
      (item_: any) => item_[key] === item[parentkey]
    );
    if (parentIndex > -1) {
      const parent = flatArray.splice(parentIndex, 1)[0];
      parent.children = [];
      parent.children.push(item);
      if (!parent[parentkey]) {
        return parent;
      } else {
        return buildParent(parent);
      }
    } else {
      return item;
    }
  };
  flatArray.forEach((item: any) => {
    if (!item[parentkey]) {
      result.push(item);
    } else {
      result.push(buildParent(item));
    }
  });
  return result;
}
export default flatToTree;
