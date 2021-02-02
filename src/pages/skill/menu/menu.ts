import loadable from '@/utils/loadable';

export const MENUS = [
  {
    name: '分类1',
    childs: [
      {
        name: '按钮1',
        key: 'music',
        path: '?type=music',
        node: loadable(() => import('../content/media/music')),
      },
      {
        name: '按钮2',
        key: 'video',
        path: '?type=video',
        node: loadable(() => import('../content/media/video')),
      },
    ],
  },
  {
    name: '布局组件',
    childs: [
      {
        name: '顶部栏',
        key: 'button3',
        path: '?type=button3',
        node: loadable(() => import('../content/media/video')),
      },
    ],
  },
];
