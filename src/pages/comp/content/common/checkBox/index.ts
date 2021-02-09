import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '多选框',
        reference: [
          {
            title: '我写CSS的常用套路-自定义input',
            url: 'https://juejin.cn/post/6844904033405108232#heading-11',
          },
        ],
        span: 8,
        node: loadable(() => import(`./checkLine`)),
      },
    ],
  },
];
