import loadable from '@/utils/loadable';

export default [
  {
    height: 2,
    colChilds: [
      {
        name: '卡片',
        span: 12,
        node: loadable(() => import(`./profileCard`)),
      },
      {
        name: '卡片',
        span: 12,
        node: loadable(() => import(`./nameCard`)),
      },
    ],
  },
];
