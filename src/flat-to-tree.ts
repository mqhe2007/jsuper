/**
 * 扁平化结构数据转换成树结构
 * @module
 * @param {Object[]} flatArray - 扁平结构的数组
 * @param {String} key - 用于指定元素的key
 * @param {String} parentkey - 用于指定元素的父元素的key
 * @returns {Object[]} 树结构数据
 */

function flatToTree(flatArray: any[], key: string, parentkey: string): any[] {
  const flatArrayMap: any = {};
  flatArray.forEach((item) => {
    flatArrayMap[item[key]] = { ...item, children: [] };
  });
  return flatArray.reduce((acc, item) => {
    const parent = flatArrayMap[item[parentkey]];
    if (parent) {
      parent.children.push(item);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
export default flatToTree;
