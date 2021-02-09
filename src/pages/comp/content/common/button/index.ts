import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '按钮 ',
        remark: 'scaleX',
        reference: [
          {
            title: '我写CSS的常用套路-伪类和伪元素',
            url: 'https://juejin.cn/post/6844904033405108232#heading-5',
          },
        ],
        span: 6,
        node: loadable(() => import(`./button1Border`)),
      },
      {
        name: '按钮',
        reference: [
          {
            title: '我写CSS的常用套路-伪类和伪元素',
            url: 'https://juejin.cn/post/6844904033405108232#heading-5',
          },
        ],
        span: 6,
        node: loadable(() => import(`./button3Border`)),
      },
      {
        name: '按钮',
        remark: 'background:linear-gradient()',
        reference: [
          {
            title: '我写CSS的常用套路-overflow障眼法',
            url: 'https://juejin.cn/post/6844904033405108232#heading-10',
          },
        ],
        span: 6,
        node: loadable(() => import(`./buttonShining`)),
      },
      {
        name: '按钮',
        remark: 'background:radial-gradient()',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 6,
        node: loadable(() => import(`./buttonParticle`)),
      },
    ],
  },
];
