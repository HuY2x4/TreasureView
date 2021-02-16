import loadable from '@/utils/loadable';

// 基础
import { FONT_MENU, FONT_REFERENCE } from '../content/basis/font';

export const MENUS = [
  {
    type: '基础',
    childs: [
      {
        title: '字体',
        key: 'font',
        path: '?type=font',
        node: loadable(() => import('../content/basis/font')),
        menu: FONT_MENU,
        reference: FONT_REFERENCE,
      },
      {
        title: '按钮2',
        key: 'video',
        path: '?type=video',
        node: loadable(() => import('../content/media/video')),
      },
    ],
  },
  {
    type: '优化',
    childs: [
      {
        title: '顶部栏',
        key: 'button3',
        path: '?type=button3',
        node: loadable(() => import('../content/media/video')),
      },
    ],
  },
];
