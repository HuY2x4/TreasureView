import loadable from '@/utils/loadable';

export default [
  {
    height: 2,
    colChilds: [
      {
        name: '卡片',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./profileCard`)),
      },
      {
        name: '卡片',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./nameCard`)),
      },
    ],
  },
];
