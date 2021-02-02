import loadable from '@/utils/loadable';

export default [
  {
    name: '按钮',
    span: 6,
    node: loadable(() => import(`./shadowButton`)),
  },
];
