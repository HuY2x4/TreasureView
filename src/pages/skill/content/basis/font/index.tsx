import React, { useState, useEffect } from 'react';
import { CodeSpan, Section } from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM } from '@/pages/skill/components/Anchor';

export const FONT_MENU: Array<MENU_ITEM> = [
  {
    title: '标题1',
    id: 'title1',
    childs: [
      {
        title: '标题1-1',
        id: 'title1-1',
      },
      {
        title: '标题1-2',
        id: 'title1-2',
      },
    ],
  },
  {
    title: '标题2',
    id: 'title2',
    childs: [
      {
        title: '标题2-1',
        id: 'title2-1',
      },
      {
        title: '标题2-2',
        id: 'title2-2',
      },
    ],
  },
];
export const FONT_REFERENCE: Array<SITE> = [
  {
    title: '我写CSS的常用套路-CSS特性',
    url: 'https://juejin.cn/post/6844904033405108232#heading-12',
    date: '2020/7/4',
    website: '掘金',
  },
  {
    title: '我写CSS的常用套路-CSS特性',
    url: 'https://juejin.cn/post/6844904033405108232#heading-12',
    date: '2020/7/4',
    website: '掘金',
  },
];

interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section title="标题1" level={1} id={'title1'}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Section title="标题1-1" level={2} id={'title1-1'}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section title="标题1-2" level={2} id={'title1-2'}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
      </Section>
      <Section title="标题2" level={1} id={'title2'}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Section title="标题2-1" level={2} id={'title2-1'}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section title="标题2-2" level={2} id={'title2-2'}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
      </Section>
    </div>
  );
}
