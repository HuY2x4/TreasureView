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
      {
        name: '菜单',
        size: 2,
        key: 'menu',
        path: '?type=menu',
        typeData: require('../content/common/menu').default,
      },
      {
        name: '多选框',
        size: 1,
        key: 'checkBox',
        path: '?type=checkBox',
        typeData: require('../content/common/checkBox').default,
      },
      {
        name: '卡片',
        size: 2,
        key: 'card',
        path: '?type=card',
        typeData: require('../content/common/card').default,
      },
      {
        name: '加载',
        size: 2,
        key: 'loading',
        path: '?type=loading',
        typeData: require('../content/common/loading').default,
      },
      {
        name: '背景',
        size: 3,
        key: 'background',
        path: '?type=background',
        typeData: require('../content/common/background').default,
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
