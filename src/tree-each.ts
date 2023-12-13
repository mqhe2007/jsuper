/**
 * 对一个树形结构做递归each操作
 * @module
 * @param {Array<any>} list - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Object} parent - 父级
 */
function treeEach(list: Array<any>, handler: Function, parent: Object) {
  list.forEach((item: any) => {
    handler(item, parent);
    if (item.children?.length) {
      treeEach(item.children, handler, item);
    }
  });
}
export default treeEach;
