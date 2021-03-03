import loadable from '@/utils/loadable';

// 技术点
import { FONT_MENU, FONT_REFERENCE } from '../content/basis/font';
import {
  REGULAR_MENU,
  REGULAR_REFERENCE,
} from '../content/basis/regularExpression';
// 插件
import { XLSX_MENU, XLSX_REFERENCE } from '../content/plug/excel';
import {
  CODE_EDITOR_MENU,
  CODE_EDITOR_REFERENCE,
} from '../content/plug/codeEditor';

export const MENUS = [
  {
    type: '技术点',
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
        title: '正则表达式',
        key: 'regularExpression',
        path: '?type=regularExpression',
        node: loadable(() => import('../content/basis/regularExpression')),
        menu: REGULAR_MENU,
        reference: REGULAR_REFERENCE,
      },
    ],
  },
  {
    type: '插件',
    childs: [
      {
        title: 'Excel',
        key: 'excel',
        path: '?type=excel',
        node: loadable(() => import('../content/plug/excel')),
        menu: XLSX_MENU,
        reference: XLSX_REFERENCE,
      },
      {
        title: '代码编辑器',
        key: 'codeEditor',
        path: '?type=codeEditor',
        node: loadable(() => import('../content/plug/codeEditor')),
        menu: CODE_EDITOR_MENU,
        reference: CODE_EDITOR_REFERENCE,
      },
    ],
  },
];
