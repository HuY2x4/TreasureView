import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '加载',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 6,
        node: loadable(() => import(`./dotDelay`)),
      },
      {
        name: '加载',
        reference: [
          {
            title: '我写CSS的常用套路-交错动画',
            url: 'https://juejin.cn/post/6844904033405108232#heading-1',
          },
        ],
        span: 6,
        node: loadable(() => import(`./crimsonCrescentLoading`)),
      },
    ],
  },
];
