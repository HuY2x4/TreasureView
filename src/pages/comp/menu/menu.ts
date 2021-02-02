export const MENUS = [
  {
    name: '通用组件',
    childs: [
      {
        name: '按钮',
        size: 3,
        key: 'button',
        path: '?type=button',
        typeData: require('../content/common/button').default,
      },
      {
        name: '按钮',
        size: 0,
        key: 'button2',
        path: '?type=button2',
        typeData: require('../content/common/button').default,
      },
    ],
  },
  {
    name: '布局组件',
    childs: [
      {
        name: '顶部栏',
        size: 0,
        key: 'button3',
        path: '?type=button3',
        typeData: require('../content/layout/topBar').default,
      },
    ],
  },
];
