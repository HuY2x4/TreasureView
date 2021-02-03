import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '浮动菜单',
        span: 6,
        node: loadable(() => import(`./menuFloat`)),
      },
      {
        name: '导航菜单',
        span: 12,
        node: loadable(() => import(`./navTab`)),
      },
    ],
  },
];
