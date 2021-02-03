import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '多选框',
        span: 8,
        node: loadable(() => import(`./checkLine`)),
      },
    ],
  },
];
