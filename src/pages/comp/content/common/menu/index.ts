import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '浮动菜单',
        reference: [
          {
            title: '我写CSS的常用套路-伪类和伪元素',
            url: 'https://juejin.cn/post/6844904033405108232#heading-5',
          },
        ],
        span: 6,
        node: loadable(() => import(`./menuFloat`)),
      },
      {
        name: '导航菜单',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./navTab`)),
      },
    ],
  },
];
