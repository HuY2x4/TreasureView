import loadable from '@/utils/loadable';

export default [
  {
    height: 1,
    colChilds: [
      {
        name: '按钮',
        span: 6,
        node: loadable(() => import(`./button1Border`)),
      },
      {
        name: '按钮',
        span: 6,
        node: loadable(() => import(`./button3Border`)),
      },
      {
        name: '按钮',
        span: 6,
        node: loadable(() => import(`./buttonShining`)),
      },
      {
        name: '按钮',
        span: 6,
        node: loadable(() => import(`./buttonParticle`)),
      },
    ],
  },
];
