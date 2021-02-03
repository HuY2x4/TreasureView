import loadable from '@/utils/loadable';

export default [
  {
    height: 2,
    colChilds: [
      {
        name: '背景',
        span: 12,
        node: loadable(() => import(`./snow`)),
      },
      {
        name: '背景',
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
        span: 12,
        node: loadable(() => import(`./frostedGlass`)),
      },
    ],
  },
];
