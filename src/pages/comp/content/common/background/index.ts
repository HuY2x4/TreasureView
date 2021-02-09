import loadable from '@/utils/loadable';

export default [
  {
    height: 2,
    colChilds: [
      {
        name: '背景',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./snow`)),
      },
      {
        name: '背景',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./snowScratch`)),
      },
    ],
  },
  {
    height: 2,
    colChilds: [
      {
        name: '背景',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 12,
        node: loadable(() => import(`./frostedGlass`)),
      },
    ],
  },
];
