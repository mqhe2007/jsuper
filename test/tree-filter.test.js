import treeFilter from "../src/tree-filter";
const tree = [
  {
    label: "a",
    value: true,
    children: [
      {
        label: "a-1",
        value: true,
      },
    ],
  },
  {
    label: "b",
    value: false,
    children: [
      {
        label: "b-1",
        value: false,
      },
    ],
  },
];
const result = [
  {
    label: "b",
    value: false,
    children: [
      {
        label: "b-1",
        value: false,
      },
    ],
  },
];
test("对一个树形结构做递归filter操作", () => {
  expect(
    treeFilter(tree, item => {
      return !item.value;
    })
  ).toEqual(result);
});
