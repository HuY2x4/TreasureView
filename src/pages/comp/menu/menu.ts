export const MENUS = [
  {
    name: '通用组件',
    childs: [
      {
        name: '按钮',
        size: 4,
        key: 'button',
        path: '?type=button',
        typeData: require('../content/common/button').default,
      },
      {
        name: '文本',
        size: 4,
        key: 'text',
        path: '?type=text',
        typeData: require('../content/common/text').default,
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
