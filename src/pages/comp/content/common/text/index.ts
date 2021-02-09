import loadable from '@/utils/loadable';

export default [
  {
    height: 2,
    colChilds: [
      {
        //col
        span: 6,
        rowChilds: [
          //row
          [
            {
              //col
              name: '文本',
              reference: [
                {
                  title: '我写CSS的常用套路-交错动画',
                  url: 'https://juejin.cn/post/6844904033405108232#heading-1',
                },
              ],
              span: 24,
              node: loadable(() => import(`./titleExpand`)),
            },
          ],
          [
            {
              name: '文本 - 定位有问题',
              reference: [
                {
                  title: '我写CSS的常用套路-伪类和伪元素',
                  url: 'https://juejin.cn/post/6844904033405108232#heading-10',
                },
              ],
              span: 24,
              node: loadable(() => import(`./headerSlideBar`)),
            },
          ],
        ],
      },
      {
        //col
        name: '文本 - 可能兼容问题',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 18,
        node: loadable(() => import(`./videoMaskText`)),
      },
    ],
  },
  {
    height: 1,
    colChilds: [
      {
        name: '文本',
        reference: [
          {
            title: '我写CSS的常用套路-CSS特性',
            url: 'https://juejin.cn/post/6844904033405108232#heading-12',
          },
        ],
        span: 6,
        node: loadable(() => import(`./glitchText`)),
      },
    ],
  },
];
