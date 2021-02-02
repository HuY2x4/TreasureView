import loadable from '@/utils/loadable';

export default [
  {
    name: '文本',
    span: 6,
    node: loadable(() => import(`./titleExpand`)),
  },
  {
    name: '文本',
    span: 6,
    node: loadable(() => import(`./headerSlideBar`)),
  },
  {
    name: '文本',
    span: 6,
    node: loadable(() => import(`./glitchText`)),
  },
  {
    name: '文本',
    span: 12,
    node: loadable(() => import(`./videoMaskText`)),
  },
];
