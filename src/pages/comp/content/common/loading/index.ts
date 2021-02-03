import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '加载',
        span: 6,
        node: loadable(() => import(`./dotDelay`)),
      },
      {
        name: '加载',
        span: 6,
        node: loadable(() => import(`./crimsonCrescentLoading`)),
      },
    ],
  },
];
