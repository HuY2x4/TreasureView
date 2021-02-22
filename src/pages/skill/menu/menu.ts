import loadable from '@/utils/loadable';

// 基础
import { FONT_MENU, FONT_REFERENCE } from '../content/basis/font';
import { XLSX_MENU, XLSX_REFERENCE } from '../content/basis/excel';

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
        title: 'Excel',
        key: 'excel',
        path: '?type=excel',
        node: loadable(() => import('../content/basis/excel')),
        menu: XLSX_MENU,
        reference: XLSX_REFERENCE,
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
