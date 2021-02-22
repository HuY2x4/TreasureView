import React, { useState, useEffect } from 'react';
import { CodeSpan, Span, Section, Prompt } from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';
export const FONT_MENU: Array<MENU_ITEM> = [
  {
    title: 'Font Module Level 3',
    id: 'fml3',
  },
  {
    title: '引用字体、图标',
    id: 'importFont',
  },
];

export const FONT_REFERENCE: Array<SITE> = [
  {
    title: 'CSS 字体：字体特性',
    url: 'https://juejin.cn/post/6904091153310695438',
    date: '2020/12/9',
    website: '掘金',
  },
  {
    title: '前端引用字体图标',
    url: 'https://blog.csdn.net/qq_35673617/article/details/79499692',
    date: '2018/3/9',
    website: 'CSDN',
  },
  {
    title: '前端引入外部字体',
    url:
      'https://blog.csdn.net/lsh_blog/article/details/105474255?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&spm=1001.2101.3001.4242',
    date: '2020/4/12',
    website: 'CSDN',
  },
];

interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section
        title={getMenuItem(FONT_MENU, 'fml3').title}
        level={1}
        id={'fml3'}
        className={styles.fml3}
      >
        <p>
          <CodeSpan>font-variant-position</CodeSpan>
          <Span>正常sub</Span>
          <Span>
            下标<i style={{ fontVariantPosition: 'sub' }}>sub</i>
          </Span>
          <Span>
            下标<i style={{ fontVariantPosition: 'sub' }}>1</i>
          </Span>
          <Span>
            上标<i style={{ fontVariantPosition: 'super' }}>super</i>
          </Span>
          <Prompt>只兼容Firefox 34+</Prompt>
        </p>
      </Section>
      <Section
        title={getMenuItem(FONT_MENU, 'importFont').title}
        level={1}
        id={'importFont'}
        className={styles.importFont}
      >
        <p>
          引用代码格式的图标：<i className={'icon-github'}></i>
        </p>
        <p>
          引用字体：<span className={styles.font}>阿巴阿巴阿巴阿巴</span>
        </p>
      </Section>
    </div>
  );
}
