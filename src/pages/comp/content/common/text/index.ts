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
              span: 24,
              name: '文本',
              node: loadable(() => import(`./titleExpand`)),
            },
          ],
          [
            {
              name: '文本',
              span: 24,
              node: loadable(() => import(`./headerSlideBar`)),
            },
          ],
        ],
      },
      {
        //col
        span: 18,
        name: '文本',
        node: loadable(() => import(`./videoMaskText`)),
      },
    ],
  },
  {
    height: 1,
    colChilds: [
      {
        name: '文本',
        span: 6,
        node: loadable(() => import(`./glitchText`)),
      },
    ],
  },
  // {
  //   name: '文本',
  //   span: 6,
  //   node: loadable(() => import(`./titleExpand`)),
  // },
  // {
  //   name: '文本',
  //   span: 6,
  //   node: loadable(() => import(`./headerSlideBar`)),
  // },
  // {
  //   name: '文本',
  //   span: 6,
  //   node: loadable(() => import(`./glitchText`)),
  // },
  // {
  //   name: '文本',
  //   span: 12,
  //   height: 2,
  //   node: loadable(() => import(`./videoMaskText`)),
  // },
];
