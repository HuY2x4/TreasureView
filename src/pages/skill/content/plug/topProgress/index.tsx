// import React from 'react';
import React, { Component } from 'react';
import {
  CodeSpan,
  Span,
  Section,
  Prompt,
  CodeBlock,
  TitleSmall,
  P,
} from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';
import { Button } from 'antd';
import { getRandomNum } from '@/utils/utils';
import { Dispatch, history, ConnectProps, connect } from 'umi';

export const TOP_PROGRESS_MENU: Array<MENU_ITEM> = [
  {
    title: 'nprogress',
    id: 'nprogress',
  },
];
export const TOP_PROGRESS_REFERENCE: Array<SITE> = [
  {
    title: 'nprogress',
    url: 'https://github.com/rstacruz/nprogress',
    date: '2020/5/19',
    website: 'Github',
  },
  {
    title: 'react使用nprogress',
    url: 'https://blog.csdn.net/qq_29232955/article/details/108997059',
    date: '2020/10/10',
    website: 'CSDN',
  },
];
interface Props {}

const _connect: any = connect;
@_connect((state: any) => ({}))
export default class index extends Component {
  render() {
    return (
      <div>
        <Section
          title={getMenuItem(TOP_PROGRESS_MENU, 'nprogress').title}
          level={1}
          id={'nprogress'}
          className={styles.title_nprogress}
        >
          <P>
            <TitleSmall>相关配置：</TitleSmall>
            <CodeBlock>
              {`
                            NProgress.start() — 显示进度条
                            NProgress.done() — 完成进度
                            NProgress.set(Number) — 设置百分比
                            NProgress.inc() — 增加一点点，随机数

                            NProgress.config({
                                minimum:0.1, // 最小百分比
                                template: "..." // 修改标记结构，需要一个包含 role='bar' 属性的元素。
                                ease: 'ease',  // 动画设置
                                speed: 500, // 速度设置毫秒ms
                                trickle: false, // 关闭进度条步进
                                trickleRate: 0.02, // 度条步进
                                trickleSpeed: 800, // 度条步进速度毫秒ms
                                showSpinner: false // 关闭进度环 默认true
                              })
                            `}
            </CodeBlock>
          </P>
          <P>
            <TitleSmall>使用感受：</TitleSmall>
            挺不好用，还没研究出来怎么自主控制进度，放在compdidupdate里会报style为null的问题，
            放在小组件里也会报错，但放在compdid里是可以。
            网上资料很少很基础，这个库也有两三年没人维护了，但看了下最新的antd和antdpro官网都
            还在用。 后续实践的地方想了下只有切换路由和请求的时候。
            自己也可以实现，但是在请求的统一配置还没有思路。
          </P>
        </Section>
      </div>
    );
  }
}
